---
Tipo: Mazmorra
Tags:
 - Mazmorra
 - lugar
Mundo: 
Usado_en: 
tematica:
 - 
peligro: 
descripcion: |
              #todo

clima: 
historia: |
           #todo

ubicacion:
 - 
monstruos: 
banner: "![[Mazmorra.jpg]]"
banner_x: 0.49647
banner_y: 0.70476
---

#  Mazmorra
> [!infobox|left]
> ###
> |Rasgo | Valor |
> | --- | --- |
> | Tematica | `=this.tematica`|
> |  Nivel de peligro: | `=this.peligro` |
>| Clima | `=this.clima` |
> | Ubicado en | `=link(this.ubicaciones)` |
> | Raza/Monstruos | `=this.monstruos` |

## Descripción
`=this.descripcion`
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
id: app://obsidian.md/index.html
image: [[La asamblea de las 5 caras.png]]
height: 800px
width: 95%
minZoom: -1.5
### Max zoom is 18.
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

## Salas
## NPCs
```dataview
table Razas, Rasgos_distintivos AS "Rasgos Distintivos", Alineamiento , Valores
FROM #Cultura
WHERE contains(ubicacion, "<%tp.file.title%>")
SORT Posicion
```
## Facciones
```dataview
table Tipo_organizacion as "Tipo de Organización", motivacion, Alineamiento, Nivel_de_influencia as "Nivel de Influencia",  Alcance_de_influencia as "Alcance de Influencia" 
FROM #faccion 
WHERE contains(ubicaciones, "<%tp.file.title%>")
SORT Posicion
```
