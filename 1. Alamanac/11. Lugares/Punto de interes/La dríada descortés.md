---
Tags: lugar, punto_de_interes, Aretries/Altalos, Edificio
Mundo: Aretries
Tipo: Punto de interes
Usado_en: Chumipower
ubicacion: Ust Natha
banner_y: 0
tematica:
 - Reconfortante
 - Tranquila
 - Alegre
 - Drow
economia: media
peligro: Bajo
descripcion: La taber la dríada descortés es uno de los pocos sitios seguros para los extranjeros que visitan [[Ust Natha]]. El tabernero [[Darrialen]] es un derro que recupero la cordura tras un encuentro con una bruja. Los empleados del local tienen todos problemas mentales.
historia: 
defensas: "[[Darrialen]] tiene una pistola debajo del mostrador, muchos de los parroquianos estan dispuestos a inteceder en la defensa del establecimiento"
religion: 
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
## Mapa

```leaflet
id: driada1
image: [[Driada descortes.jpg]]
height: 800px
width: 95%
minZoom: -1.5
### Max zoom is 18.
maxZoom: 1.5
defaultZoom: 0
zoomDelta: 0.5
scale: 0.5
darkMode: disable
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
WHERE contains(ubicaciones, "La dríada descortés")
SORT Posicion
```
## Facciones

```dataview
table Tipo_organizacion as "Tipo de Organización", motivacion, Alineamiento, Nivel_de_influencia as "Nivel de Influencia",  Alcance_de_influencia as "Alcance de Influencia" 
FROM #faccion 
WHERE contains(ubicaciones, "La dríada descortés")
SORT Posicion
```