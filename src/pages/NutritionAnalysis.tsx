import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  PageDescriptionZone,
  PageForm,
  PageInner,
  PageSearchZone,
  PageWrapper,
} from '../styled/Common';
import {
  NutritionResponse,
  getNutritionData,
} from '../service/nutritionService';
import {
  NutritionHeader,
  NutritionList,
  NutritionListItem,
  NutritionParagraph,
  NutritionSearchWrapper,
  NutritionTable,
  NutritionWrapper,
} from '../styled/Nutrition';

type FormValues = {
  searchWord: string;
};

type IngredientData = {
  quantity: number;
  unit: string;
  food: string;
  calories: number;
  weight: number;
};

export default function NutritionAnalysis() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [nutrition, setNutrition] = useState<NutritionResponse | null>(null);
  const [searchWord, setSearchWord] = useState<string>('');
  const [ingredients, setIngredients] = useState<IngredientData[]>([]);

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    setIsLoading(true);
    setSearchWord(data.searchWord);
    try {
      const result = await getNutritionData(data.searchWord);
      console.log(result);
      setNutrition(result);
      if (result.ingredients) {
        const ingredientData = result.ingredients.map((ingredient) => ({
          quantity: ingredient.parsed[0]?.quantity || 0,
          unit: ingredient.parsed[0]?.measure || '',
          food: ingredient.parsed[0]?.food,
          calories: ingredient.parsed[0]?.nutrients?.ENERC_KCAL?.quantity || 0,
          weight: ingredient.parsed[0]?.weight || 0,
        }));
        setIngredients(ingredientData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      reset();
      setIsLoading(false);
    }
  };

  return (
    <PageWrapper>
      <PageForm onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('searchWord', { required: true })}
          placeholder="ex) 1 cup cola"
        />
        <button type="submit">Submit</button>
      </PageForm>
      <PageInner>
        <PageSearchZone>
          {isLoading && <p>Loading...</p>}
          {!isLoading && searchWord && (
            <NutritionSearchWrapper>
              <h2>Search Query: {searchWord}</h2>
              {ingredients.length > 0 && (
                <table>
                  <thead>
                    <tr>
                      <th>Qty</th>
                      <th>Unit</th>
                      <th>Food</th>
                      <th>Calories</th>
                      <th>Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ingredients.map((ingredient, index) => (
                      <tr key={index}>
                        <td>{ingredient.quantity}</td>
                        <td>{ingredient.unit}</td>
                        <td>{ingredient.food}</td>
                        <td>{ingredient.calories.toFixed(1)} kcal</td>
                        <td>{ingredient.weight.toFixed(1)} g</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </NutritionSearchWrapper>
          )}
        </PageSearchZone>
        <PageDescriptionZone>
          {isLoading ? (
            <p>'Loading...'</p>
          ) : (
            nutrition && (
              <NutritionWrapper>
                <NutritionHeader>Nutrition Information</NutritionHeader>
                <NutritionParagraph>
                  Calories: {nutrition.calories} kcal
                </NutritionParagraph>
                <NutritionParagraph>
                  Total Weight: {nutrition.totalWeight} g
                </NutritionParagraph>
                <h3>Diet Labels</h3>
                <NutritionList>
                  {nutrition.dietLabels.map((label, index) => (
                    <NutritionListItem key={index}>{label}</NutritionListItem>
                  ))}
                </NutritionList>
                <h3>Health Labels</h3>
                <NutritionList>
                  {nutrition.healthLabels.map((label, index) => (
                    <NutritionListItem key={index}>{label}</NutritionListItem>
                  ))}
                </NutritionList>
                <h3>Total Nutrients</h3>
                <NutritionTable>
                  <thead>
                    <tr>
                      <th>Label</th>
                      <th>Quantity</th>
                      <th>Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(nutrition.totalNutrients).map(
                      ([key, nutrient]) => (
                        <tr key={key}>
                          <td>{nutrient.label}</td>
                          <td>{nutrient.quantity.toFixed(2)}</td>
                          <td>{nutrient.unit}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </NutritionTable>
                <h3>Total Daily Values</h3>
                <NutritionList>
                  {Object.entries(nutrition.totalDaily).map(
                    ([key, nutrient]) => (
                      <NutritionListItem key={key}>
                        {nutrient.label}: {nutrient.quantity.toFixed(2)}{' '}
                        {nutrient.unit}
                      </NutritionListItem>
                    )
                  )}
                </NutritionList>
              </NutritionWrapper>
            )
          )}
        </PageDescriptionZone>
      </PageInner>
    </PageWrapper>
  );
}
