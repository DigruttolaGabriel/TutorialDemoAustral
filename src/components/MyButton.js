import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
export default class MyButton extends Component {
    constructor(props){
        super(props);{
            this.state = {
                counter: 0,
            };

    this.handleClick = this.handleClick.bind(this);
        }
    }
    handleClick(e){
        this.setState({counter:this.state.counter+1})
      }
    render() {
        return (
            <div>
                <Button
                    color='red'
                    content='Like'
                    icon='heart'
                    label={{ basic: true, color: 'red', pointing: 'left', content: this.props.counter }}
                    onClick={this.props.addCounter}
                />
                <Button
                    basic
                    color='blue'
                    content='Fork'
                    icon='fork'
                    label={{ as: 'a', basic: true, color: 'blue', pointing: 'left', content: this.state.counter }}
                    onClick={this.handleClick}
                />
            </div>
        )
    }
}