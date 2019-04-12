import React from 'react';

const OptionsContainer = window.styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  border: 1px solid #5c5c5c;
  border-right: 2px solid #5c5c5c;
  font-family: Proxima Nova;
  overflow: hidden;
`;
const Title = window.styled.div`
  display: inline-block;
  background-color: #5c5c5c;
  font-family: Proxima Nova;
  font-size: 13px;
  color: #c4c4c4;
  height: 100%;
  width: 15%;
  overflow: hidden;
  text-align: center;
  padding: 1.75vh 0.75vw 1vh 0.75vw;
  vertical-align: top;
  transform: scale(1 , 1.48);
`;

const Option = window.styled.div`
 display: inline-block;
 color: white;
 margin: 1vh 0.85vw;
 padding-top: 1px;
 font-size: 0.85em;
`;

const Divider = window.styled.span`
  border-left: 1px solid white;
`;

const Options = (props) => {
  // look into object destructuring
  return (
    <OptionsContainer>
      <Title>SEE IT IN</Title>
      <Option>35MM</Option>
      <Divider/>
      <Option>Digital 3D</Option>
      <Divider/>
      <Option>IMAX</Option>
    </OptionsContainer>
  );
};

export default Options;