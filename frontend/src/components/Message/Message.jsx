import React, { Component } from 'react'
import './Message.scss'

class Message extends Component {
    constructor(props) {
        super(props);
        const temp = JSON.parse(this.props.message);
        this.state = {
            message: temp
        }
    }

    render() {
        return(
            <div className='Message'>
                {this.state.message.body}
            </div>
        );
    }
}

export default Message;