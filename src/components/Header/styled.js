import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;

  a {
    width: 80px;
    height: 30px;
    background: var(--color-grey-3);
    border-radius: 4px;

    font-weight: 600;
    font-size: 9.59437px;
    line-height: 23px;

    text-decoration: none;
    text-align: center;
    color: var(--color-grey-0);

    padding: 4px;

    cursor: pointer;
  }

  @media(min-width: 768px){
    justify-content: space-around;
  }
`;
