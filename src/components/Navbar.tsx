import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const NavHero = styled.nav`
  background: var(--theme-secondary);
  border-radius: 0.375rem;
  position: relative;
  display: flex;
  align-items: center;
  
  height: 56px;
  margin-block: 0 1rem;
  margin-inline: 0;
  padding-inline: 1rem;


  /* Media - Tablet and up */
  // 600px
  @media (min-width: 37.5rem) {
    height: 70px;
    margin-block: 2rem;
    margin-inline: 1.5rem;
    padding-inline: 1.5rem;
  }

  /* Media - Small Desktop and up */
  // 900px
  @media (min-width: 56.25rem) {
    flex-direction: column;
    width: 4.5rem;
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

    a:active {
      svg path {
        fill: var(--text-primary);
      }
    }
  }
  li:not(:last-of-type) {
    margin-inline: 0 1.5rem;
  }


  @media (min-width: 37.5rem) {
    li:not(:last-of-type) {
      margin-inline: 0 2rem;
    }
  }

  @media (min-width: 56.25rem) {
    flex-direction: column;
    align-items: center;
    margin-block: 5rem auto;
    margin-inline: 0;

    li:not(:last-of-type) {
      margin-block: 0 3.5rem;
      margin-inline: 0;
    }
  }
  
`;

const NavUserProfile = styled.button`
  background: transparent;
  border: none;
  border-radius: 50%;

  &:hover,
  &:focus {
    background: transparent;
    cursor: pointer;
  }

  img {
    border: 1px solid var(--text-primary);
    border-radius: 50%;
    width: 100%;
    width: 32px;
    height: 32px;
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
} from "./NavButtons";

export default function Navbar() {
  return (
    <NavHero>
      <div className="nav__logo">
        <LogoSvg />
      </div>

      <NavButtonGroup>
        <li>
          <Link to="/">
            <NavHomeSvg />
            {/* <HomeSvg /> */}
          </Link>
        </li>
        <li>
          <Link to="/movies">
            <NavMoviesSvg />
          </Link>
        </li>
        <li>
          <Link to="/tv-series">
            <NavTvSeriesSvg />
          </Link>
        </li>
        <li>
          <Link to="/bookmarked">
            <NavBookmarkedSvg />
          </Link>
        </li>
      </NavButtonGroup>

      <NavUserProfile className="user-btn">
        <img src={UserImg} alt="username" />
      </NavUserProfile>
    </NavHero>
  );
}
