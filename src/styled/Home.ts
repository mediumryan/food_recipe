import styled from 'styled-components';

export const HomeInner = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    a {
        margin: 0.5rem;
        text-decoration: none;
        color: var(--white-200);
    }
    #home-card-1 {
        grid-area: 1 / 1 / 2 / 3;
        display: flex;
        justify-content: center;
    }
    #home-card-2 {
        grid-area: 2 / 1 / 3 / 2;
    }
    #home-card-3 {
        grid-area: 2 / 2 / 3 / 3;
    }
`;

export const HomeCardWrapper = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    transition: 300ms all ease-in;
    cursor: pointer;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    img {
        max-width: 175%;
        max-height: 175%;
        opacity: 0.75;
    }
    p {
        position: absolute;
        color: var(--black-100);
    }
    &:hover {
        background-color: var(--accent-300);
        transform: scale(1.05) rotate(15deg);
    }
`;
