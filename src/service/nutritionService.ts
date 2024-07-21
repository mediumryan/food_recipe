interface NutrientInfo {
  label: string;
  quantity: number;
  unit: string;
}

export interface NutritionResponse {
  uri: string;
  calories: number;
  totalWeight: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  totalNutrients: {
    [key: string]: NutrientInfo;
  };
  totalDaily: {
    [key: string]: NutrientInfo;
  };
  ingredients: Array<{
    text: string;
    parsed: Array<{
      quantity: number;
      measure: string;
      food: string;
      weight: number;
      nutrients: {
        [key: string]: NutrientInfo;
      };
    }>;
  }>;
}

const app_id = process.env.REACT_APP_NUTRITION_APP_ID as string;
const app_key = process.env.REACT_APP_NUTRITION_APP_KEY as string;

export async function getNutritionData(
  ingredient: string
): Promise<NutritionResponse> {
  const url = new URL('https://api.edamam.com/api/nutrition-data');
  url.searchParams.append('app_id', app_id);
  url.searchParams.append('app_key', app_key);
  url.searchParams.append('nutrition-type', 'cooking');
  url.searchParams.append('ingr', ingredient);

  console.log(url.toString());

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Error response:', errorText);
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const jsonData: NutritionResponse = await response.json();
  return jsonData;
}
