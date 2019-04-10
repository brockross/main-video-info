import React from 'react';
import Showtimes from './Showtimes.jsx'
// import styled from 'styled-components';

const TheaterName = window.styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-family: ProximaNovaW01-Bold, Helvetica;
  font-size: 1.55em;
  color: #4AA7F6;
  // letter-spacing: 1px;
  :hover {
    color: #2d77ef;
    transition: .3s linear;
  }
`;

const Subheading = window.styled.div`
  color: #ccc;
  font-family: Proxima Nova, Helvetica;
  font-size: 1em;
`;

const SeatingAmenitiesList = window.styled.ul`
  font-family: Proxima Nova, Helvetica;
  margin-top: 1.5vh;
  margin-bottom: .75vh;
  padding: inherit;
`;

const AmenitiesItem = window.styled.li`
  display: inline-block;
  margin-right: 5px;
  line-height: 1.6;
`;

const SeeAll = window.styled.a`
  display: block;
  margin-top: 1.75vh;
  margin-bottom: 1.75vh;
  text-decoration: none;
  text-transform: uppercase;
  font-family: ProximaNovaW01-Bold, Helvetica;
  font-size: 1.15em;
  color: #4AA7F6;
  :hover {
    color: #2d77ef;
    transition: .3s linear;
  }
`;

const ShowDetails = (props) => {
  // generate date in proper format
  let currentDate = new Date();
  let month = currentDate.toLocaleString('en-us', { month: 'long'});
  let day = currentDate.getUTCDate();
  let dayOfWeek = currentDate.toLocaleString('en-us', { weekday: 'long' });
  let year = currentDate.getUTCFullYear();
  return (
    <div>
      <TheaterName href="#">{props.cinema.cinema_name}</TheaterName>
      <Subheading>Movie Times for {`${dayOfWeek}, ${month} ${day}, ${year}`}</Subheading>
      {/* Seating Amenities */}
      {/* hard coded since info is not available in API used */}
      <SeatingAmenitiesList>
        <AmenitiesItem>Closed caption  &#8226;</AmenitiesItem>
        <AmenitiesItem>Accessibility devices available  &#8226;</AmenitiesItem>
        <AmenitiesItem>Recliner Seats  &#8226;</AmenitiesItem>
        <AmenitiesItem><i className="fas fa-chair"></i> Reserved seating</AmenitiesItem>
      </SeatingAmenitiesList>

      {/* showtime buttons */}
      {
        props.cinema.showings.Standard.times.map((showing, i) => {
          return <Showtimes key={i} showing={showing}/>
        })
      }

      {/* SEE ALL LINK */}
      <SeeAll href="#">see all theaters + movie times</SeeAll>

    </div>
  );
};

export default ShowDetails;