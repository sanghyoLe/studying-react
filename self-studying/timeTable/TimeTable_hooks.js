const TimeTable = () => {
  const [firstNum, setFirstNum] = React.useState(Math.ceil(Math.random() * 9));
  const [secondNum, setSecondNum] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setVaule] = React.useState("");
  const [result, setResult] = React.useState("");
  const inputRef = React.useRef(null);
  
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

ReactDOM.render(<TimeTable />, document.querySelector("#root"));
