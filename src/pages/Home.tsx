import { PageWrapper } from '../styled/Common';
import HomeCard from '../components/HomeCard';
import { HomeInner } from '../styled/Home';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <PageWrapper>
      <HomeInner>
        <Link id="home-card-1" to="/food-info">
          <HomeCard pathName="Food Info" />
        </Link>
        <Link id="home-card-2" to="/recipe">
          <HomeCard pathName="Recipe" />
        </Link>
        <Link id="home-card-3" to="/nutrition-analysis">
          <HomeCard pathName="Nutrition Analysis" />
        </Link>
      </HomeInner>
    </PageWrapper>
  );
}
