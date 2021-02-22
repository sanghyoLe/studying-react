const React = require("react");
const { useState, useRef } = React;

 const WordRelay = () => {
  const [word,setWord] = useState('이상효');
  const [value,setValue] = useState('');
  const [result,setResult] = useState('');
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setValue(e.target.value );
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
     setResult('딩동댕');
     setValue('');
     setWord(value);
     inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };


    return (
      <>
        <div>{word}</div>
        <div>
          <form onSubmit={onSubmitForm}>
            <input
              ref={inputRef}
              value={value}
              onChange={onChangeInput}
            />
            <button>submit</button>
          </form>
          {result}
        </div>
      </>
    );
  
}

module.exports = WordRelay;