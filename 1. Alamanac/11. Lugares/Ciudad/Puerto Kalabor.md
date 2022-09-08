
---
Tags:  
Mundo: 
Tipo: 
banner_x: 
Usado_en: 
ubicacion: 
banner_y: 0.3
tematica:
 - Politica
 - Desigualdad
 - 
economia: 
peligro: Medio
descripcion:  |
           La mayor ciudad de las Islas con casi 4 millones de habitantes y la principal parada de La Ruta del Shamal es un punto de encuentro de todas las culturas y razas de las Islas y fuera de ellas. A pesar de no existir el título como tal muchos la consideran la capital de la Mancomunidad por encontrarse allí el palacio del Emir.
                         
clima:  Oceanico, Inviernos y veranos suaves, con gran cantidad de lluvias
historia:  |
           Enanos y gnomos colaboraron para construir un enorme canal a traves de la [[Isla de Adur]] lo cual convirtio la ciudad en la mayor metropolis de [[Aretries]] #todo
            
comercio:
defensas:
religion: 
banner: "![[Kalabor 2.jpg]]"
banner_y: 0
---
> [!infobox| left]
> # Puerto Kalabor
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
id: Puerto Kalabor
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
WHERE contains(ubicacion, "Puerto Kalabor")
SORT Posicion
```
## NPCs
```dataview
table Rango, Alineamiento, objetivo as "Objetivo", Faccion, profesión AS "Profesión"
FROM #NPC
WHERE contains(ubicaciones, "Puerto Kalabor")
SORT Posicion
```
## Facciones

```dataview
table Tipo_organizacion as "Tipo de Organización", motivacion, Alineamiento, Nivel_de_influencia as "Nivel de Influencia",  Alcance_de_influencia as "Alcance de Influencia" 
FROM #faccion 
WHERE contains(ubicaciones, "Puerto Kalabor")
SORT Posicion
```

## NPCs
```dataview
table Razas, Rasgos_distintivos AS "Rasgos Distintivos", Alineamiento , Valores
FROM #Cultura
WHERE contains(ubicacion, "Puerto Kalabor")
SORT Posicion
```

# Puerto Kalabor

