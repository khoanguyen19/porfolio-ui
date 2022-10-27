import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavHoverLink from "./NavHoverLink";

const Menu = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuItem = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  padding-bottom: 4px;
  text-decoration: none;
  border-bottom: 2px solid transparent;

  &:hover {
    color: #f0c3c3;
    border-bottom-color: #f0c3c3;
    transition: all ease 0.3s;
  }
`;

const NavMenu = () => {
  const data = [
    {
      name: "Video",
      path: "/video",
      subCategories: [
        { name: "Streaming / Content", subPath: "/streaming" },
        { name: "Montage / Highlight", subPath: "/highlight" },
        { name: "Intro / Trailer", subPath: "/intro" },
        { name: "Other", subPath: "/other" },
      ],
    },
    { name: "Design", path: "/design" },
    { name: "Motion Design", path: "/motionDesign" },
    { name: "3D", path: "/3d" },
  ];

  return (
    <Menu>
      {data.map((d) => (
        <MenuItem key={d.path}>
          {d.name === "Video" ? (
            <NavHoverLink name={d.name} path={d.path} items={d.subCategories} />
          ) : (
            <StyledLink to={d.path}>{d.name}</StyledLink>
          )}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default NavMenu;
