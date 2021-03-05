import React, { useState, useRef, useEffect } from "react";
// React 라이프사이클
// 클래스 -> constructor -> render -> ref -> componentDidMount
// (setState/props 바뀔 떄 -> shouldComponentUpdate(true) ->  render -> componentDidUpdate)
// 부모가 자식 컴포넌트 없앴을 때 -> componentWillUnmount -> 소멸


const rspCoord = {
  rock: 0,
  scissor: "-105px",
  paper: "-210px",
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoord).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};
const scores = {
  rock: 1,
  scissor: 0,
  paper: -1,
};
const RSP_hooks = () => {
  const [result, setResult] = useState("");
  const [score, setScore] = useState(rspCoord.rock);
  const [imgCoord, setImgCoord] = useState(0);
  const interval = useRef(null);

  useEffect(()=>{ // componentDidMount, componentDidUpdate 역할 (1대1 대응은 아님)
    console.log('다시 실행');
    interval.current = setInterval(changeHand,100);
    return () => { 
        console.log('종료');
        clearInterval(interval.current)} // componentWillUnmount 역할
  }, [imgCoord]); // 두번째 인수가 클로저 문제 해결해주는 역할
  const changeHand = () => {
    if (imgCoord === rspCoord.rock) {
      setImgCoord(rspCoord.scissor);
    } else if (imgCoord === rspCoord.scissor) {
      setImgCoord(rspCoord.paper);
    } else if (imgCoord === rspCoord.paper) {
      setImgCoord(rspCoord.rock);
    }
  };
  const onClickBtn = (choice) => () => {

    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];

    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult("비겼다");
    } else if ([1, -2].includes(diff)) {
      setResult("이겼다");
      setScore((prevScore) => {
        return prevScore + 1;
      });
    } else {
      setResult("졌다");
      setScore((prevScore) => {
        return prevScore - 1;
      });
    }
    setTimeout(() => {
      interval.current = setInterval(changeHand, 100);
    }, 1000);
  };
  return (
    <>
      <div
        id="computer"
        style={{
          background: `url(data:image/png;base64,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) ${imgCoord} 0`,
        }}
      ></div>

      <div>
        <button id="rock" className="btn" onClick={onClickBtn("rock")}>
          rock
        </button>
        <button id="scissor" className="btn" onClick={onClickBtn("scissor")}>
          scissor
        </button>
        <button id="paper" className="btn" onClick={onClickBtn("paper")}>
          paper
        </button>
      </div>
      <div>{result}</div>
      <div>현재{score}점</div>
    </>
  );
};

// 라이프 사이클
// 컴포넌트가 클라이언트에 불러와서 렌더링 되는데 렌더링 되면 돔에 붙는 순간이 있음 그 순간에 특정한 동작을 해줄 수 있음
// react가 dom 에 붙여줄 때 특정한 동작을 할 수 있음
// render 가 처음 성공적으로 실행 됬다면 componentDidMount 실행 됨.
// setState같은 걸로 리렌더링 일어날 때는 componentDidMonut 실행 안됨

export default RSP_hooks;

// hooks 에 라이프사이클 있지는 않음. 흉내 낼 수 있음 
// 함수 컴포넌트는 렌더링될때마다 모두 재 실행 되는데, 
// 그래서 useEffect 에서 setInterval 사용 시에 setInterval 켜졌다가, clearInterval 했다가, 다시 켜졋다 꺼졌다 하는 것을 볼 수 있음. 
// useEffect의 두 번째 인자는 바뀌는 state를 넣어주면 됌