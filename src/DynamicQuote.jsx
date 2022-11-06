import React from 'react';
import './App.css';
import Quote from './Quote';
import { Button } from '@mui/material';


class DynamicQuote extends React.Component  {
    state = {
        quote: {}
    }

    componentDidMount() {
        this.getRandomQuote();
    }

    getRandomQuote = () => {
        fetch(process.env.REACT_APP_QUOTES_API_URL)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        quote: result
                    });
                },
                (error) => {
                    this.setState({ error });
                }
            )
    }


    render() {
        return (
            <>
                <div>
                    {this.state.quote.content &&
                        <Quote saying={this.state.quote.content} author={this.state.quote.author} />
                    }
                </div>
                <Button variant="contained" color="primary" onClick={this.getRandomQuote}>Une autre</Button>
            </>
        );
    }
}

export default DynamicQuote;