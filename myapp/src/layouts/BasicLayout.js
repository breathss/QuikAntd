import styles from './index.less';

function BasicLayout(props) {
  const {availWidth,availHeight}= window.screen;
  const height=availHeight-2;
  const style={
    height:height,
    width:availWidth,
    overflowX: 'hidden'
  }
  return (
    <div className={styles.normal} style={style}>
      { props.children }
    </div>
  );
}

export default BasicLayout;
