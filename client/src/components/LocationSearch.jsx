import React from 'react';
// import styled from 'styled-components';

// STYLED COMPONENTS
const LocationContainer = window.styled.div`
  grid-column: 1 / 3;
  color: #ccc;
  background: rgba(51, 51, 51, .75);
  padding: 0.5vh 1vw;;
  text-align: left;
  border: none;
`;

const Heading = window.styled.h3`
  margin: 0;
  color: inherit;
  line-height: 1.5;
  font-size: 2.65em;
  font-family: Alternate Gothic No1 D;
  vertical-align: middle;
  letter-spacing: 1px;
  font-weight: 400;
`;

const Message = window.styled.p`
  font-family: Proxima Nova;
  font-size: 1em;
`;

const MessageWrapper = window.styled.div`
  margin-bottom: 1vh;
  margin-top: 1.75vh;
`;

const IconArrow = window.styled.span`
  color: white;
  margin-right: 1.4vw;
  font-size: 0.8em;
`;

const Directions = window.styled.span`
  font-family: Proxima Nova;
  display: block;
  font-weight: 400;
  margin-top: 2.75vh;
  margin-bottom: 1.25vh;
  font-size: 1.2em;
`;

const Search = window.styled.input`
  height: 4.3vh;
  width: 265px;
  margin-top: 1.3vh;
  padding: 0 0 0 1vw;
  font-size: 1.25em;
  font-family: "Times New Roman", Georgia, Serif;
  font-style: italic;
  text-align: left;
  background: rgba(235, 235, 235, .8);
  border-radius: 25px;
  box-shadow: inset 2px 3px 0 rgba(99, 99, 99, .5);
  :focus {
    background-color: #ebebeb;
  }
  ::placeholder {
    color: #333;
  }
`;

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  color: white;
  background-color: #fe7900;
  border-radius: 55%;
  font-family: ProximaNovaW01-Bold;
  font-style: italic;
  font-size: 1.3em;
  height: 38px;
  width: 38px;
  margin-left: 1vw;
  line-height: 2.15em;
  padding-right: 2px;
  padding-bottom: 2.5px;
  :hover {
    transition: all .3s cubic-bezier(0, 0, .58, 1);
    background-color: #f15500;
  }
`;

// REACT COMPONENT

class LocationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <LocationContainer>
        <MessageWrapper>
          <Heading>
            <IconArrow>
              <i className="fas fa-location-arrow"></i>
            </IconArrow>
            TELL US WHERE YOU ARE
          </Heading>

          <Message>Looking for movie tickets? Enter your location to see which movie theaters are playing {this.props.info.info.name} near you.</Message>
        </MessageWrapper>

        <Directions>ENTER CITY, STATE OR ZIP CODE</Directions>

        <Search placeholder="City, State or Zip Code" type="text"></Search>
        <Button href="#" onClick={() => this.props.handleSearch()}>GO</Button>

      </LocationContainer>
    )
  }
}

export default LocationSearch;