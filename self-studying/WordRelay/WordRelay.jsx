const React = require('React');
const { Component } = React;

class WordRelay extends Component {
    state = {
        text: 'Hello , webpack',
    };

    render() {
        return<div> {this.state.text} </div>;
    }
}

module.exports = WordRelay; 