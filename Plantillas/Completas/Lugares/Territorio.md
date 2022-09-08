---
<%*
const location = await tp.system.prompt("Nombre del sitio", "");
const tipos = await tp.user.dictionary("asentamiento");
const world = await tp.system.suggester(["Costa de la espada", "Aretries"], ["Golpe de los dragones ", "Aretries"]);
const lugaresConMapa = await tp.user.dictionary("lugares con mapa");
const tipo = await tp.system.suggester(tipos, tipos);
const tags = await tp.system.prompt("Tags, ", tipo +", Aretries/Altalos", "");
const tematica = await tp.system.prompt("Tematica", "Misterio", "");
const descripcion = await tp.system.prompt("Descripcion del lugar", "Una de las principales ciudades...", "");
const peligro = await tp.system.suggester(["Nivel de peligro alto", "Nivel de peligro medio", "Nivel de peligro bajo", "Seguro"], ["Alto", "Medio","Bajo", "Seguro"]);
const economia = await tp.system.suggester(["Nivel economico alto", "Nivel economico medio", "Nivel economico bajo", "No Aplica"], ["Alto", "Medio","Bajo", "N/A"]);
const comercio = await tp.system.prompt("Comercio del lugar", "Sus mayores importaciones son...", "");
const defensas = await tp.system.prompt("Defensas del lugar", "Misterio", "");
await tp.file.rename(location);
const religion = await tp.system.prompt("Religion del lugar", "La religion dominante es...", "");
tp.file.move(tp.file.path()+location);
const campaign = await tp.system.suggester(["Golpe de los dragones", "Islas Shamal", "Otra", "No"], ["Golpe de los dragones ", "Chumipower","Otra", "No"]);
tp.file.move("1. Alamanac/11. Lugares/"+location);
_%>
Tags: lugar, <%tags%>
banner: "![[Estepa.jpg]]"
Mundo: <%world%>
tematica: <%tematica%>
descripcion: <%descripcion%>
economia: <%economia%>
peligro: <%peligro%>
defensas: <%defensas%>
Tipo: <%tipo%>
cssclass: kanban
usado-en: <% campaign %>
---

#  <%location %>

> [!infobox]
>![[hand bane.webp| cover hsmal]]
> ###
> |Rasgo | Valor |
> | --- | --- |
> | Tematica | `=this.tematica`|
> |  Nivel de peligro: | `=this.peligro` |
> | Tipo de localizacion | `=link(this.tipo)` |

## Descripción
`=this.descripcion`

## Habitantes
| Raza/Monstruos | Numero |
| -------------- | ------ |
| #todo          | #todo  |
| **Total**      |        |
<!-- TBLFM: @>$2=sum(@I..@-1) -->
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
## Comercio
<%"#todo"%>
## Religión
<%"#todo"%>
## Historia
## Mapa
```leaflet
id: <%location %>
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
table
FROM #lugar AND <% "#" +world%>
WHERE lugar= "<%location%>"
SORT Posicion
```

