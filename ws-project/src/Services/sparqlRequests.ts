export function getRequestUrl(request: string) {
  return (
    "http://dbpedia.org/sparql" +
    "?query=" +
    encodeURIComponent(request) +
    "&format=json"
  );
}

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
