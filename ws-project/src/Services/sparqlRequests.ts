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
`,
});

export const DISPLAY_WAR = (search: string) => ({
  warDisplay: `PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT DISTINCT ?label ?image ?abstract ?date ?place ?casualties ?result ?strength ?isPartOfMilitaryConflict ?commander
WHERE {
  ?war a dbo:MilitaryConflict ;
       rdfs:label ?label ;
       dbo:abstract ?abstract .
  
  OPTIONAL { ?war dbo:thumbnail ?image . }
  OPTIONAL { ?war dbo:date ?date . }
  OPTIONAL { ?war dbo:place ?place . }
  OPTIONAL { ?war dbo:casualties ?casualties . }
  OPTIONAL { ?war dbo:result ?result . }
  OPTIONAL { ?war dbo:strength ?strength . }
  OPTIONAL { ?war dbo:isPartOfMilitaryConflict ?isPartOfMilitaryConflict . }
  OPTIONAL { ?war dbo:commander ?commander . }

  FILTER (LANG(?label) = "fr")
FILTER (LANG(?abstract) = "fr")


  FILTER (CONTAINS(LCASE(?label), LCASE("${search}")))
}
ORDER BY ?label
LIMIT 1

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
