import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const NavHero = styled.nav`
  background: var(--theme-secondary);
  border-radius: 0.375rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  padding-inline: 1rem;
  margin-inline: 1rem;
  margin-block: 1rem;

  @media (min-width: 37.5rem) {
    padding-inline: 1.5rem;
    margin-inline: 2rem;
    margin-block: 2rem;
  }
`;

const NavButtonGroup = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;

  li:not(:last-of-type) {
    margin-inline: 0 1.5rem;

    &:hover,
    &:focus {
      svg {
        path:hover,
        path:focus {
          fill: var(--theme-accent);
        }
      }
    }
  }

  @media (min-width: 37.5rem) {
    li:not(:last-of-type) {
      margin-inline: 0 2rem;
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
    width: 32px;
    height: 32px;
    width: 100%;
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
