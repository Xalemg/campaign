---
Tags: lugar, ciudad, Aretries/Adur, Infraoscuridad 
banner: "![[Edificio Ust Natha.png]]"
Mundo: Aretries
Tipo: Ciudad
cssclass: kanban
politica: |
 La ciudad esta dirigida por un consejo de los representantes de las 4 mayores casas. Estas siempre ambicionan un poder mayor. Cada una cuenta con sus propio ejercito de Drows y esclavos. Actualmente la [[Casa Despana]] con la ayuda de  [[Las Tejedoras de la reina]] pretende llevar a los Drows de vuelta a la superficie. Usando la [[Llama del primer dragon]] ha construido armas capaces de acabar con dioses y ahora pretende acabar con el sol de [[Amaunator]] acabando con el dios. Pretende que las demás casas de la ciudad se unan a ella en la guerra contra superficie.
banner_x: 
Usado_en: Chumipower
defensas: Todas las casas drows de la ciudad tienen sus propios ejercitos. Estos varian en tamaño de entre una docena de las casas mas bajas a casi millar de la [[Casa Despana]]
ubicacion: [[Lago Natha]]
banner_y: 0.8
tematica:
 - Intriga
 - Misterio
economia: Gran poder
peligro: Medio
descripcion: |
 En Ust Natha igual que en el resto de ciudades Drow la ley solo se respeta si te han pillado saltandotela. Es una tapadera para mantener una causa comun y evitar que la ciudad se devore a si misma. Donde la auntentica ley que se respeta es la del mas fuerte.
 Ust Natha es una ciudad drow situada en la Middledark de la Infraoscuridad. Su ubicación se corresponde con la frontera suroeste de Adur y  en el mundo de la superficie. La ciudad es pequeña, existiendo enteramente dentro de una única gran caverna con la mayoría de sus zonas habitables construidas dentro de estalagmitas huecas. A pesar de su tamaño, se ha convertido en un importante centro de comercio entre los drow y otras razas.  Ust Natha debe enfrentarse a otros asentamientos de la Infraoscuridad en la región, incluyendo una ciudad kuo-toa y un  enclave illithid. A una aldea svirfneblin cercana se le permite seguir siendo nominalmente independiente siempre que suministre una cuota de esclavos cada año. 
 ### Apertura al mundo 
 Aunque la mayoría de la población de la ciudad es drow, en las últimas décadas la ciudad ha permitido a algunos  extranjeros que se instalen en ella. Esto ha sido a instancias de [[Phaere Despana]], que busca aumentar la fortuna de su casa creando un lugar dentro de la Infraoscuridad donde los comerciantes de la superficie se sientan relativamente seguros y a su vez poder espiarlos y aumentar su conocimiento de la superficie.
 ### Las venas de fuego
 Las venas de fuego son extrañas emulsiones de lava que recorren las paredes de las casas drows de la ciudad. Estas venas protegen de la magia de adivinación a las criaturas del interior.
clima: Templado y humedo
historia: La ciudad también tiene un significado histórico para las drow, ya que las leyendas afirman que Ust Natha se encuentra cerca de las cuevas de la superficie donde los elfos oscuros Ilythiiri se vieron obligados a retirarse tras perder la cuarta guerra de la Luz. Después de muchas generaciones, estos refugiados Ilythiri evolucionaron hasta convertirse en los drow actuales.
comercio: |
 Venenos, hongos, artefactos ancestrales, esclavos.
 Organizaciones como [[Los Dardos Nocturnos]] [[Los Callizos]] tienen ahora establecimientos comerciales permanentes en la ciudad. Además de la población drow y los comerciantes de la superficie, hay miles de esclavos quaggoth y svirfneblin que apoyan a las casas drow, e incluso se pueden encontrar algunos enviados illithid y aboleth dentro de la ciudad.
religion: [[Lolth]]
---
> [!infobox| left]
> # Ust Natha
>![[Casa Despana.webp| cover hsmal]]
> # Información basica
> |Rasgo | Valor |
> | --- | --- |
> | Tematica | `=this.tematica`|
>  | Nivel economico | `=this.economia` |
> |  Nivel de peligro: | `=this.peligro` |
> | Tipo de asentamiento | `=this.tipo` |
>  | Ubicado en| `=link(this.ubicacion)` |
> ## Habitantes
| Raza/Monstruos | Numero |
| -------------- | ------ |
| Drow           | 6000   |
| quaggoth       | 375    |
| svirfneblin    | 375    |
| Otros          | 750    |
| **Total**      | 7500   |
<!-- TBLFM: @>$2=sum(@I..@-1) -->

