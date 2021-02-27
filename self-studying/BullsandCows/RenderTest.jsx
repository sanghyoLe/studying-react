import React, { PureComponent } from 'react';

class RenderTest extends PureComponent {
    state = {
        counter: 0,
        // string: 'hello',
        // number: 1,
        // boolean: true,
        // object: { a : 1 },
        array: [],
    };
    onClick = () =>{
        const array = this.state.array;
        array.push(1);
        this.setState({
            // // 렌더링 안됨
            // array: array,
            // 렌더링 됨
            array: [...this.state.array, 1],
            // 렌더링 됨
            // object: {a : 1}
        });
    }
    // 뭔가 바뀌는게 없으면 렌더링 안되도록 해주자
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if(this.state.counter !== nextState.counter) { // 현재 카운터 ===  미래 카운터
    //         return true;  // 렌더링 함
    //     }
    //     return false; // 렌더링 안함
    // }

    // 다른 방법 
    // PureComponent 
    // shouldComponentupdate 자동으로 구현한 것 
    // 객체, 배열 등 참조 관계가 있는 경우에는 PureComponent도 바뀐지 안바뀐지를 잘 알아차리지 못함
    // 항상 새로운 배열,객체 만들고 싶다면 , 
    // array: [...this.state.array, 1] 과 같이 이전의 array를 복사해주고 그 뒤에 값을 붙여주자
    // object: {...this.state.object, 1} 
    
    // 만약, state 에 {a : 1} 과 같은 값이 있다면 , setState에서 {a : 1}을 할 때, 새로 렌더링 하므로 state에는 객체 구조를 안쓰는 것이 좋다.

    render(){
        console.log('렌더링',this.state);
        return(
        <div>
            <button onClick={this.onClick}>클릭</button>
        </div>
        );
    }
}

export default RenderTest;

// 렌더가 될 때, state 나 props 변경 되었을 때 렌더링 됌.
// react dev tool 크롬 앱스토어에서 다운 받으면  사용 가능 . 
// component 창에서 확인 가능 초록색 빨간색 하이라이트 설정 하면 됌  
// setState 호출하면 렌더링 다시됨./