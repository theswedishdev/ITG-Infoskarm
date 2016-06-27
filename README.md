ITG-Infoskarm
============================

[![Join the chat at https://gitter.im/itggot-joel-eriksson/ITG-Infoskarm](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/itggot-joel-eriksson/ITG-Infoskarm?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![ITG-Infoskarm senaste version](https://img.shields.io/badge/Senaste_version-1.1-green.svg?style=flat-square)](https://github.com/itggot-joel-eriksson/ITG-Infoskarm/releases)
[![ITG-Infoskarm MIT License](https://img.shields.io/badge/licens-MIT_License-blue.svg?style=flat-square)](LICENSE)

ITG-Infoskarm är skapad för [IT-Gymnasiet Göteborg](http://it-gymnasiet.se/vara-skolor/goteborg).

## Om ITG-Infoskarm
ITG-Infoskarm är en hemsida som samlar information om nästa tur med Västtrafik från de fyra närliggande hållplatserna vid IT-Gymnasiet, samt matsedeln.

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

Nästa tur information hämtas som JSON från Västtrafiks realtids-API (https://developer.vasttrafik.se). API:et ordnas utefter linje följt av resmål och till sist avgång. Distribueras som JSON.

Kräver `id` som parameter. T.ex. https://api.fam-ericsson.se/vasttrafik?id=9021014001960000 där `9021014001960000` är id för Chalmers.

###### _Västtrafiks API har en begränsning av mängden anrop som får göras. Därför ombeds personer som är intresserade av att nyttja detta API att kontakta [itggot-joel-eriksson](mailto:joel.eriksson3@itggot.se?subject=ITG-Infoskarm@GitHub) via mail eller [Gitter](https://gitter.im/itggot-joel-eriksson/ITG-Infoskarm) så kan källkoden för det omskrivna API:et delas._

#### Matsedeln
Skolmaten API (http://skolmaten.se) omvandlat av [@fam-ericsson](https://github.com/fam-ericsson). (https://api.fam-ericsson.se/matsedel)

Matsedeln hämtas som JSON från [skolmaten.se](http://skolmaten.se) och blir omvandlat och ordnas om. Distribueras som JSON.

#### Webbkamera
Göteborgs Stads öppna data __TrafficCameras__ (http://data.goteborg.se/TrafficCamera/v0.1/help) åter distribueras av [@fam-ericsson](https://github.com/fam-ericsson).

Bilderna hämtas från Göteborgs Stads öppna data som JPEG av åter distribueras krypterat med __SSL__ som JPEG. (https://api.fam-ericsson.se/gbgcamera)

`camera` är en frivillig parameter. T.ex. https://api.fam-ericsson.se/gbgcamera?camera=17 där `17` är camera för Chalmerstunneln mot Chalmersplatsen. Används inga parametrar visas alla trafikkameror som finns tillgängliga från Göteborgs Stads öppna data.

## Skärmdump
<img src="https://i.imgur.com/ewCOijK.png">