## Descripción
`=this.descripcion`
## Comercio
`=this.comercio`
## Defensas
`=this.defensas`
## Religión
`=this.religion`
## Politica
`=this.politica`
## Historia
`=this.historia`

```leaflet
id: 
image: [[Bolgog a modificar.jpg]]
height: 800px
width: 95%
minZoom: -1.5
### Max zoom is 18.
maxZoom: 1.5
defaultZoom: -1
zoomDelta: 0.5
scale: 0.5
darkMode: disable
```
## Lugares de interés
```dataview
table tematica, economia, peligro, descripcion
FROM #lugar
WHERE contains(ubicacion, "Ust Natha")
SORT Posicion
```
#### Tazón de Aboleth
Un edificio acuático donde se alojan los Aboleth visitantes. 
#### Piedra del Alba
La piedra del Alba es una  enorme geoda situada en el centro de una plaza con estatuas de los lideres de las actuales casas Drows de la ciudad.
#### Bazar
Donde se realiza todo el comercio. Algunos artículos se pueden encontrar siempre en el mercado. Un cliente también puede gastar 100 gp para obtener una tirada
en la tabla de objetos raros. Pueden tirar un máximo de 5 veces al día.
##### Comunes
| Magic Item                                                                                                                                                                                                                                                                           | Cost   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| [Spell scroll (1st level)](https://5e.tools/items.html#spell%20scroll%20(1st%20level)_dmg)                                                                                                                                                                                           | 50 gp  |
| [Potion of healing](https://5e.tools/items.html#potion%20of%20healing_dmg)                                                                                                                                                                                                           | 40 gp  |
| [Ammunition, +1](https://5e.tools/items.html#%2b1%20ammunition_dmg)—[arrows](https://5e.tools/items.html#%2b1%20arrow_dmg) (10), [bolts](https://5e.tools/items.html#%2b1%20crossbow%20bolt_dmg) (10) or [sling bullets](https://5e.tools/items.html#%2b1%20sling%20bullet_dmg) (20) | 100 gp |
| [Elixir of health](https://5e.tools/items.html#elixir%20of%20health_dmg)                                                                                                                                                                                                             | 125 gp |
| [Potion of poison](https://5e.tools/items.html#potion%20of%20poison_dmg)                                                                                                                                                                                                             | 125 gp |
| [Spell scroll (2nd level)](https://5e.tools/items.html#spell%20scroll%20(2nd%20level)_dmg)                                                                                                                                                                                           | 300 gp |
| [Weapon, +1](https://5e.tools/items.html#%2b1%20weapon_dmg)—any simple or martial                                                                                                                                                                                                    | 400 gp |
| [Bag of holding](https://5e.tools/items.html#bag%20of%20holding_dmg)                                                                                                                                                                                                                 | 500 gp |
| [Cloak of elvenkind](https://5e.tools/items.html#cloak%20of%20elvenkind_dmg)                                                                                                                                                                                                         | 600 gp |
| [Driftglobe](https://5e.tools/items.html#driftglobe_dmg)                                                                                                                                                                                                                             | 700 gp |
| [Wand of secrets](https://5e.tools/items.html#wand%20of%20secrets_dmg)                                                                                                                                                                                                               | 750 gp |
| [Cloak of protection](https://5e.tools/items.html#cloak%20of%20protection_dmg)                                                                                                                                                                                                       | 800 gp |

##### Especiales
| d100  | Magic Item                                                                                                 | Cost      |
| ----- | ---------------------------------------------------------------------------------------------------------- | --------- |
| 1-10  | [Spell scroll (3rd level)](https://5e.tools/items.html#spell%20scroll%20(3rd%20level)_dmg)                 | 300 gp    |
| 11-20 | [Potion of greater healing](https://5e.tools/items.html#potion%20of%20greater%20healing_dmg)               | 400 gp    |
| 21-25 | [Medallion of thoughts](https://5e.tools/items.html#medallion%20of%20thoughts_dmg)                         | 600 gp    |
| 26-30 | [Ring of mind shielding](https://5e.tools/items.html#ring%20of%20mind%20shielding_dmg)                     | 700 gp    |
| 31-40 | [Adamantine plate](https://5e.tools/items.html#adamantine%20plate%20armor_dmg)                             | 2,000 gp  |
| 41-45 | [Dimensional shackles](https://5e.tools/items.html#dimensional%20shackles_dmg)                             | 3,000 gp  |
| 46-55 | [Spell scroll (4th level)](https://5e.tools/items.html#spell%20scroll%20(4th%20level)_dmg)                 | 6,500 gp  |
| 56-60 | [Weapon, +2](https://5e.tools/items.html#%2b2%20weapon_dmg)—any simple or martial (ranged)                 | 9,000 gp  |
| 61-65 | [Mantle of spell resistance](https://5e.tools/items.html#mantle%20of%20spell%20resistance_dmg)             | 12,000 gp |
| 66-70 | [Weapon, +2](https://5e.tools/items.html#%2b2%20weapon_dmg)—any martial                                    | 12,500 gp |
| 71-75 | [Wand of lightning bolts](https://5e.tools/items.html#wand%20of%20lightning%20bolts_dmg)                   | 15,000 gp |
| 76-80 | [Periapt of proof against poison](https://5e.tools/items.html#periapt%20of%20proof%20against%20poison_dmg) | 20,000 gp |
| 81-85 | [Shield, +3](https://5e.tools/items.html#%2b3%20shield_dmg)                                                | 30,000 gp |
| 86-89 | [Splint armor, +2](https://5e.tools/items.html#%2b2%20splint%20armor_dmg)                                  | 40,000 gp |
| 90-91 | [Weapon, +3](https://5e.tools/items.html#%2b3%20weapon_dmg)—heavy crossbow, rapier or morningstar          | 60,000 gp |
| 92-93 | [Rapier, +3](https://5e.tools/items.html#%2b3%20rapier_dmg)                                                | 60,000 gp |
| 94-95 | [Morningstar, +3](https://5e.tools/items.html#%2b3%20morningstar_dmg)                                      | 60,000 gp |
| 96-00 | [Rod of the pact keeper, +3](https://5e.tools/items.html#%2b3%20rod%20of%20the%20pact%20keeper_dmg)        | 60,000 gp |

#### [[Carcerus]]
#### Duergar's Demise.
Una tienda que vende productos ilícitos y también actúa como un cerco dirigido por los Ladrones de la Sombra.
#### Sociedad de Luchadoras.
Donde se enseña a las drow femeninas
#### Casa Claddath.
Una casa vinculada a la ciudad drow de Ched Nasad. 
#### [[Casa Despana]].
La casa drow más poderosa de Ust Natha.
#### Torre de Malavon. 
El hogar de Malavon Despana y donde se enseñan los magos drow. 
#### Sociedad de Luchadores Masculinos. 
Donde se enseña a las drow masculinas a ser guerreras. 
#### Corrales de Rothe. 
Donde se guardan los rebaños de rothe para su futuro consumo. 
#### Templo de Lolth. 
El edificio más grande de Ust Natha.
#### Woolanth. 
Pequeña biblioteca y una de las mayores colecciones de conocimiento sobre Netheril en Faerûn, incluyendo libros que detallan la localización de los quistes de la prisión de phaerimm.

## Mapa
```leaflet
id: UstNatha1
image: [[Ust Natha.jpg]]
width: 95%
minZoom: -1.5
### Max zoom is 18.
maxZoom: 1.5
defaultZoom: -0.3
zoomDelta: 0.5
scale: 0.5
darkMode: disable
```
## NPCs
```dataview
table Rango, Alineamiento, objetivo AS "Objetivo", Faccion, Profesión
FROM #NPC
WHERE contains(ubicaciones, "Ust Natha")
SORT Posicion
```
## Facciones

```dataview
table Tipo_organizacion as "Tipo de Organización", motivacion, Alineamiento, Nivel_de_influencia as "Nivel de Influencia",  Alcance_de_influencia as "Alcance de Influencia" 
FROM #faccion
WHERE contains(ubicaciones, "Ust Natha")
SORT Posicion
```

### Organizaciónes
La ciudad está controlada por varias casas drow que compiten entre sí, la más poderosa de las cuales es la familia Despana.

#### Casa Mildren
 **Madre matrona**: Firra Mildren 
 **Patron**:  Jornu Mildren
 **Mago Principal**: Entreri Mildren 
 **Maestro de armas**: [[Faledrien Laudrez]]

 
#### Casa Gilvarid
 **Madre matrona**: Althaea Gilvarid 
 **Patron**:  Vanuath Gilvarid
 **Mago Principal**: Varis Gilvarid 
 **Maestro de armas**: Birel Gilvarid