"use client";

import React from "react";
import NavBar from "@/Components/Templates/NavBar";

export default function ContactRoot() {
  const creators = [
    {
      name: "Armand Brunet",
      github: "armynion",
    },
    {
      name: "Clément Chapard",
      github: "CLEMS3",
    },
    {
      name: "Florian Jourda",
      github: "floda69",
    },
    {
      name: "Florian Le Vasseur",
      github: "Florian-LeVasseur",
    },
    {
      name: "Arno Venaille",
      github: "avenaille",
    },
    {
      name: "Amaury Willem",
      github: "memory5ty7",
    },
  ];

  return (
    <div className="h-screen overflow-hidden bg-cover bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg/1024px-La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg')]">
      <NavBar />
      <div className="relative h-screen">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg">
          <div
            className="h-screen flex items-center justify-center flex flex-col flex-1 px-4"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              width: "20vw",
              height: "auto",
              borderRadius: "30px",
              marginTop: "20px",
            }}
          >
            <h1 className="text-4xl mb-6">Crédits</h1>
            <ul className="text-lg space-y-4">
              {creators.map((creator, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <img
                    src={"https://github.com/" + creator.github + ".png"}
                    alt={creator.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <p className="font-semibold">
                    <a
                      href={"https://github.com/" + creator.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {creator.name}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <h1 className="credits flex items-center justify-center mt-8">
            <a href="https://www.youtube.com/watch?v=8hiHE4yNuJw">
              H4113
            </a>
            <span className="year">(2024-2024)</span>
          </h1>

        </div>
      </div>

    </div>
  );
}