import axios from 'axios';
import { CATFACT } from './urls';

// Define the type for the response data
interface CatFactResponse {
  fact: string;
  length: number;
}

// Create a service to fetch a cat fact
export async function fetchCatFact(): Promise<CatFactResponse> {
  try {
    const response = await axios.get<CatFactResponse>(CATFACT.catfact);
    return response.data;
  } catch (error) {
    console.error('Error fetching cat fact:', error);
    throw new Error('Failed to fetch cat fact');
  }
}

// Example usage
(async () => {
  try {
    const catFact = await fetchCatFact();
    console.log('Cat Fact:', catFact.fact);
  } catch (error) {
    console.error(error);
  }
})();
