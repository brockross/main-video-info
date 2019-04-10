import React from 'react';
// import styled from 'styled-components';

const NavWrapper = window.styled.div`
  display: grid;
  grid-template-columns: 1.75fr 4fr 1fr;
  grid-template-rows: 1fr;
  float: left;
  background-color: rgba(51,51,51,.95);
  text-transform: uppercase;
  border-bottom: 3px solid #f15500;
  box-shadow: 0 3px 3px rgba(50, 50, 50, .3);
  width: 100%;
  height: 8vh;
  margin-bottom: 10px;
`;

const NavList = window.styled.ul`
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  list-style: none;
  color: white;
  margin: 0;
  opacity: 1;
  color: white;
  :hover {
    color: rgba(204, 204, 204, 0.6);
    transition: all .2s ease-in-out;
  }
  margin: 0 0 0 6vw;
`;

const AppTitle = window.styled.a`
  font-family: ProximaNovaW01-Bold, Helvetica;
  font-size: 2.25em;
  color: #4AA7F6;
  text-decoration: none;
  line-height: 8vh;
  vertical-align: top;
  margin-left: 0.85vw;
`;
const Logo = window.styled.img`
  height: 4.65vh;
  width: 40px;
  margin-top: 1.2vh;
`;

const ListItem = window.styled.li`
  display: inline-block;
  float: left;
  margin-right: 1vw;
  font-size: 1em;
  font-family: ProximaNovaW01-Bold, Helvetica;
  line-height: 8vh;
  :hover {
    color: white;
    transition: all .2s ease-in-out;
  }
`;

const SearchBar = window.styled.input`
  height: 4vh;
  width: 15vw;
  grid-column: 2 / 4;
  margin-top: 1.5vh;
  margin-left: 1.25vw;
  padding: 0 0 0 1vw;
  font-size: 0.85em;
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

const SearchButton = window.styled.a`
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
  margin-left: 0.5vw;
  margin-right: 5vw;
  line-height: 2em;
  padding-right: 2px;
  :hover {
    transition: all .3s cubic-bezier(0, 0, .58, 1);
    background-color: #f15500;
  }
`;

const Links = window.styled.span`
  @media screen and (max-width: 600px) {
    display: none;

  }

`;

const Arrow = window.styled.span`
  color: #f15500;
`;

const AppNavbar = (props) => {

  return (
    <NavWrapper>

        <NavList>
          <ListItem>
            <Logo src="https://s3.us-east-2.amazonaws.com/fec-hrr37-brian/fandango.png" alt="Logo"/>
            <AppTitle href="#">Fandangit</AppTitle>
          </ListItem>
          <Links>
            <ListItem>
              <SearchBar placeholder="Enter City + State, ZIP Code, or Movie" type="text"></SearchBar>
              <SearchButton href="#">GO</SearchButton>
            </ListItem>

            <ListItem>Movies <Arrow className="fas fa-caret-down"/></ListItem>
            <ListItem>Movie Times + Tickets <Arrow className="fas fa-caret-down"/></ListItem>
            <ListItem>Movie News <Arrow className="fas fa-caret-down"/></ListItem>
            <ListItem>Join Fandangit<Arrow>VIP</Arrow><Arrow className="fas fa-caret-down"/></  ListItem>
          </Links>

        </NavList>

    </NavWrapper>
  );
};

export default AppNavbar;