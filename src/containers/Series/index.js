import React, {Component} from 'react'
import SeriesList from "../../components/SeriesList";
import Loader from '../../components/Loader'

class Series extends Component {

    state = {
        series: [],
        seriesName: '',
        isFetching: false
    };

    onInputChanged = e => {

        console.log(e.target.value);
        this.setState({seriesName: e.target.value, isFetching: true});
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(data => this.setState({series: data, isFetching: false}));
    };

    render() {
        const {series, seriesName, isFetching} = this.state;
        return (
            <div>
                <h3>The size of the TV Series - {this.state.series.length}</h3>
                <div><input type='text' value={seriesName} onChange={this.onInputChanged}/></div>
                {series.length === 0 && seriesName.trim() === ''
                &&
                <p>Please enter a series name</p>
                }

                {!isFetching && series.length === 0 && seriesName.trim() !== ''
                &&
                <p>No series found for the name</p>
                }

                {
                    isFetching && <Loader/>
                }

                {
                    !isFetching && <SeriesList list={this.state.series}/>
                }

            </div>
        )
    }
}

export default Series;