import styled from "styled-components";
export const FormEdit = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .modal--container {
    width: 90vw;
    max-width: 369px;
    div {
      background: var(--color-grey-2);
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 40px;

      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      h1 {
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        color: var(--color-grey-0);
      }
      button:first-of-type {
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        color: var(--color-grey-4);
        cursor: pointer;
        background-color: var(--color-grey-2);
        border: none;
      }
      button:hover {
        color: var(--color-primary);
      }
    }
    form {
      background-color: var(--color-grey-4);
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 20px;
      
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

      label {
        font-weight: 400;
        font-size: 12.182px;
        color: var(--color-grey-0);
      }

      input {
        width: 80vw;
        max-width: 330px;
        height: 48px;
        background: var(--color-grey-2);

        border-radius: 4px;
        padding: 10px;
      }

      input:focus {
        outline: none;
        border: 1px solid var(--color-grey-0);
      }

      select {
        width: 80vw;
        max-width: 330px;
        height: 48px;
        background: var(--color-grey-2);

        border-radius: 4px;
        padding: 10px;

        font-weight: 400;
        font-size: 12.182px;
        color: var(--color-grey-0);
      }
      select:focus {
        outline: none;
        border: 1px solid var(--color-grey-0);
      }
      div {
        background-color: var(--color-grey-4);
        justify-content: space-between;

        button:first-of-type {
          max-width: 200px;
          height: 48px;
          background: var(--color-primary);


          border-radius: 4px;
          padding: 10px;

          font-weight: 500;
          font-size: 16px;
          line-height: 26px;
          color: #ffffff;
          cursor: pointer;
        }
        button {
    
          height: 48px;
          padding: 10px;

          background: var(--color-grey-1);
          
          border-radius: 4px;
          border: none;

          font-weight: 500;
          font-size: 16px;
          line-height: 26px;
          color: #ffffff;
          cursor: pointer;
        }
        button:hover{
            background-color: var(--color-grey-4);
            border: 1px solid var(--color-grey-1);
            color: var(--color-primary);
        }
      }
    }
  }
`;
