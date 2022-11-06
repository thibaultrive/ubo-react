import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import {MyContext} from './myContext'

class ContextCount extends React.Component {

    render() {
        let [count, setCount] = this.context;
        return (
            <span>
                <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>Push Me</Button> : {count}
            </span>
        );
    }
}
ContextCount.contextType = MyContext;

export default ContextCount;
