import styled from "styled-components";


export const StyledRegister = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 10px 10px;

    h1{
        font-weight: 700;
        font-size: 15px;
        line-height: 22px;
        color: var(--color-grey-0);
        text-align: center;
    }
    p{
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        color: var(--color-grey-1);
        text-align: center;
    }
form{

    width: 80vw;
   
    max-width: 500px;
    
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    gap: 15px;

    background: #212529;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;


}
    

`