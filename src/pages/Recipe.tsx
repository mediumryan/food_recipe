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
  RecipeButtonWrapper,
  RecipeCardWrapper,
  RecipeCards,
  RecipeContent,
  RecipeWrapper,
  SliderRow,
} from '../styled/Recipe';
import { GetRecipe, Recipe } from '../service/recipeService';

type FormValues = {
  searchWord: string;
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function RecipePage() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [descriptionState, setDescriptionState] = useState(0);

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    const query = {
      q: data.searchWord,
      app_id: process.env.REACT_APP_RECIPE_APP_ID as string,
      app_key: process.env.REACT_APP_RECIPE_APP_KEY as string,
    };
    setIsLoading(true);
    const result = await GetRecipe(query);
    setRecipes(result.hits);
    reset();
    setIsLoading(false);
  };

  const selectRecipe = (data: Recipe) => {
    setSelectedRecipe(data);
  };

  return (
    <PageWrapper>
      <PageForm onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('searchWord', { required: true })}
          placeholder="ex) apple"
        />
        <button type="submit">Submit</button>
      </PageForm>
      <PageInner>
        <PageSearchZone>
          <RecipeCardWrapper>
            {!isLoading
              ? recipes.map((recipe, index) => (
                  <div
                    onClick={() => {
                      selectRecipe(recipe);
                    }}
                  >
                    <RecipeCards key={index}>
                      <img
                        src={recipe.recipe.image}
                        alt={recipe.recipe.label}
                      />
                    </RecipeCards>
                  </div>
                ))
              : 'Loading...'}
          </RecipeCardWrapper>
        </PageSearchZone>
        <PageDescriptionZone>
          {selectedRecipe && (
            <>
              <img
                src={selectedRecipe.recipe.image}
                alt={selectedRecipe.recipe.label}
              />
              <h2>{selectedRecipe.recipe.label}</h2>
              <RecipeWrapper>
                <RecipeButtonWrapper>
                  <button
                    onClick={() => {
                      setDescriptionState(0);
                    }}
                  >
                    Ingredients
                  </button>
                  <button
                    onClick={() => {
                      setDescriptionState(1);
                    }}
                  >
                    Recipe
                  </button>
                </RecipeButtonWrapper>
                <RecipeContent>
                  {descriptionState === 0 ? (
                    <div id="ingredients-wrapper">
                      {selectedRecipe.recipe.ingredientLines.map(
                        (ing, ing_index) => {
                          return (
                            <p key={ing_index}>
                              {ing_index + 1}. {ing}
                            </p>
                          );
                        }
                      )}
                    </div>
                  ) : (
                    <div id="recipe-wrapper">
                      <SliderRow responsive={responsive}>
                        {selectedRecipe.recipe.ingredients.map(
                          (recipe, recipe_index) => {
                            return (
                              <div key={recipe_index}>
                                <img src={recipe.image} alt={recipe.text} />
                                <div id="recipe-index">{recipe_index + 1}</div>
                                <p>
                                  <br />
                                  <span>{recipe.text}</span>
                                  <span>({recipe.quantity}</span>
                                  <span>{recipe.measure})</span>
                                </p>
                                <p>
                                  <p id="recipe-food-info">Food Info</p>
                                  <br />
                                  <p>
                                    <span>Food Name :</span>
                                    <span>{recipe.food}</span>
                                  </p>
                                  <p>
                                    <span>Food Category :</span>
                                    <span>{recipe.foodCategory}</span>
                                  </p>
                                </p>
                              </div>
                            );
                          }
                        )}
                      </SliderRow>
                    </div>
                  )}
                </RecipeContent>
              </RecipeWrapper>
            </>
          )}
        </PageDescriptionZone>
      </PageInner>
    </PageWrapper>
  );
}
