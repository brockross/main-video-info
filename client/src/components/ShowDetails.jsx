import React from 'react';
import Popup from 'reactjs-popup';
import Showtimes from './Showtimes.jsx'
<<<<<<< HEAD
// import styled from 'styled-components';

=======


>>>>>>> a1965bf8f8d756ecd9f49bbd2b2678e8be298756
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

const PopupHeader = window.styled.h4`
  color: white;
  background-color: #666;
  margin: 0;
  padding-top: 6px;
  text-align: center;
  font-size: 14px;
  height: 5vh;
  text-transform: uppercase;
`
const PopupContent = window.styled.p`
  color: black
  padding: 3px;
  font-size: 12px;
`

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

        <AmenitiesItem>
          <Popup trigger={<p> Closed caption  &#8226;</p>} position="right center">
            <PopupHeader>CLOSED CAPTION</PopupHeader>
            <PopupContent>Closed Captioning devices display a movie's dialogue and sound effects as text; captions are not shown on the main screen.  Devices available by request.</PopupContent>
          </Popup>
        </AmenitiesItem>

        <AmenitiesItem>
          <Popup trigger={<p> Accessibility devices available  &#8226;</p>} position="right center">
            <PopupHeader>Accessibility devices available</PopupHeader>
            <PopupContent>Descriptive Video devices provide audio descriptions of the movie to accommodate the needs of visually impaired guests. Devices available by request.</PopupContent>
          </Popup>
        </AmenitiesItem>

        <AmenitiesItem>
          <Popup trigger={<p> Recliner Seats  &#8226;</p>} position="right center">
              <PopupHeader>Recliner Seats</PopupHeader>
              <PopupContent>Kick back in an extra-comfy recliner and enjoy the show.</PopupContent>
          </Popup>
        </AmenitiesItem>
        <AmenitiesItem>
          <Popup trigger={<p> <i className="fas fa-chair"></i> Reserved seating</p>} position="right center">
             <PopupHeader>Reserved seating</PopupHeader>
             <PopupContent>During checkout you will be able to reserve specific seats or be assigned seats in a premier seating area, depending on the theater.</PopupContent>
          </Popup>
        </AmenitiesItem>
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