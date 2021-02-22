const React = require('react');
const { useState, useRef} = React;
const TimeTable = () => {
    const [firstNum, setFirstNum] = useState(Math.ceil(Math.random() * 9));
    const [secondNum, setSecondNum] = useState(Math.ceil(Math.random() * 9));
    const [value, setVaule] = useState("");
    const [result, setResult] = useState("");
    const inputRef = useRef(null);
    
    const onSubmitForm = (e) => {
      e.preventDefault();
      if (parseInt(value) === firstNum * secondNum) {
        setFirstNum(Math.ceil(Math.random() * 9));
        setSecondNum(Math.ceil(Math.random() * 9));
        setVaule("");
        setResult("Correct ! answer : " + value);
        inputRef.current.focus();
      } else {
        setVaule("");
        setResult("Not Correct");
        inputRef.current.focus();
      }
    };
  
    const onChangeInput = (e) => {
      setVaule(e.target.value);
    };
    return (
      <>
        <div>
          {firstNum}  * {secondNum} 
        </div>
        <div>
          <form onSubmit={onSubmitForm}>
            <input
              ref={inputRef}
              type="number"
              value={value}
              onChange={onChangeInput}
            />
  
            <button>Submit</button>
          </form>
          {result}
        </div>
      </>
    );
  };

module.exports = TimeTable;