import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Header({ isLight, handleToggleTheme }) {
  const location = useLocation();
  return (
    <Wrapper>
      <h1>Chomper</h1>
      <nav>
        <Link to="/">
          <MenuEL isCurrentPage={location.pathname === "/"}>Home</MenuEL>
        </Link>
        <Link to="/about">
          <MenuEL isCurrentPage={location.pathname === "/about"}>About</MenuEL>
        </Link>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0px 24px;
  align-items: center;

  & a {
    text-decoration: none;
    color: inherit;
  }
  & a:first-child {
    margin-right: 16px;
  }
`;

const MenuEL = styled.p`
  font-size: 18px;
  padding-bottom: 2px;
  border-bottom: inset 2px
    ${(props) => (props.isCurrentPage ? "" : "transparent")};
  &:hover {
    border-bottom: inset 2px;
  }
`;
