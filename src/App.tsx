import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './css/index.css';
import { MainWrapper } from './styled/Common';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import FoodInfo from './pages/FoodInfo';
import NutritionAnalysis from './pages/NutritionAnalysis';

function App() {
    return (
        <MainWrapper>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/food-info" element={<FoodInfo />}></Route>
                <Route path="/recipe" element={<Recipe />}></Route>
                <Route
                    path="/nutrition-analysis"
                    element={<NutritionAnalysis />}
                ></Route>
            </Routes>
        </MainWrapper>
    );
}

export default App;
