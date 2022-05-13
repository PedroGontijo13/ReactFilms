import styled from "styled-components";

export const ContentArea = styled.div`
  padding: 10px;
`;

export const IconsArea = styled.div`
  margin: 2%;
`;

export const FooterArea = styled.div`
  padding-top: 10rem;
`;

export const Footer1 = styled.footer`
  background-color: ;
  padding-top: 3000px;
  @media only screen and (min-width: 1024px) {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;

export const HideArea = styled.p`
  opacity: 0;
  height: 0;

  @media only screen and (min-width: 600px) {
    opacity: 1;
    height: auto;
  }
`;
