
#  <%tp.file.title %>
> [!infobox|left]
> ###
> |Rasgo | Valor |
> | --- | --- |
> | Tematica | `=this.tematica`|
> |  Nivel de peligro: | `=this.peligro` |
> | Tipo de localizacion | `=link(this.tipo)` |
> | Raza/Monstruos |  |
> #### Habitantes
> | Raza | Numero |
| -------------- | ------ |
| #todo          | #todo  |
| **Total**      |        |
<!-- TBLFM: @>$2=sum(@I..@-1) -->

## Descripción
`=this.descripcion`
## Historia
`=this.historia`
## Salas

## Mapa
```leaflet
id: <%location %>
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

## NPCs
```dataview
table Rango, Alineamiento, objetivo as "Objetivo", Faccion, Profesión
FROM #NPC AND <% "#" +world%>
WHERE lugar= "<%location%>"
SORT Posicion
```
## Facciones
```dataview
table
FROM #faccion Tipo_organizacion as "Tipo de Organización" AND <% "#" +world%>
WHERE lugar= "<%location%>"
SORT Posicion
```
