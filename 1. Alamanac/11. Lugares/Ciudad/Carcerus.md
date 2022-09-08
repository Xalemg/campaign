---
Tags:  
- punto_de_interes 
- lugar
Mundo: Chumipower 
Tipo: Punto de interes 
Usado_en: Chumipower 
ubicacion: Ust Natha 
banner_y: 0
tematica:
 - Infernal
 - Demoniaca 
economia: Baja
peligro: Muy Alto 
descripcion:  | 
  Un portal a Carceri y guardias demodé hace que esta sea la prisión perfecta para los criminales más peligrosos de la [[Infraoscuridad]]. 
  Esta prisión es utilizada no sólo por Ust Natha, sino por otras ciudades drow ciudades drow como Rilauven y Guallidurth; incluso ciudades no drow como la cercana ciudad enana de Iltkazar utilizan la prisión en ocasiones para sus peores criminales. La mayoría de los habitantes de la habitantes de la Infraoscuridad como algo ineludible y que ser consignado a la prisión un destino peor que la muerte. La razón de esto es que es dirigida por demodés del plano infernal de Carceri. Un portal al plano de Carceri se encuentra incluso en sus profundidades. Algunos de los prisioneros que se rumorea que se encuentran en laprisión incluyen poderosos drider, illithid pícaros como Alhoon e incluso algunos especímenes de phaerrim. Lo peor de todo es que algunos creen que los demodands mantienen un pequeño número de bebilith que han torturado para que sirvan a sus necesidades. Estas criaturas con forma de araña criaturas pueden perseguir infaliblemente a los prisioneros fugados en cualquier lugar a través de Faerûn. 
historia:  |
 #todo
defensas:
banner: "![[Sirena Borracha.jpg]]"
---
> [!infobox| left]
> # Información basica
> |Rasgo | Valor |
> | --- | --- |
> | Tematica | `=this.tematica`|
>  | Nivel económico | `=this.economia` |
> |  Nivel de peligro: | `=this.peligro` |
> | Tipo de ubicación | `=this.tipo` |
>  | Ubicado en| `=link(this.ubicacion)` |

## Descripción
`=this.descripcion`
## Defensas
`=this.defensas`
## Historia
`=this.historia`
### Eventos
```dataview
table descripción as Descripción, fecha as Fecha
FROM #evento
WHERE contains(parte_de, "Carcerus")
SORT Posicion
```
```leaflet

```
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
## NPCs
```dataview
table Rango, Alineamiento, objetivo as "Objetivo", Faccion, profesión as "Profesión"
FROM #NPC
WHERE contains(ubicaciones, "Carcerus")
SORT Posicion
```
## Facciones

```dataview
table Tipo_organizacion as "Tipo de Organización", motivacion, Alineamiento, Nivel_de_influencia as "Nivel de Influencia",  Alcance_de_influencia as "Alcance de Influencia" 
FROM #faccion 
WHERE contains(ubicaciones, "Carcerus")
SORT Posicion
```

## NPCs
```dataview
table Razas, Rasgos_distintivos AS "Rasgos Distintivos", Alineamiento , Valores
FROM #Cultura
WHERE contains(ubicacion, "Carcerus")
SORT Posicion
```