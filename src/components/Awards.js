import React from "react";

import { ListGroup } from "react-bootstrap";

import * as Icon from 'react-feather';


import styled from "styled-components";

const Title = styled.h1`
    font-size: 40px;
`;

const Awards = () => {
  return <section id="awards">
    <div className="container">
    <Title>Awards</Title>
    <ListGroup variant="flush">
    <ListGroup.Item>  <Icon.Award size={16} /> 1st winner at Procrastinating award </ListGroup.Item>
    </ListGroup>
      </div>
  </section>;
};

export default Awards;