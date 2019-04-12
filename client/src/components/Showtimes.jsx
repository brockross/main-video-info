import React from 'react';

// STYLED COMPONENTS
const ShowtimeButton = window.styled.a`
  display: inline-block;
  margin-top: 1vh;
  background: #f15500;
  border-radius: 5px;
  color: white;
  text-align: center;
  font-family: ProximaNovaW01-Bold, Helvetica;
  height: 50px;
  width: 70px;
  margin-right: 0.75vw;
  line-height: 2.90em;
  :hover {
    transition: .3 ease;
    background: #fe7900;
  }
`;

// REACT COMPONENTS
const Showtimes = (props) => {
  // convert from military time to regular time
  let time = props.showing.start_time;
  if (Number(time[0] + time[1]) > 12) {
    let firstTwo = Number(time[0] + time[1]) - 12;
    let lastTwo = time[3] + time[4];
    var convertedTime = `${firstTwo.toString()}:${lastTwo}p`;
  }

  return (
    <span>
      <ShowtimeButton>
        {convertedTime ? convertedTime : time + 'p'}
      </ShowtimeButton>
    </span>
  );
};

export default Showtimes;