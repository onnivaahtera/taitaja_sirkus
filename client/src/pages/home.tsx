import { FC } from "react";
import image from "../img/sirkus1.jpg";

const Home: FC = () => {
  return (
    <div>
      <div className="mx-6">
        <div className="flex justify-center">
          <img
            src={image}
            alt="hero"
            className="bg-blend-darken brightness-50 h-1/2 z-0 bg-center bg-no-repeat bg-cover relative bg-gradient-to-r from-black to-black"
          />
          <div>
            <h1 className="text-2xl text-center absolute top-1/3 left-1/2 z-50">
              Tervetuloa
            </h1>
          </div>
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
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2430.595006153708!2d24.658969648409673!3d60.15269939119416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sfi!4v1669802362926!5m2!1sen!2sfi"
            width="600"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
