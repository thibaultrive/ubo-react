import React from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Typography from '@material-ui/core/Typography';


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