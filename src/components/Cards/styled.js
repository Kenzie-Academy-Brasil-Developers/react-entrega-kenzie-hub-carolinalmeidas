import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  gap: 10px;
  div {
    width: 100vw;
    height: 40px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 10px;

    h2 {
      font-weight: 600;
      font-size: 16px;
      line-height: 18px;

      color: var(--color-grey-0);
    }
    button {
      width: 32px;
      height: 32px;
      background-color: var(--color-grey-2);
      border-radius: 4px;
      border: none;
      color: var(--color-grey-0);
      cursor: pointer;
    }
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    align-items: center;
    gap: 20px;
    background: #212529;
    border-radius: 4px;
    width: 97vw;
    padding: 20px;
  }
  @media (min-width: 768px) {
    div {
      max-width: 700px;
    }
    ul {
      max-width: 700px;
    }
  }
`;
