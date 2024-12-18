import React from 'react';
import DataPage from '../Organisms/DataPage';

interface DataPageProps {
    title: string;
    text: string;
    imageUrl: string;
    list1: { [key: string]: string[] };
    list2: { [key: string]: string[] };
}

const warData: DataPageProps = {
    title: "Siège d'Alésia",
    text: "Le siège d'Alésia est une bataille qui a eu lieu en 52 av. J.-C. entre les armées de Jules César et de Vercingétorix. Elle s'est déroulée autour de la ville d'Alésia, située dans l'actuel département de la Côte-d'Or, en France.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Siege-alesia-vercingetorix-jules-cesar.jpg",
    list1: {
        "Guerre": ["Guerre des Gaules"],
        "Commandants": ["Jules César", "Vercingétorix"],
    },
    list2: {
        "Date": ["52 av. J.-C."],
        "Lieux": ["Alésia", "Gaule"],
        "Victimes": ["12800 morts et blessés"],
        "Issue": ["Victoire de Jules César"],
        "Forces en présence": ["80000 hommes pour César", "250000 pour Vercingétorix"]
    }
};

export const WarPage: React.FC = () => {
    const [dataPage, setDataPage] = React.useState<DataPageProps | null>(null);

    React.useEffect(() => {
        setDataPage(warData);
    }, []);
    if (!dataPage) {
        return null;
    }
    return (
        <DataPage 
            title={dataPage.title}
            text={dataPage.text}
            imageUrl={dataPage.imageUrl}
            list1={dataPage.list1}
            list2={dataPage.list2}
        />
    );
};

export default WarPage;