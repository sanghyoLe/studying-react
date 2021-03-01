import React, { Component } from "react";

class ResponseCheck extends Component {
  state = {
    state: "waiting",
    message: "클릭해서 시작",
    result: [],
  };

  timeout;
  startTime;
  endTime;
  onClickScreen = () => {
    const { state, message, result } = this.state;

    if (state === "waiting") {
      this.setState({
        state: "ready",
        message: "초록색이 되면 클릭하세요",
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: "now",
          message: "지금 클릭",
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2~3 초 랜덤
    } else if (state === "ready") {
      // 성급하게 클릭
      clearTimeout(this.timeout);
      this.setState({
        state: "waiting",
        message: "너무 빨리 클릭했습니다 초록색이 된 후 클릭하세요",
      });
    } else if (state === "now") {
      // 반응속도 체크
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: "waiting",
          message: "클릭해서 시작",
          result: [...prevState.result, this.endTime - this.startTime],
        };
      });
    }
  };
  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : (
      <div>평균시간: {result.reduce((a, c) => a + c) / result.length}ms </div>
    );
  };
  onReset = () => {
      this.setState({
          result: [],
      })
  }
  render() {
    const { state, message } = this.state;
    return (
      <>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        <ul>
        {this.state.result.map((v) =>{
            return  <li>반응속도 : {v}ms</li>;
        })}
        </ul>
        {this.renderAverage()}
        <button onClick={this.onReset}>리셋</button>
      </>
    );
  }
}

export default ResponseCheck;
