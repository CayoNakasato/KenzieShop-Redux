import styled from "styled-components";

export const ContainerOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 1vh auto;

    width: 20rem;

    background-color: antiquewhite;

    h2{
        font-size: 1rem;
    }

    img{
        width: 10rem;
    }
`

export const ContainerTwo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: 1vh auto;

    width: 95vw;

    gap: 5vw;

    background-color: antiquewhite;
    
    img{
        width: 10rem;
    }

    span{
        width: 5rem;
    }

    h2{
        font-size: .7rem;
        width: 20rem;
    }

    button{
        width: 7rem;
    }

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 1rem;

    h2{
        font-size: .5rem;

        width: 90%;

    }
`