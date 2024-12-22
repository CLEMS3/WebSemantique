import axios from "axios";
import { sparqlRequestConstants, WAR_RESEARCH, DISPLAY_WAR, PERSONALITY_RESEARCH, DISPLAY_PERSON, PLACE_RESEARCH, DISPLAY_PLACE } from "./sparqlRequests";
import { getRequestUrl } from "./sparqlRequests";
import {getLastPartOfUrl} from "./utils";
import { get } from "http";
import { constrainedMemory } from "process";

interface Suggestion {
  label: string;
  image: string;
  url: string;
}

interface WarData {
  title: string;
  text: string;
  imageUrl: string;
  list1: { [key: string]: { label: string; appLink: string }[] }; 
  list2: { [key: string]: { label: string; appLink: string }[] }; 
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
    console.log(response);
    
    // Transforme les résultats en une liste d'objets Suggestion
    const suggestions: Suggestion[] = response.results.bindings.map((binding: any) => ({
      label: binding.label.value, // Accès au champ label
      image: binding.image.value, // Accès au champ image
      url: binding.battle.value, // Accès au champ url
    }));
    
    return suggestions;
  } catch (error) {
    console.error("Error fetching conflict data", error);
    throw new Error("Failed to fetch conflict data");
  }
}

export async function fetchSearchPlace(request: string): Promise<Suggestion[]> {
  try {
    console.log(getRequestUrl(PLACE_RESEARCH(request).placeResearch));
    const response = await fetchSparql(
      getRequestUrl(PLACE_RESEARCH(request).placeResearch)
    );
    
    // Transforme les résultats en une liste d'objets Suggestion
    const suggestions: Suggestion[] = response.results.bindings.map((binding: any) => ({
      label: binding.label.value, // Accès au champ label
      image: binding.image.value, // Accès au champ image
      url: binding.place.value, // Accès au champ url
    }));
    
    return suggestions;
  } catch (error) {
    console.error("Error fetching place data", error);
    throw new Error("Failed to fetch place data");
  }
}

export async function fetchDisplayWar(request: string): Promise<WarData> {
  try {
    console.log(getRequestUrl(DISPLAY_WAR(request).warDisplay));
    const response = await fetchSparql(
      getRequestUrl(DISPLAY_WAR(request).warDisplay)
    );
    const battleResponse = await fetchSparql(
      getRequestUrl(DISPLAY_WAR(request).relatedPlacesDisplay)
    );
    const commanderResponse = await fetchSparql(
      getRequestUrl(DISPLAY_WAR(request).relatedCommanderDisplay)
    );
    const strengthResponse = await fetchSparql(
      getRequestUrl(DISPLAY_WAR(request).relatedStrengthsDisplay)
    );
    const conflictResponse = await fetchSparql(
      getRequestUrl(DISPLAY_WAR(request).relatedIsPartOfMilitaryConflictDisplay)
    );
    const result = response.results.bindings[0]; // Premier résultat
    if (!result) {
      throw new Error("No data found");
    }
    const placeResult = battleResponse.results.bindings;
    const commanderResult = commanderResponse.results.bindings;
    const strengthResult = strengthResponse.results.bindings;
    const conflictResult = conflictResponse.results.bindings;
    const processListToStrings = (data: any, category: string) => {
      return data.map((item: any) => {
        // Récupère la dernière partie de l'URL (ex. Decimus_Junius_Brutus_Albinus)
        const label = item.split('/').pop()?.replace(/_/g, ' ') || ''; // Remplace les underscores par des espaces pour le label
        //const encodedLabel = encodeURIComponent(label); // Encode l'URL pour gérer les espaces et autres caractères spéciaux
        const uri = getLastPartOfUrl(item);
    
        const appLink = `http://localhost:3000/${category}/${uri}`;  // Crée l'URL locale avec le label encodé
        return { label, appLink };
      });
    };
    console.log(strengthResult);
    console.log(result);
    // Transformation des données
    const warData: WarData = {
      title: result.label?.value || "Titre inconnu",
      text: result.abstract?.value || "Aucune description disponible.",
      imageUrl: result.image?.value || "https://placehold.co/600x400?text=Pas+de+ressource+disponible",
      list1: {
        "Guerre": conflictResult.length > 0
          ? processListToStrings(conflictResult.map((binding: any) => binding.isPartOfMilitaryConflict?.value), "war")
          : [{ label: "Non spécifiée", appLink: "" }],
        "Commandants": commanderResult.length > 0
          ? processListToStrings(commanderResult.map((binding: any) => binding.commander?.value), "commander")
          : [{ label: "Non spécifiés", appLink: "" }],
      },
      list2: {
        "Date": result.date ? [{ label: result.date.value, appLink: ""}] : [{ label: "Date inconnue", appLink: "" }],
        "Lieux": placeResult.length > 0
          ? processListToStrings(placeResult.map((binding: any) => binding.place?.value),"country")
          : [{ label: "Non spécifiés", appLink: "" }],
        "Victimes": result.casualties ? [{ label:result.casualties.value, appLink: ""}] : [{ label: "Non spécifiées", appLink: "" }],
        "Issue": result.result ? [{ label:result.result.value, appLink: ""}] : [{ label: "Non spécifiée", appLink: "" }],
        "Forces en présence": strengthResult.length > 0 ? strengthResult.map(item => ({ label: (item.strength.value).toString(), appLink: "" })) : [{ label: "Non spécifiés", appLink: "" }],
      },
    };
    
    console.log(warData);
    return warData;
  } catch (error) {
    console.error("Error fetching conflict data", error);
    throw new Error("Failed to fetch conflict data");
  }
}

