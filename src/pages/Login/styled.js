import styled from "styled-components";

export const StyledLogin = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;
  gap: 20px;
  img {
    width: 110px;
    height: 30px;
  }
  .form {
    width: 80vw;
    height: 80vh;

    max-width: 500px;
    max-height: 500px;

    display: flex;
    flex-direction: column;

    background-color: var(--color-grey-3);

    padding: 10px 10px;
    border-radius: 8px;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      h1 {
        font-weight: 700;
        font-size: 15px;
        line-height: 22px;
        color: var(--color-grey-0);
        text-align: center;
      }
    }
    .register {
      display: flex;
      flex-direction: column;
      align-items: center;

      gap: 10px;
      padding: 30px;
      p {
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: var(--color-grey-1);
      }
      a {
        width: 70vw;
        height: 50px;
        max-width: 400px;

        background-color: var(--color-grey-1);

        border: 2px solid var(--color-grey-1);
        border-radius: 4px;

        text-decoration: none;
        text-align: center;
        padding: 10px;

        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: var(--color-grey-0);

        cursor: pointer;
      }
    }
  }
  
`;
