// TIME TABLES
class TimeTable extends React.Component {
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
      this.setState((prevState) => {
        return {
          result: prevState.value + " Correct !",
          firstNum: Math.ceil(Math.random() * 9),
          secondNum: Math.ceil(Math.random() * 9),
          value: "",
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          result: prevState.value + " Not Correct !",
          firstNum: Math.ceil(Math.random() * 9),
          secondNum: Math.ceil(Math.random() * 9),
          value: "",
        };
      });
    }
  };
  onChange = (e) => this.setState({ value: e.target.value });
  render() {
    return (
      <>
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
      </>
    );
  }
}

ReactDOM.render(<TimeTable />, document.querySelector("#root"));
