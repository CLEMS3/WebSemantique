export function getRequestUrl(request: string) {
  return (
    "http://dbpedia.org/sparql" +
    "?query=" +
    encodeURIComponent(request) +
    "&format=json"
  );
}

export const WAR_RESEARCH = (search: string) => ({
  /*warResearch: `PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX dbp: <http://dbpedia.org/property/>
PREFIX dbr: <http://dbpedia.org/resource/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT DISTINCT ?label ?image
WHERE {
  ?war a dbo:MilitaryConflict ;
       rdfs:label ?label ;
       dbo:thumbnail ?image . # Récupère l'URL de l'image
  FILTER (LANG(?label) = "fr")
  FILTER (CONTAINS(LCASE(?label), LCASE("${search}")))
}
ORDER BY ?label
LIMIT 3
`,*/
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

SELECT DISTINCT ?label ?abstract ?image ?date ?place ?casualties ?result ?strength ?isPartOfMilitaryConflict ?commander
WHERE {
  <${search}> rdfs:label ?label ;
                                              dbo:abstract ?abstract .
  
  OPTIONAL { <${search}> dbo:thumbnail ?image . }
  OPTIONAL { <${search}> dbo:date ?date . }
  OPTIONAL { <${search}> dbo:place ?place . }
  OPTIONAL { <${search}> dbo:casualties ?casualties . }
  OPTIONAL { <${search}> dbo:result ?result . }
  OPTIONAL { <${search}> dbo:strength ?strength . }
  OPTIONAL { <${search}> dbo:isPartOfMilitaryConflict ?isPartOfMilitaryConflict . }
  OPTIONAL { <${search}> dbo:commander ?commander . }

  FILTER (LANG(?label) = "fr")
  FILTER (LANG(?abstract) = "fr")
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
