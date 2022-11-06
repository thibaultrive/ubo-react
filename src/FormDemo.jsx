import React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


class FormDemo extends React.Component {

    state = {
        value: "",
        submitedContent: ""
    }

    inputRef = React.createRef();

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let submitedContent = <span>
                <p>{this.inputRef.current.value}</p>
                <p>{this.state.value}</p>
            </span>;
        
        this.setState({submitedContent});
    }


    render() {
        return (
            <>
                <Card className="card">
                    <CardContent>
                        <form onSubmit={this.handleSubmit}>
                            <TextField name="inputRef" label="inputRef" defaultValue="" inputRef={this.inputRef} variant="outlined" className="form-element" />
                            <TextField name="value" label="state" value={this.state.value} onChange={this.handleChange} variant="outlined" className="form-element" />
                            <Button variant="contained" color="primary" type="submit" className="form-element">Envoyer</Button>
                        </form>
                    </CardContent>
                </Card>
                {(this.state.submitedContent) &&
                    <Card className="card">
                        <CardContent>{this.state.submitedContent}</CardContent>
                    </Card>
                }
            </>
        );
    }
}

export default FormDemo;
