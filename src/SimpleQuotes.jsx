import React from 'react';
import './App.css';
import Quote from './Quote';


class SimpleQuotes extends React.Component {
    state = {
        quotes: [
            {id: 0, saying: "Ideas are the beginning points of all fortunes", author: "Napoleon Hill"},
            {id: 1, saying: "Don't think of it as failure. Think of it as time-released success", author:"Robert Orben"},
            {id: 2, saying: "Wise men speak because they have something to say; Fools because they have to say something", author:"Plato"}
        ]
    }

    render() {
        return (
            <div>
                {this.state.quotes.map(quote =>
                    <Quote saying={quote.saying} author={quote.author} key={quote.id}/>
                )}
            </div>
        );
    }
}

export default SimpleQuotes;