import { FC } from "react";
import image from "../img/sirkus1.jpg";

const Home: FC = () => {
  return (
    <div>
      <div className="mx-6">
        <div>
          <h1 className="text-2xl text-center">Tervetuloa</h1>
        </div>
        <div className="flex">
          <img src={image} alt="" className="w-1/2 m-6" />
        </div>
        <h2 className="p-4 text-xl">Sirkuksen toiminta</h2>
        <div className="m-4 p-2">
          Sirikus on pieni sirkus, joka voi järjestää esityksensä missä tahansa.
          Esitys voi olla isossa teatterissa tai vaikka omassa kodissasi.
          Katsojamäärät vaihtelevat muutamasta ihmisestä jopa satoihin.
          Esitysten teema voi vaihdella asiakkaan toiveiden mukaan. Teemat
          vaihtelevat rauhallisesta ja eteerisestä jooga teemasta vaikka
          räjähtävään avaruuden valloitukseen.
        </div>
        <div className="m-4 p-2">
          Sirkus Sirikuksessa työskentelee 5 innokasta ja taitavaa henkilöä. He
          vastaavat kaikesta esitysten vaatimista järjestelyistä. Sirkuksella on
          käytössään oma pakettiauto jonka kyydissä kulkee kaikki esityksessä
          tarvittava rekvisiitta.
        </div>
      </div>
    </div>
  );
};

export default Home;
