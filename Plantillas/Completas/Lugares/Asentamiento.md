---
<%*
const location = await tp.system.prompt("Nombre del sitio", "");
const tipos = await tp.user.dictionary("asentamiento");
const world = await tp.system.suggester(["Costa de la espada", "Aretries"], ["Golpe de los dragones ", "Aretries"]);
const tipo = await tp.system.suggester(tipos, tipos);
const tags = await tp.system.prompt("Tags, ", tipo +", Aretries/Altalos", "");
const tematica = await tp.system.prompt("Tematica", "Misterio", "");
const descripcion = await tp.system.prompt("Descripcion del lugar", "Una de las principales ciudades...", "");
const peligro = await tp.system.suggester(["Nivel de peligro alto", "Nivel de peligro medio", "Nivel de peligro bajo", "Seguro"], ["Alto", "Medio","Bajo", "Seguro"]);
const economia = await tp.system.suggester(["Nivel economico alto", "Nivel economico medio", "Nivel economico bajo", "No Aplica"], ["Alto", "Medio","Bajo", "N/A"]);
const comercio = await tp.system.prompt("Comercio del lugar", "Sus mayores importaciones son...", "");
const defensas = await tp.system.prompt("Defensas del lugar", "Milicia local...", "");
await tp.file.rename(location);
const religion = await tp.system.prompt("Religion del lugar", "La religion dominante es...", "");
const campaign = await tp.system.suggester(["Golpe de los dragones", "Islas Shamal", "Otra", "No"], ["Golpe de los dragones ", "Chumipower","Otra", "No"]);
tp.file.move("1. Alamanac/11. Lugares/"+location);
_%>
Tags: lugar, <%tags%>
banner: "![[Mercado generico.jpg]]"
Mundo: <%world%>
tematica: <%tematica%>
descripcion: <%descripcion%>
economia: <%economia%>
comercio: <%comercio%>
peligro: <%peligro%>
defensas: <%defensas%>
Tipo: <%tipo%>
cssclass: kanban
usado-en: <% campaign %>
banner_y: 1
---

#  <%tp.file.title%>

> [!infobox| left]
>![[emblema ciudad ejemplo.webp| cover hsmal]]
> ###
> |Rasgo | Valor |
> | --- | --- |
> | Tematica | `=this.tematica`|
>  | Nivel economico | `=this.economia` |
> |  Nivel de peligro: | `=this.peligro` |
> | Tipo de asentamiento | `=this.tipo` |
> ## Habitantes
| Raza/Monstruos | Numero |
| -------------- | ------ |
| #todo          | #todo  |
| **Total**      |        |
<!-- TBLFM: @>$2=sum(@I..@-1) -->

## Descripción
`=this.descripcion`

## Comercio
`=this.comercio
## Religión
`=this.religion
## Historia
`=this.historia
## NPCs

```dataview
table Rango, Alineamiento, objetivo as "Objetivo", Faccion, Profesión
FROM #NPC
WHERE lugar= "<%tp.file.title%>"
SORT Posicion
```
## Facciones

```dataview
table
FROM #faccion Tipo_organizacion as "Tipo de Organización"
WHERE lugar= "<%tp.file.title%>"
SORT Posicion
```
## Mapa
```leaflet
id: placeholder
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
FROM #lugar 
WHERE lugar= "<%tp.file.title%>"
SORT Posicion
```

