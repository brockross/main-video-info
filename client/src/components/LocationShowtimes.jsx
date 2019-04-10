import React from 'react';
import ShowDetails from './ShowDetails.jsx';
// import styled from 'styled-components';

// STYLED COMPONENTS
const ShowtimeContainer = window.styled.div`
  grid-column: 1 / 3;
  color: #ccc;
  background: rgba(51, 51, 51, .75);
  padding: 0.5vh 1.25vw;;
  text-align: left;
  border: none;
`;

const Heading = window.styled.h3`
  display: inline-block;
  margin-top: 0.5vh;
  margin-bottom: 1vh;
  color: white;
  font-family: Alternate Gothic No1 D;
  font-size: 2.85em;
  letter-spacing: 1.5px;
  font-weight: 400;
`;

const Ticket = window.styled.span`
  font-size: 2.65em;
  color: white;
  transform: rotate(-13deg);
  margin-right: 1vw;
  margin-top: 1.25vh;
`;


// REACT COMPONENT
class LocationShowTimes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

      return(
        <ShowtimeContainer>
          {/* heading */}
          <Ticket className="fas fa-ticket-alt"></Ticket>
          <Heading>
            BUY MOVIE TICKETS
          </Heading>

          <ShowDetails cinema={this.props.showInfo.cinemas[0]}/>

        </ShowtimeContainer>


      )
  }
}

export default LocationShowTimes;