export function getRequestUrl(request: string) {
  return (
    "http://dbpedia.org/sparql" +
    "?query=" +
    encodeURIComponent(request) +
    "&format=json"
  );
}

export const WAR_RESEARCH = (search: string) => ({
  warResearch: `PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX dbp: <http://dbpedia.org/property/>
PREFIX dbr: <http://dbpedia.org/resource/>

SELECT DISTINCT ?battle ?label ?image
WHERE {
  ?battle a dbo:MilitaryConflict ;
		  rdfs:label ?label ;

       dbo:thumbnail ?image ; # Récupère l'URL de l'image
		  dbo:abstract ?description.
  FILTER (LANG(?label) = "fr" && LANG(?description) = "fr" && CONTAINS(LCASE(?label),LCASE("${search}")))
FILTER NOT EXISTS {?otherpage a dbo:MilitaryConflict; dbo:isPartOfMilitaryConflict ?battle.}
}
GROUP BY ?battle
LIMIT 3
`,
});

export const PLACE_RESEARCH = (search: string) => ({
  placeResearch: `SELECT DISTINCT ?place ?label  ?image
  WHERE {
    ?place a dbo:Place ;
           rdfs:label ?label ;
           dbo:abstract ?abstract ;
  dbo:thumbnail ?image.
  
    
    FILTER (LANG(?label) = "fr")
    FILTER (LANG(?abstract) = "fr")
    FILTER (CONTAINS(LCASE(?label), "${search}"))
  }
  LIMIT 3`,
});
  

export const DISPLAY_WAR = (search: string) => ({
  warDisplay: `PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT DISTINCT ?label ?abstract ?image ?date (GROUP_CONCAT(DISTINCT CONCAT(STR(?labPlace), ", ", STR(?place)) ; separator="; ") AS ?places) ?casualties ?result (GROUP_CONCAT(DISTINCT CONCAT(STR(?labStren), ", ", STR(?strength)) ; separator="; ") AS ?strengths) (GROUP_CONCAT(DISTINCT CONCAT(STR(?labConf), ", ", STR(?isPartOfMilitaryConflict)) ; separator="; ") AS ?conflicts) (GROUP_CONCAT(DISTINCT CONCAT(STR(?labCom), ", ", STR(?commander)) ; separator="; ") AS ?commanders)

WHERE {
  <${search}> rdfs:label ?label ;
                                              dbo:abstract ?abstract .
  
  OPTIONAL { <${search}> dbo:thumbnail ?image . }
  OPTIONAL { <${search}> dbo:date ?date . }
  OPTIONAL { <${search}> dbo:place ?place .?place rdfs:label ?labPlace. }
  OPTIONAL { <${search}> dbo:casualties ?casualties . }
  OPTIONAL { <${search}> dbo:result ?result . }
  OPTIONAL { <${search}> dbo:strength ?strength .?strenght rdfs:label ?labStren. }
  OPTIONAL { <${search}> dbo:isPartOfMilitaryConflict ?isPartOfMilitaryConflict .?isPartOfMilitaryConflict  rdfs:label ?labConf. }
  OPTIONAL { <${search}> dbo:commander ?commander . ?commander rdfs:label ?labCom.}

  FILTER (LANG(?label) = "fr")
  FILTER (LANG(?abstract) = "fr")
  FILTER (LANG(?labCom)="fr")
  FILTER (LANG(?labConf)="fr")
  FILTER (LANG(?labPlace)="fr")
  FILTER (LANG(?labStren)="fr")
}
LIMIT 1



`,
});


export const DISPLAY_PLACE = (search: string) => ({
  placeDisplay: `PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT DISTINCT ?label ?abstract ?thumbnail
WHERE {
  <${search}> rdfs:label ?label ;
                                        dbo:abstract ?abstract .
  OPTIONAL { <${search}> dbo:thumbnail ?thumbnail . }
  FILTER (LANG(?label) = "fr")
  FILTER (LANG(?abstract) = "fr")
}
`

});

export const PERSONALITY_RESEARCH = (search: string) => ({
  personalityResearch: `PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX dbp: <http://dbpedia.org/property/>
PREFIX dbr: <http://dbpedia.org/resource/>

SELECT DISTINCT ?commander ?label ?image
WHERE {
?conflict a dbo:MilitaryConflict;
dbo:commander ?commander.
          ?commander rdfs:label ?label ;
          dbo:thumbnail ?image ;
          dbo:abstract ?description .
FILTER (LANG(?label) = "fr" && LANG(?description) = "fr" && CONTAINS(LCASE(?label), LCASE("${search}")))

}
LIMIT 3
`,
}); 

export const sparqlRequestConstants = {
  guerreCivileDeCesar: `PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
                        SELECT ?label
                        WHERE {
                        <http://dbpedia.org/resource/Caesar's_civil_war> rdfs:label ?label.
                        FILTER (lang(?label) = "en")
                        }
                        `,
  infoTouteGuerre: `PREFIX dbo: <http://dbpedia.org/ontology/>
                        PREFIX dbp: <http://dbpedia.org/property/>
                        PREFIX dbr: <http://dbpedia.org/resource/>

                        SELECT DISTINCT ?battle ?label ?date ?location ?description ?commander
                        WHERE {
                        ?battle a dbo:MilitaryConflict ;
                                rdfs:label ?label ;
                                dbo:date ?date ;
                                dbo:place ?location ;
                                dbo:abstract ?description;
                                    dbo:commander ?commander .
                        FILTER (LANG(?label) = "fr" && LANG(?description) = "fr")
                        }
                        GROUP BY ?battle
                        `,
  infoToutConflit: `PREFIX dbo: <http://dbpedia.org/ontology/>
                        PREFIX dbp: <http://dbpedia.org/property/>
                        PREFIX dbr: <http://dbpedia.org/resource/>

                        SELECT DISTINCT ?battle ?label ?date ?location ?description ?commander
                        WHERE {
                        ?battle a dbo:MilitaryConflict ;
                                rdfs:label ?label ;
                                dbo:date ?date ;
                                dbo:place ?location ;
                                dbo:abstract ?description;
                                dbo:commander ?commander .
                        FILTER (LANG(?label) = "fr" && LANG(?description) = "fr")
                        }
                        GROUP BY ?battle
                        `,
} as const;
