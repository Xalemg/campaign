---
Tags:  
- zona 
- Infraoscuridad 
- Chumipower 
- lugar
- Islas Shamal 
Mundo: Aretries 
Tipo: Zona 
banner_x: 
Usado_en: Chumipower 
ubicacion: [[Infraoscuridad]]
banner_y: 2
tematica:
 - Sigilo
 - Misterio
economia: 
peligro: Medio
descripcion: |
              Enorme Lago de varios Kms de longitud, en el centro de este gigantescas columnas de cientos de metros de diametro y cubiertas de hongos bioluminescentes llegan hasta la enorma cupula que cubre el techo del lago. Esta con frecuencia rodeado por una niebla cuya intensidad varia entre una molestia, o una densa y toxica nube que impide su transcurso. Pocos seres son capaces de sobrevivir el propio lago .
clima: El lago es una masa de agua bastante calida. La zona de su alrededor es bastante humeda lo cual hace incomoda estar en su proximidad
historia: |
            El lago de Natha se creo durante [[El ultimo dia de los dioses]], aqui Lolth fue destruida por [[Tyr]], aunque esto es algo que ya nadie conoce. Los Drows consideran que el lago esta envenenado por [[Lolth]] aunque en realidad esta envenenando por las expulsiones de la [[LLama del primer dragon]] 
comercio: Por aqui nace la principal ruta de contrabando con [[Kalithir]]
defensas: Existen patrullas Drows en barcos a traves de la niebla
religion: 
banner: "![[Edificio Ust Natha.png]]"
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
### Eventos
```dataview
table descripción as Descripción, fecha as Fecha
FROM #evento
WHERE contains(parte_de, "Lago Natha")
SORT Posicion
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
WHERE contains(ubicacion, "Lago Natha")
SORT Posicion
```
## NPCs
```dataview
table Rango, Alineamiento, objetivo as "Objetivo", Faccion, Profesión
FROM #NPC
WHERE contains(ubicacion, "Lago Natha")
SORT Posicion
```
## Facciones

```dataview
table Tipo_organizacion as "Tipo de Organización", motivacion, Alineamiento, Nivel_de_influencia as "Nivel de Influencia",  Alcance_de_influencia as "Alcance de Influencia" 
FROM #faccion 
WHERE contains(ubicaciones, "Lago Natha")
SORT Posicion
```
