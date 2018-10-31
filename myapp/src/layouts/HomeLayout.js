import React,{PureComponent} from 'react'
import { TabBar,Icon } from  "antd-mobile";
import styles from './index.less';
import router from "umi/router";
import { connect } from "dva";
import withRouter from "umi/withRouter";

/**
 * 主页带菜单带分栏
 */
class HomeLayout extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'home',
          hidden: false,
          fullScreen: false,
        };
      }
      render() {
        const {availWidth,availHeight}= window.screen;
        const height=availHeight-50;
        const style={
          height:height,
          width:availWidth,
          overflowX: 'hidden'
        }
        return (
          <div style={style}>
          <div style={style}>
          {this.props.children}
          </div>
          <footer   className={styles.bottomBar} >
            <TabBar
             unselectedTintColor="#949494"
             tintColor="#5cb975"
             noRenderContent={true}
              hidden={this.state.hidden}
              tabBarPosition="bottom"
            >
              <TabBar.Item
                title="首页"
                key="Life"
                icon={<Icon type="icon-homepage"   />}
                selectedIcon={<Icon type="icon-homepage_fill"  />}
                selected={this.state.selectedTab === 'home'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'home',
                  });
                  const {selectedTab} =this.state;
                  const {pathname} =this.props;
                  router.push('/dashboard/home')
                }}
                data-seed="logId"
              >
              
              </TabBar.Item>
              <TabBar.Item
                icon={<Icon type="icon-people"  />}
                selectedIcon={<Icon type="icon-people_fill"   />}
                title="我的"
                key="Koubei"
                selected={this.state.selectedTab === 'mine'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'mine',
                  });
                  router.push('/dashboard/mine')
                }}
                data-seed="logId1"
              >
               
              </TabBar.Item>
            
            </TabBar>
            </footer>
          </div>
        );
      }
    }

    function mapStateToProps(state) {
      return {
        pathname: state.routing.location.pathname
      };
    }
    export default withRouter(connect(mapStateToProps)(HomeLayout));
