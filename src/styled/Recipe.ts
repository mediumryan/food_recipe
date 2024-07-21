import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const RecipeCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const RecipeCards = styled.div`
  margin: 0.5rem;
  width: 135px;
  height: 135px;
  transition: 300ms all;
  cursor: pointer;
  h2 {
    color: green;
    font-size: 1.25rem;
    min-height: 50px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 0.95;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    transition: 300ms all;
  }
  &:hover {
    transform: scale(1.05) rotate(5deg);
    img {
      opacity: 1;
    }
  }
`;

export const RecipeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const RecipeButtonWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  button {
    margin: 0 1rem;
    padding: 0.5rem 0;
    font-size: 1.05rem;
    width: 150px;
    color: var(--black-100);
    background: var(--accent-200);
    border-radius: 10px;
    cursor: pointer;
    transition: 300ms opacity;
    &:hover {
      opacity: 0.85;
    }
  }
`;

export const RecipeContent = styled.div`
  width: 100%;
  max-height: 85%;
  min-height: 85%;
  overflow-y: auto;
  padding: 1rem;
  color: var(--white-100);
  font-size: 1.15rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  div#ingredients-wrapper {
    display: flex;
    flex-direction: column;
    p {
      margin-bottom: 1rem;
      color: var(--white-100);
      padding: 0.25rem 0.5rem;
      border-radius: 10px;
      box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 8px 0px,
        rgba(255, 255, 255, 0.8) -6px -2px 8px 0px;
    }
  }
  div#recipe-wrapper {
    width: 100%;
    height: 100%;
  }
`;

export const SliderRow = styled(Carousel)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  div#recipe-index {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    font-style: italic;
    color: var(--accent-300);
    width: 100%;
    opacity: 0.75;
    padding: 1rem;
    margin-top: 1rem;
  }
  p {
    font-size: 1.25rem;
    color: var(--white-100);
    padding: 0.85rem 0.5rem;
    letter-spacing: 2px;

    p#recipe-food-info {
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
      color: var(--white-200);
    }
  }
`;
