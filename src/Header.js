import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  padding: 6px 10px;
  font-size: 1rem;
  font-weight: bold;
  margin: 5px;
  border-radius: 3px;

  ${props => (props.type === 'primary' ? `border: 2px solid #2196f3; color: #2196f3; &:hover { background-color: #2196f3; color: white;}` : null)}
  ${props => (props.type === 'success' ? `border: 2px solid #4caf50; color: #4caf50; &:hover { background-color: #4caf50; color: white;}` : null)}
  ${props => (props.type === 'danger' ? `border: 2px solid #f44336; color: #f44336; &:hover { background-color: #f44336; color: white;}` : null)}
  ${props => (props.type === 'warning' ? `border: 2px solid #fdd835; color: #fdd835; &:hover { background-color: #fdd835; color: black;}` : null)}
`;

const Header = (props) =>  {

  return (
    <div>
      <h2 className="theDate">{props.date}</h2>
      <Button type="primary"> I'm a button </Button>
      <Button type="success"> I'm also a button </Button>
      <Button type="danger"> I too am a button </Button>
      <Button type="warning"> You're not gonna believe this, but I'm also a button </Button>
    </div>
  )
}

export default Header;
