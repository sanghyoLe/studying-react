// class component
// import React, {PureComponent} from 'react';

// class Try extends PureComponent {
//     render() {
//         return (
//             <li>
//                 <div>{this.props.tryInfo.try}</div>
//                 <div>{this.props.tryInfo.result}</div>
//             </li>
//         );
//     }
// }
// export default Try;

// hooks component
import React,{memo} from 'react';
const Try = memo((props) => {
  return (
    <li>
      <div>{props.tryInfo.try}</div>
      <div>{props.tryInfo.result}</div>
    </li>
  );
});

export default Try;

