import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    --bs-bg-opacity: 1;
    background: rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important;
    color: #fff;
  }
`;

export const Background1 = styled.div`
  background: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
`;

export const Background2 = styled.div`
  background-color: rgba(
    var(--bs-secondary-rgb),
    var(--bs-bg-opacity)
  ) !important;
`;

export const ContentArea = styled.div`
  padding: 10px;
`;

export const IconsArea = styled.div`
  margin: 2%;
`;

export const FooterArea = styled.div`
  @media only screen and (min-width: 2400px) {
    padding-top: 10rem;
  }
`;

export const Footer1 = styled.footer`
  --bs-bg-opacity: 1;
  margin-top: 10px;
  background: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
  padding-top: 3000px;
  @media only screen and (min-width: 2400px) {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
`;

export const HideArea = styled.p`
  opacity: 0;
  height: 0;

  @media only screen and (min-width: 850px) {
    opacity: 1;
    height: auto;
  }
`;
