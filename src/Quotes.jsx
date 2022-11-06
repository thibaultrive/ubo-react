import React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


class Quotes extends React.Component {
    state = {
        quotes: [
            {id: 0, saying: "Ideas are the beginning points of all fortunes", author: "Napoleon Hill", favorite: true},
            {id: 1, saying: "Don't think of it as failure. Think of it as time-released success", author:"Robert Orben", favorite: false},
            {id: 2, saying: "Wise men speak because they have something to say; Fools because they have to say something", author:"Plato", favorite: false}
        ]
    }


    handleFavorite = (id) => {
        const quotes = [...this.state.quotes]
        const quote = quotes.find(quote => quote.id === id);
        quote.favorite = !quote.favorite
        this.setState({ quotes });
    }


    favoriteBuilder(favorite) {
        return favorite?<FavoriteIcon/>:<FavoriteBorderIcon/>;
    }


    render() {
        const quotes = this.state.quotes;
        return (
            <>
                {quotes.map(quote =>
                    <Card className="card" onClick={() => this.handleFavorite(quote.id)} key={quote.id}>
                        <CardContent>
                            {this.favoriteBuilder(quote.favorite)}
                            {quote.saying}
                        </CardContent>
                    </Card>
                )}
            </>
        );
    }
}

export default Quotes;
