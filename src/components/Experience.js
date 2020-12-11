import React from "react";

import { ListGroup } from "react-bootstrap";

import * as Icon from 'react-feather';


import styled from "styled-components";

const Title = styled.h1`
    font-size: 40px;
`;


const Experience = () => {
  return <section id="experience">
    <div className="container">
    <Title>Experience</Title>
    <ListGroup variant="flush">
      <ListGroup.Item>  <Icon.Bookmark size={16} /> 2017 at Jasindo</ListGroup.Item>
      <ListGroup.Item><Icon.Bookmark size={16} /> 2020 API Developer at BRI</ListGroup.Item>
    </ListGroup>
      </div>
  </section>;
};

export default Experience;