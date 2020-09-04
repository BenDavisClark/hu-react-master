import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';


const RootBreadcrumb = ({match}) => {
  const urlArr = match.url.split('/');
  const len = urlArr.length;
  let temArr = [''];
  const home = '首页'
  const names = {
    tables: '简单表格',
    'asyc-tables': '简单异步表格',
    profile: '个人信息'
  };
  return (
    <Breadcrumb style={{ margin: '12px 0' }}>
      {
        urlArr[0] === urlArr[1] && <Breadcrumb.Item>{home}</Breadcrumb.Item>
      }
      {
        urlArr[0] !== urlArr[1] && urlArr.map((item, index) => {
          let key = item!=='' ? item : 'home';
          if(item!== ''){
            temArr.push(item);
          }
          if(index !== len - 1){
            return (
              <Breadcrumb.Item key={key}>
                <Link to={temArr.join('/')}>
                  {item!=='' ? names[item] : home}
                </Link>
              </Breadcrumb.Item>
            )
          } else{
            return (<Breadcrumb.Item key={key}>{names[item] ? names[item] : item}</Breadcrumb.Item>)
          }
        })
      }
    </Breadcrumb>
　)
}

RootBreadcrumb.propTypes = {
  match: PropTypes.object,
}

export default RootBreadcrumb
