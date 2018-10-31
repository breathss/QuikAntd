import React from 'react';
import { ActivityIndicator  } from 'antd-mobile';
import styles from './index.less';

export default () => (
  <ActivityIndicator size="large"  toast className={styles.globalSpin} />
);
