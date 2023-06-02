import styled from "styled-components";
const SiteHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 89px;
  background: #ffffff;
  border-bottom: 1px solid #eeeef4;
`;
const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 700px) {
    max-width: 700px;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderStart = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderNav = styled.nav`
  margin-left: 50px;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 0;
  padding: 0;
`;
const HeaderNavLink = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #101010;
  text-decoration: none;
  &:hover {
    color: #1aab7b;
  }
  &:active {
    color: #1aab7b;
  }
`;
const Button = styled.button`
  padding: 12px 24px;
  background-color: #101010;
  border-radius: 6px;
  font-weight: 700;
  font-size: 14px;
  line-height: 120%;
  color: #ffffff;
  &:hover {
    opacity: 0.6;
    border: none;
    border: 2px solid #000006;
  }
  &:active {
    border: 2px solid #1aab7b;
    background-color: #fff;
    color: #1aab7b;
  }
  @media screen and (max-width: 375px) {
    padding: 7px 10px;
    font-size: 11px;
  }
`;

export {
  SiteHeader,
  Container,
  HeaderWrapper,
  HeaderStart,
  HeaderNav,
  NavList,
  HeaderNavLink,
  Button,
};
