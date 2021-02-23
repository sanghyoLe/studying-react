
const ReactDOM = require('react-dom');
import DatePicker from "react-datepicker";
import React, { useState } from "react";
const TodoList = require('./TodoList');
const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    );
  };
ReactDOM.render(<>
<TodoList/>
<Example/>
</>,document.querySelector('#root'));

