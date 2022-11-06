import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    selectCount
  } from './counterSlice';


export function ReduxCount() {

    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <span>
            <Button variant="contained" color="primary" onClick={() => dispatch(increment())}>Push Me</Button> : {count}
        </span>
    );
}
