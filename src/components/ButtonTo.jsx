import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { ArrowRight } from "@styled-icons/bootstrap/ArrowRight";

const ToAbout = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  color: #cdef13;
  font-size: 20px;
  font-weight: 600;
  padding: 2px 0;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    border-bottom: 2px solid #cdef13;
  }
`;

const Icon = styled.span`
  margin-left: 4px;
`;

const ButtonTo = ({ section, toSection }) => {
  return (
    <Link
      activeClass="active"
      to={toSection}
      spy={true}
      smooth={true}
      offset={50}
      duration={800}
    >
      <ToAbout>
        {section}
        <Icon>
          <ArrowRight size="20" fill="#cdef13" />
        </Icon>
      </ToAbout>
    </Link>
  );
};

export default ButtonTo;
