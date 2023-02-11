import styled from "styled-components";

export const User = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 20px;

  border-top: 1px solid var(--color-grey-3);
  border-bottom: 1px solid var(--color-grey-3);

  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: var(--color-grey-0);
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: var(--color-grey-1);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
