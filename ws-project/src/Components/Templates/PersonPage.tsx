import React from 'react';
import DataPage from '../Organisms/DataPage';
import {fetchDisplayPerson} from '@/Services/apiService';
import { useEffect } from 'react';

interface DataPageProps {
    title: string;
    text: string;
    imageUrl: string;
    list1: { [key: string]: { label: string; appLink: string }[] }; 
    list2: { [key: string]: { label: string; appLink: string }[] }; 
}

interface PersonPageProps {
    nameParam: string;
}

export const PersonPage: React.FC<PersonPageProps> = ({nameParam}) => {
    const [dataPage, setDataPage] = React.useState<DataPageProps | null>(null);
    const name = "http://dbpedia.org/resource/" + nameParam;
    console.log(nameParam);
    console.log(name);
    

    useEffect(() => {
        fetchDisplayPerson(name).then(data => {
            setDataPage(data);
            console.log(data);
        });
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

export default PersonPage;