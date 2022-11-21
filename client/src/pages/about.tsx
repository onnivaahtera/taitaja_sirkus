import { FC } from 'react'

interface aboutProps {
  
}

const About: FC<aboutProps> = ({}) => {
  return <>
    <div className='m-4 p-2'>
      Sirikus on pieni sirkus, joka voi järjestää esityksensä missä tahansa. Esitys voi olla isossa teatterissa tai vaikka omassa kodissasi. 
      Katsojamäärät vaihtelevat muutamasta ihmisestä jopa satoihin. Esitysten teema voi vaihdella asiakkaan toiveiden mukaan. 
      Teemat vaihtelevat rauhallisesta ja eteerisestä jooga teemasta vaikka räjähtävään avaruuden valloitukseen.

      Sirkus Sirikuksessa työskentelee 5 innokasta ja taitavaa henkilöä. He vastaavat kaikesta esitysten vaatimista järjestelyistä. 
      Sirkuksella on käytössään oma pakettiauto jonka kyydissä kulkee kaikki esityksessä tarvittava rekvisiitta.
    </div>
  </>
}

export default About