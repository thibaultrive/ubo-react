import React from 'react';
import './App.css';
import {
    useLocation, 
    useParams,
    useNavigate
} from "react-router-dom";
import { Button } from '@mui/material';

export default function RouterTest() {

    let navigate = useNavigate();
    let { myNumber } = useParams();
    let { pathname } = useLocation();

    function goBack() {
        navigate(-1);
    }

    return <>
        <h1>
            {myNumber}
        </h1>
        <h2>
            {pathname}
        </h2>
        <Button variant="contained" color="primary" onClick={goBack}>Back</Button>
    </>
}