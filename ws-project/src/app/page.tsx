'use client'

import HomePage from "@/Components/Templates/HomePage";
import NavBar from "@/Components/Templates/NavBar";

export default function Home() {
  return (
    <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg')] bg-cover h-screen w-full">
      <NavBar/>
      <HomePage />
    </div>
  );
}
