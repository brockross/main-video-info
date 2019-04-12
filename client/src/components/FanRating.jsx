import React from 'react';

const FanRatingWrapper = window.styled.div`
  font-family: "Times New Roman";
  font-style: italic;
  color: white;
  text-align: center;
  padding-top: 0.5vh;
`;

const ScoreContainer = window.styled.div`
  display: grid;
  grid-template-columns: 15% 35% 35% 15%;
  grid-template-rows: 75% 25%;
  margin-top: 1em;
`;

const Percentage = window.styled.span`
  grid-column: 3 / 5;
  color: white;
  font-family: ProximaNovaW01-Bold;
  font-weight: bold;
  padding-top: 1.5vh;
  padding-left: 0.1vw;
`;

const Image = window.styled.span`
  grid-column: 1 / 3;
  margin-left: auto;
`;

const Branding = window.styled.span`
  color: white;
  font-family: "Times New Roman", serif;
  font-style: italic;
  grid-column: 2 / 5;
  grid-row: 2 / 3;
  margin-right: 2.25vw;
  font-size 12px;
  text-align: center;
`;


const FanRating = (props) => {

  let percentageScore = Math.floor(Math.random() * 100);
  if (percentageScore >= 65) {
    return (
      <div>
        <FanRatingWrapper>{Math.floor(Math.random() * 50000)} Fan Ratings</FanRatingWrapper>
        <ScoreContainer>
          <Image>
            <img src="https://img.icons8.com/color/48/000000/tomato.png"/>
          </Image>
          <Percentage>{percentageScore}%</Percentage>
          <Branding>Rotting Tomatoes&trade;</Branding>
        </ScoreContainer>

      </div>
    );
  } else {
    return (
      <div>
        <FanRatingWrapper>{Math.floor(Math.random() * 50000)} Fan Ratings</FanRatingWrapper>
        <ScoreContainer>
          <Image>
            <img src="https://img.icons8.com/color/48/000000/rotten-tomatoes.png"/>
          </Image>
          <Percentage>{percentageScore}%</Percentage>
          <Branding>Rotting Tomatoes&trade;</Branding>
        </ScoreContainer>

      </div>
    );
  }

};

export default FanRating;