import React from 'react';
import DataPage from '../Organisms/DataPage';

interface DataPageProps {
    title: string;
    text: string;
    imageUrl: string;
    list1: { [key: string]: string[] };
    list2: { [key: string]: string[] };
}

const personPage: DataPageProps = {
    title: "Napopo",
    text: "Les guerres napoléoniennes sont en partie le prolongement des guerres engendrées par la Révolution française de 1789, et durèrent tout au long du Premier Empire de Napoléon Ier. Il n’existe pas de consensus sur leur point de départ. Certains considèrent qu’elles commencent lors du coup d'état du 18 Brumaire an VIII (9 novembre 1799) par le général Bonaparte. D’autres prolongent les guerres de la Révolution française jusqu’en 1802, et estiment que la déclaration de guerre du Royaume-Uni à la France en 1803, après la courte période de paix qui suit le traité d'Amiens (1802), est le point de départ des guerres napoléoniennes. De 1792 à 1815, sept coalitions — incluant toutes le Royaume-Uni — se forment contre la France, durant ce qu'on appelle les guerres de Coalitions. Pendant les guerres de la Révolution française, la France bat la Première Coalition, puis, sous le Consulat de Napoléon Bonaparte, elle défait la Deuxième Coalition. Devenu empereur, Napoléon bat l'Autriche et la Russie lors de la Troisième Coalition (batailles d'Ulm et d'Austerlitz), la Prusse et la Russie lors de la Quatrième Coalition (Iéna, Eylau, Friedland), puis l'Autriche seule lors de la Cinquième Coalition (Eckmühl, Wagram). Mais tandis que la Grande Armée triomphe en Europe centrale, elle s'enlise dans une longue guerre d'occupation en Espagne, et l'Angleterre domine les mers à partir de la bataille de Trafalgar. Après l'échec d'une tentative d'invasion de la Russie par la France, la Sixième Coalition est victorieuse à Leipzig et renverse Napoléon en 1814. L'année suivante, l'Empereur revenu au pouvoir est définitivement vaincu par la Septième Coalition à Waterloo. Ces guerres révolutionnent les armées européennes et notamment l’emploi de l’artillerie, ainsi que toute l’organisation militaire, à une échelle jamais vue auparavant, due principalement à l’introduction moderne de la conscription de masse. La France, sur l’élan des conquêtes révolutionnaires, voit sa puissance croître rapidement et étend sa domination au continent entier. La chute est plus rapide encore, de la désastreuse retraite de Russie à la bataille de Waterloo, jusqu’à ce que la dynastie des Bourbons soit provisoirement restaurée en France. L’ensemble de tous ces conflits fit un total de morts compris entre 3,5 et 6,5 millions de personnes. (fr)",
    imageUrl: "http://commons.wikimedia.org/wiki/Special:FilePath/Francois_Gerard_-_Napoleon_Ier_en_costume_du_Sacre.jpg?width=300",
    list1: {
        "Guerres": ["http://fr.dbpedia.org/page/Guerres_napoléoniennes"],
        "Commandants": ["Jules César", "https://fr.dbpedia.org/page/Vercingétorix"],
    },
    list2: {
        "Naissance": ["1808-04-20"],
        "Décès": ["1808-04-20"],
        "Famille": ["jaquie", "michelle"],
        "Victimes": ["12800 morts et blessés"],
        "Issue": ["Victoire de Jules César"],
        "Forces en présence": ["80000 hommes pour César", "250000 pour Vercingétorix"]
    }
};

export const PersonPage: React.FC = () => {
    return (
        <DataPage 
            title={personPage.title}
            text={personPage.text}
            imageUrl={personPage.imageUrl}
            list1={personPage.list1}
            list2={personPage.list2}
        />
    );
};

export default PersonPage;