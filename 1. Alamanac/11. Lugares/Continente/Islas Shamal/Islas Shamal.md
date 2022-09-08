---

tag: 
- Aretries 
- lugar
- continente
- IslasShamal 
Tipo: Continente 
Mundo: 
Usado_en: Chumipower  
ubicacion: [[Plano Material]]
tematica:
 - Intriga politica
 - Divina
 - Epica
economia: Voyante, de las mas avanzadas del mundo
Desarrollo: Varia por Isla, pero en general alto
peligro: variado
descripcion: |
              
clima: 
historia: |
 ![[Historia de las Islas]]
            
comercio:
defensas:
religion: 
banner: "Adjuntos/Arte/Puerto Massali.jpg"
banner_x: 0.5
banner_y: 0.3
---


> [!infobox| left]
> # Información General
> |Rasgo | Valor |
> | --- | --- |
> | Tematica | `=this.tematica`|
>  | Nivel económico | `=this.economia` |
> |  Nivel de peligro: | `=this.peligro` |
> | Tipo de localización | `=this.tipo` |
> | Ubicado en | `=link(this.ubicacion)` |
> ## Monstruos
| Raza/Monstruos | Numero |
| -------------- | ------ |
| #todo          | #todo  |
| **Total**      |        |
<!-- TBLFM: @>$2=sum(@I..@-1) -->
## Descripción
`=this.descripcion`
### Clima
`=this.clima`
### Ecología
`=this.ecologia`
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
WHERE contains(ubicacion, "<%tp.file.title%>")
SORT Posicion
```
## NPCs
```dataview
table Rango, Alineamiento, objetivo as "Objetivo", Faccion, Profesión
FROM #NPC
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
