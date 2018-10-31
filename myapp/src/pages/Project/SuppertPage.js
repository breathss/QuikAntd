import React,{Component} from 'react'
import {Flex,Card, WhiteSpace,View,Button } from  "antd-mobile";
import styles from './index.less'
import { connect } from 'dva';
import router from "umi/router";

@connect(({ project }) => ({
    data:project,
  }))
export default class SuppertPage  extends Component {
    constructor(props) {
        super(props);
        const {match:{params:{id}}}=this.props;
        this.state={
            id:id
        }
      }
      componentDidMount() {
        const {dispatch} =this.props;
        dispatch({
          type: 'project/getPocItems',
          payload: {
           id: this.state.id,
          },
        });
      }
    onSubmitClick(val){
        router.push(`/buy/${val}`);
    }
    render(){
      const {id}=this.state;
        const {data:{items}}=this.props;

        return <View className={styles.suppertPage}>

        {items&&items.map(x=>{
            return ( <div>
                <Card full>
                  <Card.Header
                    title={<h3>¥{x.HBJE}</h3>}
                    extra={<describe>支持{x.ZCRS}人/无限制</describe>}
                  />
                  <Card.Body>
                      <h4>{x.NAME}</h4>
                    <article> {x.HBMS}</article>
                  </Card.Body>
            <Card.Footer content={<describe>项目结束7天后发送</describe>} extra={<Button type="primary" inline icon="icon-like" size="small" onClick={()=>{this.onSubmitClick(id);}} >我要支持</Button>} />
                </Card>
                <WhiteSpace size="lg" />
              </div>)
        })}
        </View> 
    }
}