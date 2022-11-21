Tehtävän yleiskuvaus

Sirkus on nykyään mahtavaa esitystaidetta. Sirkusesitykset tuovat monelle suuria elämyksiä. Nykysirkus on esitys joissa on jokin juoni tai muu kantava idea, sekä tietenkin paljon erilaista taituruutta. Sirkus esitys voi olla pieni ja intiimi ja tapahtua vaikka olohuoneessasi.

Nyt uusi pieni iloinen sirkus Sirikus tarvitsee sivuston esitystensä markkinointiin ja lippujen tilaukseen. Sirkuskoulu Sirikus tarvitsee myös oman logon, joka näkyy sivuston jokaisella sivulla.

Sirkuksen esiintymisasujen pääväri on ruskea ja muina väreinä sininen, oranssi ja vihreä.

Sivuston rakenteen saat suunnitella itse, mutta seuraavat tiedot tulee löytyä sivustolta:

1. Yhteystiedot

2. Sirkuksen toiminnan kuvaus

3. Esitykset ja lippujen tilauslomake:

4. Poimi ja etsi sirkukseen liittyvää kuvamateriaalia

Yhteystiedot

Sirkuskoulu Sirikus, Kivenlahdentie 7,02320 Espoo, GSM: +358 50 567123, sirikus@sirikus.fi. Sivustolle halutaan kyseisen osoitteen Googlekartta.

Sirkuksen toiminnan kuvaus

Sirikus on pieni sirkus, joka voi järjestää esityksensä missä tahansa. Esitys voi olla isossa teatterissa tai vaikka omassa kodissasi. Katsojamäärät vaihtelevat muutamasta ihmisestä jopa satoihin. Esitysten teema voi vaihdella asiakkaan toiveiden mukaan. Teemat vaihtelevat rauhallisesta ja eteerisestä jooga teemasta vaikka räjähtävään avaruuden valloitukseen.

Sirkus Sirikuksessa työskentelee 5 innokasta ja taitavaa henkilöä. He vastaavat kaikesta esitysten vaatimista järjestelyistä. Sirkuksella on käytössään oma pakettiauto jonka kyydissä kulkee kaikki esityksessä tarvittava rekvisiitta.

Esitykset ja lippujen tilauslomake

Luo tietokanta Sirkus ja sinne taulut Esitys (esitysID int, teema varchar, esityspaikka varchar, kaupunki varchar, pvm date, paikat int, vapaitapaikkoja int), sekä Tilaaja(tilaajaID int, sposti varchar, puhelin varchar, paikkojenlkm int, esitysID int) ja lisää muutama rivi tietoa tauluihin.

Tee php-ohjelma, joka lukee tietokannan Esitys-taulun sisällön ja näyttää sen sivulla. Esitystä klikkaamalla pääsee tilauslomakkeelle, mikäli esitykseen on vapaita paikkoja.

Lomakkeessa näytetään esityksen teema, esityspaikka, kaupunki, päivämäärä ja vapaiden paikkojen määrä.

Lomakkeella kysytään tilaajan sähköpostiosoite, puhelinnumero ja montako lippua esitykseen halutaan. Jos yrittää tilata enemmän lippuja kuin on vapaita paikkoja, tulee lomakkeelle virheilmoitus: ”Yritit tilata liian monta lippua.” ja tilaus perutaan.

Onnistuneen tilauksen tiedot lisätään Tilaaja -tauluun ja Esitys –taulun vapaiden paikkojen määrä päivitetään.

Annettu kuvamateriaali

Etsi sirkukseen liittyvää kuvamateriaalia netistä.

Ohjeet kilpailijalle

Sivuston on oltava responsiivinen. Tabletti- ja mobiiliverion testityökaluna on Chromen kehittäjätyökalu (developer tools) ja siellä Apple Ipad ja Samsung Galaxy S4.

Sivusto tarkistetaan Google Chrome selaimella (uusin stabiili versio) sekä Microsoft Edgellä

Tee sivusto paikallisen koneen XAMPP –ympäristöön tai vaihtoehtoisesti voit käyttää koulun Azure – palvelinta.

Palautus:

Palauta zip – tiedostona Teams:n kansioon.
