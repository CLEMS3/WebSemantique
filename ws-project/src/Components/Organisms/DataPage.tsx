import React from 'react';

interface DataPageProps {
    title: string;
    text: string;
    imageUrl: string;
    list1: { [key: string]: string[] };
    list2: { [key: string]: string[] };
}

const DataPage: React.FC<DataPageProps> = ({ title, text, imageUrl, list1, list2 }) => {
    return (
        <div>
            <div>
                <img src={imageUrl} alt="DataPage Image" />
            </div>
            <div>
                <p>{title}</p>
            </div>
            <div>
                <p>{text}</p>
            </div>
            <div>
                <h3>List 1</h3>
                <ul>
                    {Object.entries(list1).map(([key, subList]) => (
                        <li key={key}>
                            <strong>{key}</strong>
                            <ul>
                                {subList.map((item, subIndex) => (
                                    <li key={subIndex}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>List 2</h3>
                <ul>
                    {Object.entries(list2).map(([key, subList]) => (
                        <li key={key}>
                            <strong>{key}</strong>
                            <ul>
                                {subList.map((item, subIndex) => (
                                    <li key={subIndex}>{item}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DataPage;