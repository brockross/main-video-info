import React from 'react';
// import styled from 'styled-components';
import {MovieInfo} from './MovieInfo.jsx';
import {MoviePoster} from './MoviePoster.jsx';
import Options from './Options.jsx';
import LocationSearch from './LocationSearch.jsx';
import LocationShowTimes from './LocationShowtimes.jsx';
import MovieNavbar from './MovieNavbar.jsx';
import API_KEY from '../../key';

// styled components below
const PosterWrapper = window.styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`;
const ContentWrapper = window.styled.div`
  margin: 0 0 0 8vw;
  // width: 400px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: 1,
      poster: '',
      movieInfo: null,
      locationSearched: false,
      showtimeInfo: null
    };
  }

  // fetch movie poster on mount
  componentDidMount() {
    this.getMoviePoster();
    this.getMovieInfo();
  }

  // get poster image associated with selected movie
  getMoviePoster() {
    let urlID = window.location.pathname
    .split('')
    .filter((char) => {
      return !isNaN(char);
    })
    .join('');

    fetch(`http://localhost:2000/movies/poster?movieID=${urlID || 1}`)
      .then(res => res.json())
      .then(
        result => {
        this.setState({
          poster: result,
        });
      },
      error => {
        this.setState({error});
      }
    )
  }
  // get correct movie info
  getMovieInfo() {
    let urlID = window.location.pathname
    .split('')
    .filter((char) => {
      return !isNaN(char);
    })
    .join('');

    fetch(`http://localhost:2000/movies?movieID=${urlID || 1}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            movieInfo: result,
          });
        },
        error => {
          this.setState({error});
        }
      )
  }
  // change state if search is activated
  changeLocationSearchStatus(e) {
    e.preventDefault();
    this.setState({
      locationSearched: true
    });
    this.getLocation();
  }
  // grab location of user
  getLocation() {
    console.log('getting location');
    let correctThis = this;
    let latitude;
    let longitude;
    navigator.geolocation.getCurrentPosition(
      function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        correctThis.getShowtimeData(latitude, longitude);
      },
      function() {
        console.log('error');
      }
    )

  }
  // get showtime info based on user location
  getShowtimeData(lat, long) {
    // hardcode id for now, maybe change later
    let filmID = 272263;
    // get current date in proper format for API
    let date = new Date();
    let month = date.getUTCMonth() + 1;
    month < 10 ? month = `0${month}` : null;
    let day = date.getUTCDate();
    day < 10 ? day = `0${day}` : null;
    let year = date.getUTCFullYear();
    console.log(`${year}-${month}-${day}`);
    // get date and time in proper format for headers
    let dateAndTime = date.toISOString();
    // using movieglu api, fetch showtimes and cinemas
    fetch(`https://api-gate2.movieglu.com/filmShowTimes/?film_id=${filmID}&date=${year}-${month}-${day}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'client': 'PERS_27',
            'x-api-key': `${API_KEY}`,
            'authorization': 'Basic UEVSU18yNzpsanpzN1VnRjhUQjA=',
            'api-version': 'v200',
            'territory': 'US',
            'device-datetime': `${dateAndTime}`,
            'geolocation': `${lat};${long}`
          }
        })
          .then(res => res.json())
          .then(
            result => {
              console.log(result);
              this.setState({
                showtimeInfo: result
              })
            },
            error => {
              this.setState({
                showtimeInfo: error
              });
            }
          )
  }

  render() {
    // move App container component here to utilize state
    // if 'GO' clicked: make container slightly bigger
    const Container = window.styled.section`
      background: #262626;
      height: ${this.state.locationSearched ? '76vh' : '72vh'};
      width: ${this.state.locationSearched ? '400px' : '395px'};
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 47.5% 5% 47.5%;
      clear: left;
   `;
    const MovieWrapper = window.styled.div`
      grid-column: 2 / 3;
      grid-row: 1 / 3;
      padding-left: ${this.state.locationSearched ? '8.75px' : '7.5px'};
  `;
    if (this.state.movieInfo && !this.state.locationSearched) {
      return (
        <div>
          <MovieNavbar movie={this.state.movieInfo}></MovieNavbar>
          <ContentWrapper>
            {/* <MovieNavbar movie={this.state.movieInfo}></MovieNavbar> */}
            <Container>

              <PosterWrapper>
                <MoviePoster poster={this.state.poster}/>
              </PosterWrapper>

              <MovieWrapper>
                <MovieInfo info={this.state.movieInfo}/>
              </MovieWrapper>

              <Options></Options>

              <LocationSearch info={this.state.movieInfo} handleSearch={this.changeLocationSearchStatus.bind(this)}></LocationSearch>

            </Container>
          </ContentWrapper>
        </div>
        )
    } else if (this.state.movieInfo && this.state.locationSearched && this.state.showtimeInfo) {
      return (
        <div>
          <MovieNavbar movie={this.state.movieInfo}></MovieNavbar>
          <ContentWrapper>
            <Container>

              <PosterWrapper>
                <MoviePoster poster={this.state.poster}/>
              </PosterWrapper>

              <MovieWrapper>
                <MovieInfo info={this.state.movieInfo}/>
              </MovieWrapper>

              <Options></Options>

              <LocationShowTimes showInfo={this.state.showtimeInfo}></LocationShowTimes>

            </Container>
          </ContentWrapper>
        </div>
        )
    } else {
      return (
        <div>ERROR</div>
      )
    }

  }
}

export default App;