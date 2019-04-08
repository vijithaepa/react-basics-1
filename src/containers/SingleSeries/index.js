import React, {Component} from 'react';
import Loader from '../../components/Loader'
import {Link} from 'react-router-dom';

class SingleSeries extends Component {

    state = {
        show: null
    };

    componentDidMount() {
        const {id} = this.props.match.params;
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then(response => response.json())
            .then(json => this.setState({show: json}));
    }

    render() {
        const {show} = this.state;
        console.log(show);

        return (
            <div>
                {show === null && <Loader/>}
                {
                    show !== null
                    &&
                    <div>
                        <p><Link to={`/`}>
                            Back
                        </Link></p>
                        <p>{show.name}</p>
                        <p>Premiered : {show.premiered}</p>
                        <p>Rating : {show.rating.average}</p>
                        <p>Episodes : {show._embedded.episodes.length}</p>
                        <p><img src={show.image.medium} alt='show view' /></p>
                    </div>
                }
            </div>
        );
    }
}

export default SingleSeries;