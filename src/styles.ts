import styled from "styled-components";

export const ContentArea = styled.div`
  padding: 10px;
`;

export const HideArea = styled.p`
  opacity: 0;
  height: 0;

  @media only screen and (min-width: 600px) {
    opacity: 1;
    height: auto;
  }
`;
