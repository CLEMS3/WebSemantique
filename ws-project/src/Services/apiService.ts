import axios from "axios";
import { sparqlRequestConstants, WAR_RESEARCH, DISPLAY_WAR } from "./sparqlRequests";
import { getRequestUrl } from "./sparqlRequests";

interface Suggestion {
  label: string;
  image: string;
}

interface WarData {
  title: string;
  text: string;
  imageUrl: string;
  list1: { [key: string]: string[] };
  list2: { [key: string]: string[] };
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

export async function fetchDisplayWar(request: string): Promise<WarData> {
  try {
    const response = await fetchSparql(
      getRequestUrl(DISPLAY_WAR(request).warDisplay)
    );
    console.log(getRequestUrl(DISPLAY_WAR(request).warDisplay));

    const result = response.results.bindings[0]; // Premier résultat
    if (!result) {
      throw new Error("No data found");
    }

    // Transformation des données
    const warData: WarData = {
      title: result.label?.value || "Titre inconnu",
      text: result.abstract?.value || "Aucune description disponible.",
      imageUrl: result.image?.value || "",
      list1: {
        "Guerre": result.isPartOfMilitaryConflict
          ? [result.isPartOfMilitaryConflict.value]
          : ["Non spécifiée"],
        "Commandants": result.commander
          ? [result.commander.value]
          : ["Non spécifiés"],
      },
      list2: {
        "Date": result.date ? [result.date.value] : ["Date inconnue"],
        "Lieux": result.place
          ? [result.place.value]
          : ["Non spécifiés"],
        "Victimes": result.casualties
          ? [result.casualties.value]
          : ["Non spécifiées"],
        "Issue": result.result ? [result.result.value] : ["Non spécifiée"],
        "Forces en présence": result.strength
          ? [result.strength.value]
          : ["Non spécifiées"],
      },
    };
    console.log(warData);
    return warData;
  } catch (error) {
    console.error("Error fetching conflict data", error);
    throw new Error("Failed to fetch conflict data");
  }
}


