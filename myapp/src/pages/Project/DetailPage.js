import React,{Component} from 'react'
import {Tabs,Flex,List,Badge, Card,Progress,WhiteSpace,View,Button } from  "antd-mobile";
import router from "umi/router";
import styles from './index.less'
import { connect } from 'dva';
import moment from 'moment';

import { StickyContainer, Sticky } from 'react-sticky';
const Item = List.Item;
const Brief = Item.Brief;

function renderTabBar(props) {
  return (<Sticky >
    {({ style }) => <div style={{ ...style, zIndex: 1,padding:'0 2rem' }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}

const tabs = [
{ title: '故事' },
{ title: '项目' },
{ title: '回报' },
{ title: '进度更新' },
  ];
@connect(({ project }) => ({
    data:project,
  }))
export default class DetailPage  extends Component {
    constructor(props) {
        super(props);
        const {match:{params:{id}}}=this.props;
        this.state={
            id:id
        }
      }
    componentDidMount() {
        const {dispatch} =this.props;
        const {id}=this.state;
        // dispatch({
        //   type: 'project/getPocDetail',
        // });
        dispatch({
          type: 'project/getPocItems',
          payload:{id:id}
        });
        dispatch({
          type: 'project/getProcInfo',
          payload:{id:id}
        });
      } 
    onSupportClick(val){
        router.push(`/support/${val}`);
    }
    render(){
        const {id}=this.state;
        const {data:{proInfo}}=this.props;
      const primaryBadge={
        marginRight: '10px',
        color: '#989ca3',
        letterSpacing: 0,
        textAlign: 'center',
        padding: '5px 10px',
        background: '#f0f0f0',
      }
        
        const percent=parseFloat(proInfo.XMCYZJE/proInfo.MB*100).toFixed(1);
        return <View className={styles.detailPage}>
          <List renderHeader={() => <img src={proInfo.TXDZ} style={{width:'100%'}} />} className="my-list">
        <Item data-seed="logId" wrap>
        <h3>{proInfo.MC}</h3>
        <Badge text={proInfo.XMWZ}   style={primaryBadge}  />
        <Badge text={proInfo.XMBJ}   style={primaryBadge} />
        <Badge text={proInfo.XMFJBJ}  style={primaryBadge} />
        <div className={styles.avaterMask}> 
        <img className="avater" width="50" src={proInfo.YHTX}/> 
        <span>{proInfo.NC}</span>
        <div className={styles.content}>{proInfo.MS}</div>
        </div>

         <div className="show-info">
         <Flex >
        <Flex.Item><div>{proInfo.XMCYZJE}</div><div className={styles.desc}>已认筹(元)</div></Flex.Item>
        <Flex.Item style={{textAlign:'center'}}><div>{proInfo.CYXMSL}</div><div  className={styles.desc}>认筹人数</div></Flex.Item>
        <Flex.Item style={{textAlign:'right'}}><div>{proInfo.SYTS}天</div><div  className={styles.desc}>剩余时间</div></Flex.Item>
        </Flex>
          <div className="progress"><Progress percent={percent} position="normal" /></div>
          <Flex >
        <Flex.Item><span className={styles.smalldesc}>目标</span>{proInfo.MB}</Flex.Item>
        <Flex.Item  style={{textAlign:'right'}} ><span  className={styles.smalldesc}>进度 </span>{percent}%</Flex.Item>
        </Flex>
        </div>
        </Item>
        <StickyContainer>
     <Tabs tabs={tabs}
       swipeable={false}
      initialPage={0}
      usePaged={false}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      renderTabBar={renderTabBar}
    >
     <Item wrap>
     {proInfo.ZJXX&&JSON.parse(proInfo.ZJXX).map(x=>{
      return (<article  className={styles.navContent} >
        <h3>{x.navTitle}</h3>
        <div className={styles.title}  dangerouslySetInnerHTML={{ __html: x.title }} ></div>
        <div className={styles.content}  dangerouslySetInnerHTML={{ __html: x.content }} />
     </article>);
    })
     }
     </Item>
    <Item wrap>
    <h3>项目概况</h3>
    <Item wrap multipleLine><span className={styles.desc}  >项目名称 </span><span className={styles.desccontent}  >{proInfo.MC}</span></Item>
    <Item wrap multipleLine>  <span className={styles.desc}  >项目位置</span> <span className={styles.desccontent}  >{proInfo.XMWZ}</span></Item>
    <Item wrap multipleLine> <span className={styles.desc}  >  建筑状况</span>  <span className={styles.desccontent}  >{proInfo.JZMJ}</span></Item>
    <Item wrap multipleLine><span className={styles.desc}  >项目特色</span> <span className={styles.desccontent}   dangerouslySetInnerHTML={{ __html:proInfo.MS}} ></span></Item>
    <h3>我的团队</h3>
    {proInfo.CY&&JSON.parse(proInfo.CY).map(p=>{
      return ( <View className={styles.membersBox} > 
      <img src={p.header}/>
      <View className={styles.membersDesc} >
      <div> <span  className={styles.name} >{p.name}</span> 
      <span className={styles.role}>{p.role}</span>
       </div>
       <div  className={styles.background} dangerouslySetInnerHTML={{ __html:p.backGround}}></div>
      </View>
      </View>)
    })}
    </Item>
    <Item wrap><h3>项目回报</h3></Item>
    <Item wrap><h3>项目进度更新</h3></Item>
    </Tabs>
    </StickyContainer>
      </List>
    
        <Flex className={styles.fixedFooter}>
        <Flex.Item><Button type="ghost" icon="icon-interactive"   onClick={()=>{}} >评论</Button></Flex.Item>
     
        <Flex.Item style={{marginLeft:0}} > <Button type="primary" icon="icon-like" onClick={()=>{this.onSupportClick(id);}} >我要支持</Button></Flex.Item>
            </Flex>
        </View> 
    }
}