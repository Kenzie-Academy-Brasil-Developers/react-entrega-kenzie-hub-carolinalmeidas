import styled from "styled-components";

export const StyledList = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 90vw;
  height: 49px;

  background: var(--color-grey-4);
  border-radius: 4px;

  padding: 20px;

  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;

    color: var(--color-grey-0);
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    color: var(--color-grey-1);
  }

  :hover {
    cursor: pointer;
    border: none;
    background: var(--color-grey-2);
    border-radius: 4px;
  }

  @media (min-width: 768px) {
   
    max-width: 650px;
    
  }
`;
