import React from 'react'
import styles from './index.less'
import {Tabs, Card,SegmentedControl,View,Carousel,Button,Icon } from  "antd-mobile";
import { connect } from 'dva';
import router from "umi/router";
import { StickyContainer, Sticky } from 'react-sticky';


function renderTabBar(props) {
  return (<Sticky >
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}


@connect(({ home }) => ({
  data:home,
}))
class HomePage  extends React.Component {
  state = {
    data: [],
    imgHeight: 176,
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['http://images.kaistart.com/2018-10-12_5bc0386dd4f74.png?imageView2/2/w/500', 
        'http://images.kaistart.com/2018-10-12_5bc0337b03587.jpg?imageView2/2/w/500',
         'http://images.kaistart.com/2018-09-17_5b9f14601478b.png?imageView2/2/w/500'],
      });
    }, 100);
    const {dispatch} =this.props;
    dispatch({
      type: 'home/fetchTags',
    });
    dispatch({
      type: 'home/fetchPros',
      payload: {
      // type: tabs.ID,
      },
    });
  
  }
  onChange(tabs){
    const {dispatch} =this.props;
    dispatch({
      type: 'home/fetchPros',
      payload: {
     //  type: tabs.ID,
      },
    });
  }
  /*
  * 处理点击跳转事件
   */
  handleCardClick(el){
    router.push(`/detail/${el.ID}`)
  }
  renderPros(){
    const {data:{pros}}=this.props;

   const results=pros.map(el=>{
     return (<Card full key={el.ID}  onClick={()=>{this.handleCardClick(el);}} >
      <Card.Header
        title={<span className="title">发起人：{el.NC}</span>}
        extra={<span className="title"><Icon type="icon-coordinates" size="xxs" />{el.XMWZ}</span>}
      />
      <Card.Body>
      <img src={el.TXDZ} alt="" />
      <h4>{el.MC}</h4>
        <div className="detail" >{el.MS}</div>
      </Card.Body>
      <Card.Footer extra={<div className="description"> <span  className="title"><Icon type="icon-interactive" size="xxs" />{el.DZS}</span> <span  className="title"><Icon type="icon-like" size="xxs" />{el.XHRS}</span> </div>} />
    </Card>);
   });
   return results;
  }
  render() {
    const {data:{tags}}=this.props;
   
    const tabs=tags.map(x=>{
      x.title=x.MC;
      return x;
    });
    return (
      <View className={styles.homePage}>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {this.state.data.map((val, index) => (
            <a
              key={val}
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === index ? -10 : 0,
                height: this.state.imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={`${val}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <StickyContainer>
          <Tabs tabs={tabs}
          swipeable={false}
      initialPage={0}
      onChange={(tab, index) => { this.onChange(tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      renderTabBar={renderTabBar}
    >
      <div  className={styles.contents}>
      {this.renderPros()}
      </div>
    </Tabs>
    </StickyContainer>
      </View>
    );
  }
}

export default HomePage;