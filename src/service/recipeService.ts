interface EdamamQueryParams {
    q: string;
    app_id: string;
    app_key: string;
    from?: number;
    to?: number;
    calories?: string; // e.g., "gte 100, lte 300"
    diet?: string;
    health?: string;
    cuisineType?: string;
    mealType?: string;
    dishType?: string;
    ingr?: number;
    time?: string; // e.g., "1-30"
    excluded?: string;
}

type RecipeResponse = {
    q: string;
    from: number;
    to: number;
    more: boolean;
    count: number;
    hits: any;
};

export type Recipe = {
    recipe: {
        label: string;
        url: string;
        image: string;
        ingredientLines: string[];
        ingredients: ingredients[];
    };
};

type ingredients = {
    text: string;
    quantity: number;
    measure: string;
    food: string;
    weight: number;
    foodCategory: string;
    foodId: string;
    image: string;
};

export async function GetRecipe(
    params: EdamamQueryParams
): Promise<RecipeResponse> {
    const baseUrl = 'https://api.edamam.com/search';
    const query = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
            query.append(key, value.toString());
        }
    });

    const queryUrl = `${baseUrl}?${query.toString()}`;

    const response = await fetch(queryUrl);
    const jsonData = await response.json();
    return jsonData;
}
