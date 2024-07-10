import styled from 'styled-components';

export const MainWrapper = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 165, 0, 0.15);
`;

export const PageWrapper = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PageInner = styled.div`
    flex-basis: 85%;
    width: 100%;
    height: 85%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    padding: 0 2rem 1rem 2rem;
`;

export const PageSearchZone = styled.div`
    width: 95%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: rgba(255, 165, 0, 0.35);
    border-radius: 10px;
`;

export const PageDescriptionZone = styled.div`
    position: relative;
    width: 95%;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    overflow: hidden;
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        z-index: -1;
    }
    h2 {
        margin-top: 2rem;
        font-size: 1.25rem;
        font-style: italic;
        color: var(--white-100);
    }
`;

export const PageForm = styled.form`
    flex-basis: 10%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
        font-size: 1.15rem;
        border-radius: 4px;
        padding-left: 4px;
        color: var(--accent-100);
        &:focus {
            border-color: var(--accent-100);
            outline-color: var(--accent-100);
        }
    }
    button {
        color: var(--accent-100);
        font-size: 1.15rem;
        font-weight: 700;
        background: none;
    }
`;
