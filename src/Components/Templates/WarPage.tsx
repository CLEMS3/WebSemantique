import React from "react";
import DataPage from "../Organisms/DataPage";
import { fetchDisplayWar } from "@/Services/apiService";
import { useEffect } from "react";

interface DataPageProps {
  title: string;
  text: string;
  imageUrl: string;
  list1: { [key: string]: { label: string; appLink: string }[] };
  list2: { [key: string]: { label: string; appLink: string }[] };
}

// const warData: DataPageProps = {
//     title: "Siège d'Alésia",
//     text: "Le siège d'Alésia est une bataille qui a eu lieu en 52 av. J.-C. entre les armées de Jules César et de Vercingétorix. Elle s'est déroulée autour de la ville d'Alésia, située dans l'actuel département de la Côte-d'Or, en France.",
//     imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Siege-alesia-vercingetorix-jules-cesar.jpg",
//     list1: {
//         "Guerre": ["Guerre des Gaules"],
//         "Commandants": ["Jules César", "Vercingétorix"],
//     },
//     list2: {
//         "Date": ["52 av. J.-C."],
//         "Lieux": ["Alésia", "Gaule"],
//         "Victimes": ["12800 morts et blessés"],
//         "Issue": ["Victoire de Jules César"],
//         "Forces en présence": ["80000 hommes pour César", "250000 pour Vercingétorix"]
//     }
// };

interface WarPageProps {
  nameParam: string;
}

export const WarPage: React.FC<WarPageProps> = ({ nameParam }) => {
  const [dataPage, setDataPage] = React.useState<DataPageProps | null>(null);
  const name = "http://dbpedia.org/resource/" + decodeURI(nameParam);

  useEffect(() => {
    fetchDisplayWar(name).then((data) => {
      setDataPage(data);
      console.log(data);
    });
  }, []);

  if (dataPage) {
    return (
      <DataPage
        title={dataPage.title}
        text={dataPage.text}
        imageUrl={dataPage.imageUrl}
        list1={dataPage.list1}
        list2={dataPage.list2}
      />
    );
  } else {
    return (
      <DataPage
        title={"Houps !"}
        text={
          "Il semble qu'il n'y ait pas de données disponibles pour votre langue."
        }
        imageUrl={"https://images.pond5.com/shocked-looking-proboscis-monkey-footage-096406324_iconl.jpeg"}
        list1={{ "": [{ label: "", appLink: "" }] }}
        list2={{ "": [{ label: "", appLink: "" }] }}
      />
    );
  }
};

export default WarPage;
