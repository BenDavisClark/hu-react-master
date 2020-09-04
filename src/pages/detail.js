import React from 'react'

export default class Home extends React.Component {
    componentDidMount() {
        //console.log(this.props.match.params)
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <a href='#/'>回到home页</a>
            </div>
        )
    }
}

