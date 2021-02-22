const React = require("React");
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: "이상효",
    value: "",
    result: "",
  };
  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "딩동댕",
        word: this.state.value,
        value:''
          });
      this.input.focus();
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
      this.input.focus();
    }
  };

  input;

  onRefInput = (c) => {
    this.input = c;
  };
  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <div>
          <form onSubmit={this.onSubmitForm}>
            <input
              ref={this.onRefInput}
              value={this.state.value}
              onChange={this.onChangeInput}
            />
            <button>submit</button>
          </form>
          {this.state.result}
        </div>
      </>
    );
  }
}

module.exports = WordRelay;
