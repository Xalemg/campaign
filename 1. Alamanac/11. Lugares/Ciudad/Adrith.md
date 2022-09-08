---
Tags:
 - lugar
 - ciudad
Mundo: 
Tipo: Ciudad
banner_x: 
Usado_en: Chumipower
ubicacion: 
banner_y: 0
tematica:
 - Intriga
 - Misterio
economia: 
peligro: Medio
descripcion: Ciudad Drow #todo

clima: 
historia: #todo

comercio: 
politica: 
defensas: 
religion: 
banner: "![[Adjuntos/Arte/Kalabor 2.jpg|Kalabor 2.jpg]]"
---
> [!infobox| left]
> # Adrith
>![[emblema ciudad ejemplo.webp| cover hsmal]]
> # Información basica
> |Rasgo | Valor |
> | --- | --- |
> | Tematica | `=this.tematica`|
>  | Nivel economico | `=this.economia` |
> |  Nivel de peligro: | `=this.peligro` |
> | Tipo de asentamiento | `=this.tipo` |
>  | Ubicado en| `=link(this.ubicacion)` |
> ## Habitantes
| Raza | Numero |
| -------------- | ------ |
| #todo          | #todo  |
| **Total**      |        |
<!-- TBLFM: @>$2=sum(@I..@-1) -->

## Descripción
`=this.descripcion`
## Comercio
`=this.comercio`
## Religión
`=this.religion`
## Defensas
`=this.defensas`
## Politica
`=this.politica`
## Historia
`=this.historia`
### Eventos
```dataview
table fecha as Fecha, descripción as Descripción
FROM #evento
WHERE contains(parte_de, "Pacto del aguijon")
SORT fecha
```
## Mapa
```leaflet
id: Untitled
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
table tematica, economia, peligro, descripcion
FROM #lugar
WHERE contains(ubicacion, "Untitled")
SORT Posicion
```
## NPCs
```dataview
table Rango, Alineamiento, objetivo as "Objetivo", Faccion, profesión AS "Profesión"
FROM #NPC
WHERE contains(ubicaciones, "Untitled")
SORT Posicion
```
## Facciones

```dataview
table Tipo_organizacion as "Tipo de Organización", motivacion, Alineamiento, Nivel_de_influencia as "Nivel de Influencia",  Alcance_de_influencia as "Alcance de Influencia" 
FROM #faccion 
WHERE contains(ubicaciones, "Untitled")
SORT Posicion
```

## NPCs
```dataview
table Razas, Rasgos_distintivos AS "Rasgos Distintivos", Alineamiento , Valores
FROM #Cultura
WHERE contains(ubicacion, "Untitled")
SORT Posicion
```