export async function fetchSearchPersonality(request: string): Promise<Suggestion[]> {
  try {
    console.log(getRequestUrl(PERSONALITY_RESEARCH(request).personalityResearch));
    const response = await fetchSparql(
      getRequestUrl(PERSONALITY_RESEARCH(request).personalityResearch)
    );
    
    // Transforme les résultats en une liste d'objets Suggestion
    const suggestions: Suggestion[] = response.results.bindings.map((binding: any) => ({
      label: binding.label.value, // Accès au champ label
      image: binding.image.value, // Accès au champ image
      url: binding.commander.value, // Accès au champ url
    }));
    
    return suggestions;
  } catch (error) {
    console.error("Error fetching conflict data", error);
    throw new Error("Failed to fetch conflict data");
  }
}

export async function fetchDisplayPerson(request: string): Promise<WarData> {
  console.log(getRequestUrl(DISPLAY_PERSON(request).personDisplay));
  try {
    const response = await fetchSparql(
      getRequestUrl(DISPLAY_PERSON(request).personDisplay)
    );

    const result = response.results.bindings[0]; // Premier résultat
    if (!result) {
      throw new Error("No data found");
    }

    // Transformation des données
    const personData: WarData = {
      title: result.label?.value || "Titre inconnu",
      text: result.abstract?.value || "Aucune description disponible.",
      imageUrl: result.thumbnail?.value || "https://placehold.co/600x400?text=Pas+de+ressource+disponible",
      list1: {},
      list2: {},
    };


    console.log(personData);
    return personData;
  }

  catch (error) {
    console.error("Error fetching person data", error);
    throw new Error("Failed to fetch person data");
  }
}

export async function fetchDisplayPlace(request: string): Promise<WarData> {
  console.log(getRequestUrl(DISPLAY_PLACE(request).placeDisplay));
  try {
    const response = await fetchSparql(
      getRequestUrl(DISPLAY_PLACE(request).placeDisplay)
    );

    const battleResponse = await fetchSparql(
      getRequestUrl(DISPLAY_PLACE(request).relatedBattlesDisplay)
    );

    const result = response.results.bindings[0]; // Premier résultat
    if (!result) {
      throw new Error("No data found");
    }
  
    const battleResult = battleResponse.results.bindings;


    const processListToStrings = (data: any, category: string) => {
      return data.map((item: any) => {
        // Récupère la dernière partie de l'URL (ex. Decimus_Junius_Brutus_Albinus)
        const label = item.split('/').pop()?.replace(/_/g, ' ') || ''; // Remplace les underscores par des espaces pour le label
        //const encodedLabel = encodeURIComponent(label); // Encode l'URL pour gérer les espaces et autres caractères spéciaux
        const uri = getLastPartOfUrl(item);
    
        const appLink = `http://localhost:3000/${category}/${uri}`;  // Crée l'URL locale avec le label encodé
        return { label, appLink };
      });
    };

    // Transformation des données
    const placeData: WarData = {
      title: result.label?.value || "Titre inconnu",
      text: result.abstract?.value || "Aucune description disponible.",
      imageUrl: result.thumbnail?.value || "https://placehold.co/600x400?text=Pas+de+ressource+disponible",
      list1: {
        "Batailles y ayant eu lieu": battleResult.length > 0
          ? processListToStrings(
              battleResult.map((binding: any) => binding.battle?.value),
              "war" // Replace "country" with the appropriate category
            )
          : [{ label: "Non spécifiés", appLink: "" }],
      },
      list2: {},
    };


    console.log(placeData);
    return placeData;
  }

  catch (error) {
    console.error("Error fetching place data", error);
    throw new Error("Failed to fetch place data");
  }

}
      

