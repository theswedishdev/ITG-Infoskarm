ITG-Infoskarm
============================

ITG-Infoskarm är skapad för [IT-Gymnasiet Göteborg](http://it-gymnasiet.se/vara-skolor/goteborg).

Källkoden finns under [gh-pages](https://github.com/itggot-joel-eriksson/ITG-Infoskarm/tree/gh-pages). 

## Om ITG-Infoskarm
ITG-Infoskarm är en hemsida som samlar information om nästa tur med Västtrafik från de fyra närliggande hållplatserna vid IT-Gymnasiet, samt matsedeln (_BETA_).

ITG-Infoskarm visar även bilder från en webbkamera som sitter på taket hos IT-Gymnasiet Göteborgs tak i riktning mot Chalmersplatsen.

## Funktioner

- Realtidsinformation från Västtrafiks fyra närliggande hållplatser:
    - Chalmers, Göteborg
    - Kapellplatsen, Göteborg
    - Chalmers Tvärgata, Göteborg
    - Chalmersplatsen, Göteborg
- Tid och datum, samt vecka
- Webbkamera med vy över Chalmersplatsen
- Matsedel för IT-Gymnasiet Göteborg

## Datakällor

#### Nästa tur
Västtrafik realtids-API omvandlat av [@fam-ericsson](https://github.com/fam-ericsson). (https://api.fam-ericsson.se/vasttrafik)

Nästa tur information hämtas som JSON från Västtrafiks realtids-API (http://labs.vasttrafik.se). API:et ordnas utefter linje följt av resmål och till sist avgång. Distribueras som JSON.

Kräver `id` som parameter. T.ex. https://api.fam-ericsson.se/vasttrafik?id=9021014001960000 där `9021014001960000` är id för Chalmers.

###### _Västtrafiks API har en begränsning av mängden anrop som får göras. Därför ombeds personer som är intresserade av att nyttja detta API att kontakta [itggot-joel-eriksson](mailto:joel.eriksson3@itggot.se?subject=ITG-Infoskarm@GitHub) så kan källkoden för det omskrivna API:et delas._

#### Matsedeln (__BETA__)
Skolmaten RSS (http://meny.dinskolmat.se/skola/rss/) omvandlat av [@fam-ericsson](https://github.com/fam-ericsson). (https://api.fam-ericsson.se/matsedel/beta/)

Matsedeln hämtas från ett RSS-flöde hos [skolmaten.se](http://skolmaten.se) som blir omvandlat till JSON.

###### _Detta sättet att hämta matsedeln på kommer att ersättas då ett JSON-API kommer att utvecklas som är avsett för IT-Gymnasiet Göteborg. Det nya API:et kommer att buntas ihop med det API som existerar för [ITG Appen](http://itgappen.se)._ [ITG Appens API](https://api.itgappen.se)

#### Webbkamera
Göteborgs Stads öppna data __TrafficCameras__ (http://data.goteborg.se/TrafficCamera/v0.1/help) åter distribueras av [@fam-ericsson](https://github.com/fam-ericsson).

Bilderna hämtas från Göteborgs Stads öppna data som JPEG av åter distribueras krypterat med __SSL__ som JPEG. (https://api.fam-ericsson.se/gbgcamera)

`camera` är en frivillig parameter. T.ex. https://api.fam-ericsson.se/gbgcamera?camera=17 där `17` är camera för Chalmerstunneln mot Chalmersplatsen. Används inga parametrar visas alla trafikkameror som finns tillgängliga från Göteborgs Stads öppna data.

## Skärmdump
<img src="https://i.imgur.com/XBHE73N.png">

## Nedladdningar
[Version 1.0-beta.1](https://github.com/itggot-joel-eriksson/ITG-Infoskarm/releases)
