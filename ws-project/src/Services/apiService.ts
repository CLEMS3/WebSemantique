import axios from "axios";
import { sparqlRequestConstants, WAR_RESEARCH } from "./sparqlRequests";
import { getRequestUrl } from "./sparqlRequests";

interface Suggestion {
  label: string;
  image: string;
}

// fetch a sparql result
export async function fetchSparql(request: string): Promise<JSON> {
  try {
    const response = await axios.get<JSON>(request);
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw new Error("Failed to fetch data");
  }
}

// fetch a wars data
export async function fetchAWarData(): Promise<JSON> {
  try {
    const response = await fetchSparql(
      getRequestUrl(sparqlRequestConstants.guerreCivileDeCesar)
    );
    const result = response.results.bindings[0].label.value;
    return result;
  } catch (error) {
    console.error("Error fetching conflict data", error);
    throw new Error("Failed to fetch conflict data");
  }
}

export async function fetchSearchWar(request: string): Promise<Suggestion[]> {
  try {
    console.log(getRequestUrl(WAR_RESEARCH(request).warResearch));
    const response = await fetchSparql(
      getRequestUrl(WAR_RESEARCH(request).warResearch)
    );
    
    // Transforme les résultats en une liste d'objets Suggestion
    const suggestions: Suggestion[] = response.results.bindings.map((binding: any) => ({
      label: binding.label.value, // Accès au champ label
      image: binding.image.value, // Accès au champ image
    }));
    
    return suggestions;
  } catch (error) {
    console.error("Error fetching conflict data", error);
    throw new Error("Failed to fetch conflict data");
  }
}


