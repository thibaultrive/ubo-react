import React from 'react';
import './App.css';
import {
    useLocation, 
    useParams,
    useHistory
} from "react-router-dom";
import { Button } from '@material-ui/core';

export default function RouterTest(props) {

    let history = useHistory();

    function goBack() {
        history.goBack();
    }

    return <>
        <h1>
            {props.match.params.myNumber} - {useParams().myNumber}
        </h1>
        <h2>
            {props.location.pathname} - {useLocation().pathname}
        </h2>
        <Button variant="contained" color="primary" onClick={goBack}>Back</Button>
    </>
}