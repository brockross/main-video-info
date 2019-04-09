import React from 'react';
import styled from 'styled-components'

const Stars = styled.span`
  font-size: 1.55em;
`;

const OrangeStar = styled.span`
  letter-spacing: 1px;
  color: #f15500;
  :hover {
    color: #bca201;
  }
`;

const EmptyStar = styled.span`
  color: #999999;
`;


class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.score
    };
  }
  render() {
    if (this.state.rating === 5) {
      return (
        <Stars>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>

        </Stars>
      )
    } else if (this.state.rating === 4) {
      return (
        <Stars>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
          <EmptyStar>&#9733;</EmptyStar>
        </Stars>
      )
    } else if (this.state.rating === 3) {
      return (
        <Stars>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
        </Stars>
      )
    } else if (this.state.rating === 2) {
      return (
        <Stars>
          <OrangeStar>&#9733;</OrangeStar>
          <OrangeStar>&#9733;</OrangeStar>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
        </Stars>
      )
    } else if (this.state.rating === 1) {
      return (
        <Stars>
          <OrangeStar>&#9733;</OrangeStar>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
        </Stars>
      )
    } else {
      return (
        <Stars>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
          <EmptyStar>&#9733;</EmptyStar>
        </Stars>
      )
    }
  }

}

export default StarRating;
export {
  OrangeStar
}
