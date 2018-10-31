import React from 'react'
import styles from './404.less'
import { Button,Icon } from  "antd-mobile";
import { connect } from 'dva';

export default connect()(({ dispatch }) => {
  return (
  <div className={styles.error}>
    <Icon type="icon-delete" size="lg"/>
    <h1>404 Not Found</h1>
    <Button type="primary" >返回主页</Button>
  </div>
  );
});

