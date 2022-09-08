---
Tags:  
- lugar 
- punto_de_interes 
Mundo: 
Tipo: 
Usado_en: 
ubicacion: 
banner_y: 0
tematica:
 - 
economia: 
peligro: 
descripcion:  |
           #todo
              
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
WHERE contains(parte_de, "<%tp.file.title%>")
SORT Posicion
```
## Mapa
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
WHERE contains(ubicaciones, "<%tp.file.title%>")
SORT Posicion
```
## Facciones

```dataview
table Tipo_organizacion as "Tipo de Organización", motivacion, Alineamiento, Nivel_de_influencia as "Nivel de Influencia",  Alcance_de_influencia as "Alcance de Influencia" 
FROM #faccion 
WHERE contains(ubicaciones, "<%tp.file.title%>")
SORT Posicion
```

## NPCs
```dataview
table Razas, Rasgos_distintivos AS "Rasgos Distintivos", Alineamiento , Valores
FROM #Cultura
WHERE contains(ubicacion, "<%tp.file.title%>")
SORT Posicion
```