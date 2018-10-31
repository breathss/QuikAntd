import React from 'react'
import styles from './index.less'
import { Button,Icon } from  "antd-mobile";
import { connect } from 'dva';

export default connect()(({ dispatch }) => {
  return (
  <div className={styles.minePage}>
  <div className={styles.header}>
  <div className={styles.avaterMask}> 
  <img className="avater" width="50" src="http://images.kaishiba.com/header1.png" /> 
  </div>
   <div className={styles.headerText}> 
    <div> <Button type="ghost" inline size="small">未登录</Button> </div> </div>
  </div>
  </div>
  );
});

