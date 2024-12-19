import axios from "axios";
import { sparqlRequestConstants } from "./sparqlRequests";
import { getRequestUrl } from "./sparqlRequests";

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
