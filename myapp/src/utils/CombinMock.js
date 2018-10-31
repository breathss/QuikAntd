
import Mock from 'mockjs';
import api from "./../../mock/api.js";
const data = Object.assign({},api);
/*
const fs=require('fs'); 
const path=require('path'); 
const mockPath=path.join(__dirname+'/mock'); 
const mock={};
fs.readdirSync(mockPath).forEach(file=>{      
    console.log(file);
Object.assign(mock,require('./mock/'+file)); }); 
*/
  Mock.setup({ timeout: '100 - 400' })

  // 配置拦截 ajax 的请求时的行为，支持的配置项目有 timeout。
  Object.keys(data).map(x=>{
     var tmp=x.replace('GET','').replace('POST','').trim();
    var patt1=new RegExp(tmp);
     Mock.mock(patt1, data[x]);
  })
//module.exports=data;
  function HttpRequest(url='', data={}, type='GET'){
  type = type.toUpperCase();
  if(type == 'GET') { // 拼接参数
    let dataStr = '';
    Object.keys(data).forEach((key, index, array) => {
      dataStr = dataStr + key + '=' + data[key] + '&';
    })

    if(dataStr != '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
      url = url + '?' + dataStr;
    }
  }
  
    // 如果浏览器不支持 fetch
    return new Promise((resolve, reject) => {
            let requestObj;
            if (window.XMLHttpRequest) {
                requestObj = new XMLHttpRequest();
            } else {
                requestObj = new ActiveXObject;
            }
            let sendData = '';
            if (type == 'POST') {
            sendData = JSON.stringify(data);
            }
            requestObj.open(type, url, true);
            requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            requestObj.send(sendData);

              /**兼容构建操作 */
              requestObj.custom.options.send=(obj)=>{
                 if (typeof obj !== 'object') {
                    obj = JSON.parse(obj);
                }
                requestObj.response=obj;
                return obj;
              }
               requestObj.json=(param)=>{
                let obj = param?param:requestObj.response
                if (typeof obj !== 'object') {
                    obj = JSON.parse(obj);
                }
                return obj;
              }
              requestObj.text=()=>{
                let obj = requestObj.response
                if (typeof obj == 'object') {
                    obj = JSON.stringify(obj);
                }
                return obj;
              }
              if(typeof(requestObj.custom.template.template=="function")){
                 ((func)=>{
                 const {body}=requestObj.custom.options;
                 const bodyobj=((body&&typeof(body)=="string")?JSON.parse(body):body);
                   if(typeof(func)=="function"){
                  requestObj.custom.template.template=(option)=>{
                  let req={
                    send:option.send,
                    body:bodyobj
                  }
                 let res={
                    json: requestObj.json,
                     send:option.send,
                  },
                  next=()=>{}
                  
                 const resp = func(req,res,next);
                requestObj.custom.template.template=func;
                 return (resp?resp:requestObj.response);
                }
                   }
                 })(requestObj.custom.template.template)
            
              }

            requestObj.onreadystatechange = () => {
                if (requestObj.readyState == 4) {
                    if (requestObj.status == 200) {
                        let obj = requestObj.response
                        if (typeof obj !== 'object') {
                            obj = JSON.parse(obj);
                        }
                        resolve(requestObj)
                    } else {
                        reject(requestObj)
                    }
                }
            }
        });
}


/**
 * 用于处理mock请求 
 */
const postUrl='/mock.html?';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  notification.error({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: errortext,
  });
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};
export  function mockRequest(
  url,
  options = {
  //  expirys: isAntdPro(),
  }
) {
   const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
     // newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      };
    }
  }
url=postUrl+url;
 return HttpRequest(url,newOptions.body, newOptions.method)
    .then(checkStatus)
  //  .then(response => cachedSave(response, hashcode))
    .then(response => {
      // DELETE and 204 do not return data by default
      // using .json will report an error.
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text();
      }
      return response.json();
    })
    .catch(e => {
      const status = e.name;
      if (status === 401) {
        // @HACK
        /* eslint-disable no-underscore-dangle */
        window.g_app._store.dispatch({
          type: 'login/logout',
        });
        return;
      }
      // environment should not be used
      if (status === 403) {
        router.push('/exception/403');
        return;
      }
      if (status <= 504 && status >= 500) {
        router.push('/exception/500');
        return;
      }
      if (status >= 404 && status < 422) {
        router.push('/exception/404');
      }
    });

}