import styled from "styled-components";

export const Page404 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;


  p {
    color: white;
    text-align: center;
  }
  a{
    text-decoration: none;
    color: white;
    text-align: center;
    cursor: pointer;
  }
  a:hover{
    color: var(--color-primary);
  }
`;
