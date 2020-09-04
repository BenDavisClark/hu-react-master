import React from 'react'
import { withRouter } from 'react-router-dom'

class Home extends React.Component {
    goDetail = () => {
        console.log( this.props)
        //必须在使用withRouter的情况下，该组件在this.props中才有路由参数和方法
        //否则，会报错
        this.props.history.push({
            pathname: '/detail',
            state: {
                id: '123' //同样，可以通过state向home路由对应的组件传递参数
            }
        })
    }
    render() {
        return (
            <div>
                <a href='#/detail/3'>去detail页</a>
                <button onClick={ this.goDetail }>通过函数跳转</button>
            </div>
        )
    }
}

export default withRouter(Home)