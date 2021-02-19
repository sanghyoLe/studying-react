class GuGuDan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: Math.ceil(Math.random() * 9),
      secondNum: Math.ceil(Math.random() * 9),
      value: "",
      result: "",
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (
      parseInt(this.state.value) ===
      this.state.firstNum * this.state.secondNum
    ) {
      this.setState({
        result: this.state.value + " Correct !",
        firstNum: Math.ceil(Math.random() * 9),
        secondNum: Math.ceil(Math.random() * 9),
        value: "",
      });
    } else {
      this.setState({
        result: this.state.value + "Not Correct !",
        firstNum: Math.ceil(Math.random() * 9),
        secondNum: Math.ceil(Math.random() * 9),
        value: "",
      });
    }
  };
  onChange = (e) => this.setState({ value: e.target.value });
  render() {
    return (
      <div>
        <div>
          {this.state.firstNum} * {this.state.secondNum}?
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            type="nubmer"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button>submit</button>
        </form>
        <div>{this.state.result}</div>
      </div>
    );
  }
}

ReactDOM.render(<GuGuDan />, document.querySelector("#root"));
