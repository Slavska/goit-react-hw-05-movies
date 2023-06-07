import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
`;
export const Ul = styled.ul`
  gap: 20px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;
export const Li = styled.li`
  flex-basis: calc(100% - 120px) / 5;
  padding: 10px 20px;
  border-radius: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 220px;
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  color: orangered;
`;
export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const LinkNav = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 10px;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
export const LinkStyled = styled(Link)`
  border-radius: 15px;
  padding: 8px 8px;
  color: black;
  font-weight: 500;
  > img {
    margin-bottom: 15px;
    border-radius: 10px;
  }
  &:focus {
    padding: 8px 8px;
    color: white;
    background-color: orangered;
  }
  &:hover {
    padding: 8px 8px;
    color: white;
    background-color: orangered;
  }
`;
