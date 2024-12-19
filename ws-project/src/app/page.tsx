
import HomePage from "@/Components/Templates/HomePage";
import NavBar from "@/Components/Templates/NavBar";
import SearchArea from '@/Components/Organisms/SearchArea';

export default function Home() {
  return (
    <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg/1280px-La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg')] bg-cover h-screen max-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
      <NavBar/>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <SearchArea />
      </div>
    </div>
  );
}
