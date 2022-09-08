---
motivacion: 
ubicaciones: 
- Ust Natha
- El pozo de los mil ojo
- Infraoscuridad 
Estructura: Jerarquica 
Alineamiento: CM
Cita: Una araña no puede 
Tipo_organizacion: Secreta
Historia: |
 Las tejedoras de la reina fueron fundadas en [[El Pozo de los 1000 ojos]]. Poco es conocido de su historia pero [[Lolth]] las creo para avanzar su agenda en una manera no lastrada por la política y llegar mas haya de sus dominios
Nivel_de_influencia: Media
Alcance_de_influencia: Alta
Camapaña: Chumipower 
Tags:
 - faccion 
Descripcion: |
 Las tejedoras de la reina son un pequeño grupo fanatico y paramilitar de arachnomancers que se encargan de llevar a cabo la voluntad de [[Lolth]] y han renunciado a su individualidad para conseguirlo. Todos ellos llevan extraños y diferentes tatuajes de araña en la cara 
---
> [!infobox|left]
>  # Las Tejedoras de la reina
> ###
> |Rasgo | Valor |
> | --- | --- |
> | Alineamiento | `=this.Alineamiento`|
> | Estructura | `=this.Estructura` |
> | Tipo de organizacion | `=this.Tipo_organizacion` |
>  | Alcance de influencia| `=this.Alcance_de_influencia` |
>  | Nivel de influencia| `=this.Nivel_de_influencia` |
>  | Lugares  importantes| `=link(this.ubicaciones)` |


## Descripción
`=this.Descripcion`
## Motivación
`=this.motivacion`
## Cita
`=this.cita`
## Historia
`=this.historia`
### Eventos
```dataview
table descripción as Descripción, fecha as Fecha
FROM #evento
WHERE contains(parte_de, "Tejedoras de la reina")
SORT Posicion
```

___

## Miembros

```dataview
table rango, alineamiento, objetivo , profesión, ubicaciones
FROM #NPC
WHERE contains(faccion, "Tejedoras de la reina")
```
