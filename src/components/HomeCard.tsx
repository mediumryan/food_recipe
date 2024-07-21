import { HomeCardWrapper } from '../styled/Home';
import image_recipe from './../images/recipe.jpg';
import image_info from './../images/info.webp';
import image_nutrition from './../images/nutrition.jpg';

interface HomeCardProps {
  pathName: string;
}

export default function HomeCard({ pathName }: HomeCardProps) {
  const imageSrc =
    pathName === 'Food Info'
      ? image_info
      : pathName === 'Recipe'
      ? image_recipe
      : pathName === 'Nutrition Analysis'
      ? image_nutrition
      : '';

  const altText =
    pathName === 'Food Info'
      ? 'Food Info'
      : pathName === 'Recipe'
      ? 'Recipe'
      : pathName === 'Nutrition Analysis'
      ? 'Nutrition Analysis'
      : '';

  return (
    <HomeCardWrapper>
      <img src={imageSrc} alt={altText} />
      <p>{pathName}</p>
    </HomeCardWrapper>
  );
}
