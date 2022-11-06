import React from 'react';
import './App.css';
import { Button } from '@mui/material';

class Count extends React.Component {
    state = {
        compteur: 0
    }

    handleClick = () => {
        this.setState({ compteur: this.state.compteur + 1 });
    }

    render() {
        return (
            <span>
                <Button variant="contained" color="primary" onClick={this.handleClick}>Push Me</Button> : {this.state.compteur}
            </span>
        );
    }
}

export default Count;