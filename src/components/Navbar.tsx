import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

const StyledNav = styled.nav`
  --nav-spacing: 4.5rem;
  --block-sizing: 1rem;
  --inline-sizing: 1rem;

  background: var(--theme-secondary);
  position: relative;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  height: 3.5rem;
  margin-block: 0 var(--inline-sizing);
  margin-inline: 0;
  padding-inline: var(--inline-sizing);

  /* Media - Tablet and up */
  // 600px
  @media (min-width: 37.5rem) {
    --block-sizing: 1.5rem;
    --inline-sizing: 1.5rem;

    height: var(--nav-spacing);
    margin-block: 2rem;
    margin-inline: var(--inline-sizing);
    padding-inline: var(--inline-sizing);
  }

  /* Media - Small Desktop and up */
  // 900px
  @media (min-width: 56.25rem) {
    flex-direction: column;
    width: var(--nav-spacing);
    height: 60rem;
    margin-inline: 1.5rem;
    padding-block: 2rem;
    padding-inline: 0;
  }
`;

const NavButtonGroup = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-inline: auto;

  li {
    a:hover,
    a:focus {
      svg path {
        fill: var(--theme-accent);
      }
    }

    .active{
      svg path {
        fill: var(--text-primary);
      }
    }
  }

  li:not(:last-of-type) {
    margin-inline: 0 1.5rem;
  }

  /* Media - Tablet and up */
  // 600px
  @media (min-width: 37.5rem) {
    li:not(:last-of-type) {
      margin-inline: 0 2rem;
    }
  }

  /* Media - Small Desktop and up */
  // 900px
  @media (min-width: 56.25rem) {
    --inline-sizing: 0;

    align-items: center;
    flex-direction: column;
    margin-block: 5rem auto;
    margin-inline: var(--inline-sizing);

    li:not(:last-of-type) {
      margin-block: 0 3.5rem;
      margin-inline: var(--inline-sizing);
    }
  }
`;

const NavUserProfile = styled.button`
  background: transparent;
  border: none;
  border-radius: 50%;

  &:hover {
    background: transparent;
    cursor: pointer;
  }

  img {
    --img-sizing: 2rem;

    border: 1px solid var(--text-primary);
    border-radius: 50%;
    height: var(--img-sizing);
    width: var(--img-sizing);
    object-fit: cover;
  }
`;

import UserImg from "../assets/image-avatar.png";
import {
  LogoSvg,
  NavHomeSvg,
  NavMoviesSvg,
  NavBookmarkedSvg,
  NavTvSeriesSvg,
} from "./Icons";

const Navbar = () => {
  return (
    <StyledNav>
      <div className="nav__logo">
        <LogoSvg />
      </div>

      <NavButtonGroup>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <NavHomeSvg />
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies">
            <NavMoviesSvg />
          </NavLink>
        </li>
        <li>
          <NavLink to="/tv-series">
            <NavTvSeriesSvg />
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookmarked">
            <NavBookmarkedSvg />
          </NavLink>
        </li>
      </NavButtonGroup>

      <NavUserProfile className="user-btn">
        <img src={UserImg} alt="username" />
      </NavUserProfile>
    </StyledNav>
  );
}

export default Navbar;