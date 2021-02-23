import React, {Component} from 'react';

class Try extends Component {
    render() {
        return (
            <li>{this.props.value.fruit} - {this.props.index}
            
            </li> 
        );
    }
}
export default Try;