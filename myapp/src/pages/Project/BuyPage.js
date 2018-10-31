import React,{Component} from 'react'
import {Tabs,Flex,List,Badge, Card,Progress,WhiteSpace,View,Button } from  "antd-mobile";
import router from "umi/router";
import styles from './index.less'
import { connect } from 'dva';
import { StickyContainer, Sticky } from 'react-sticky';
const Item = List.Item;
const Brief = Item.Brief;


@connect(({ project }) => ({
    data:project,
  }))
export default class BuyPage  extends Component {
    constructor(props) {
        super(props);
        const {match:{params:{id}}}=this.props;
        this.state={
            id:id
        }
      }
    componentDidMount() {
        const {dispatch} =this.props;
      } 
     onSubmitClick(val){
      //  router.push(`/support/${val}`);
    }
    render(){
        const {id}=this.state;

        return <View className={styles.buyPage}>
         <List renderHeader={() => '您选择了回报'} className="my-list">
        <Item  extra="" >测试</Item>
      </List>
      <List renderHeader={() => '选择收获地址'} className="my-list">
      <Item>
          <div className="primary">
          选择收获地址
          </div>
        
        </Item>
        </List>

        
        <Flex className={styles.fixedFooter}>
        <Flex.Item><div></div></Flex.Item>
     
        <Flex.Item style={{marginLeft:0}} > <Button type="primary"   onClick={()=>{this.onSubmitClick(id);}} >提交订单</Button></Flex.Item>
            </Flex>
        </View> 
    }
}