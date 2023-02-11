import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  label {
    font-weight: 400;
    font-size: 15px;
    color: var(--color-grey-0);
  }

  input {
    width: 70vw;
    height: 50px;

    max-width: 400px;

    background: var(--color-grey-2);
    /* grey-0 */

    
    border: 1px solid var(--color-grey-2);
    border-radius: 4px;

    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    color: var(--color-grey-0);
    padding: 10px;
  }
  input:focus {
      outline: none;
      border: 1px solid var(--color-grey-0);
  }

    
`;
