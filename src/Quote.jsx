import React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';


class Quote extends React.Component {

    handleFavorite = () => {
        this.setState({ favorite: !this.state.favorite });
    }

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }


    render() {
        /* const saying = this.props.saying; */
        const {saying, author} = this.props;
        return (
            <Card className="card" onClick={this.handleFavorite}>
                <CardContent>
                    <span>{(this.state.favorite !== undefined) && (this.state.favorite?<FavoriteIcon/>:<FavoriteBorderIcon/>)}</span>
                    <span>
                        <Typography variant="h5" component="h2">{saying}</Typography>
                        <Typography color="textSecondary">{author}</Typography>
                    </span>
                </CardContent>
            </Card>
        );
    }
}

export default Quote;