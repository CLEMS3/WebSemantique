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
        <div className="p-8 rounded-xl bg-white/70 overflow-y-auto max-h-full" style={{
            scrollbarWidth: 'thin', // épaisseur de la barre de défilement
            scrollbarColor: '#555555 #ecf0f1', // couleur de la barre de défilement et de l'arrière-plan
            }}
        > {/* div principal fond blanc */}
            <div className="flex items-start"> 
                <div className='w-3/4 p-8'> {/* div gauche */}
                    <h1 className="text-4xl text-black font-bold mb-4 text-left">{title}</h1>
                    <p className="text-justify text-sm text-black text-left">{text}</p>
                    <div className="mt-4">
                        <ul>
                            {Object.entries(list1).map(([key, subList]) => (
                                <li className="text-lg text-black text-left mt-4" key={key}>
                                    <strong>{key}</strong>
                                    <ul>
                                        {subList.map((item, subIndex) => (
                                            <li key={subIndex}>
                                                {(item.includes('http://fr.dbpedia.org/page/') || item.includes('https://fr.dbpedia.org/page/')) ? (
                                                    <a href={item.replace(/https?:\/\/fr\.dbpedia\.org\/page\//, 'http://localhost:3000/war/')} target="_blank" rel="noopener noreferrer" className="text-blue-900">
                                                        {item.replace(/https?:\/\/fr\.dbpedia\.org\/page\//, '')}
                                                    </a>
                                                ) : (
                                                    <span>{item}</span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='w-1/4'> {/* div droite */}
                    <img src={imageUrl} alt="DataPage Image" className="rounded shadow-md max-w-full h-auto"/>
                    <div className="mt-4">
                        <ul>
                            {Object.entries(list2).map(([key, subList]) => (
                                <li className="text-lg text-black text-left mt-4" key={key}>
                                    <strong>{key}</strong>
                                    <ul>
                                        {subList.map((item, subIndex) => (
                                            <li key={subIndex}>
                                                {(item.includes('http://fr.dbpedia.org/page/') || item.includes('https://fr.dbpedia.org/page/')) ? (
                                                    <a href={item} target="_blank" rel="noopener noreferrer" className="text-blue-900">
                                                        {item.replace(/https?:\/\/fr\.dbpedia\.org\/page\//, 'http://localhost:3000/war/')}
                                                    </a>
                                                ) : (
                                                    <span>{item}</span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataPage;