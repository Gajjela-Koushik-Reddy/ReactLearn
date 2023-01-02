import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';

const ExpenseItem = (props) => {

    // needs a default state value
    // creates a special variable and gives access to us by returning the variable
    // returns a function
    // [value, updatingFunction()]
    let [title, setTitle] = useState(props.title); 

    const clickHandler = () => {
            setTitle('Updated!');
    }

    return (
    <Card className='expense-item'>
        <ExpenseDate date = {props.date}/>
        <div  className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
    )
}

export default ExpenseItem;