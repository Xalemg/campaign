---
motivacion: Destruir los dragones metalicos
ubicaciones: Embajada de los cinco colores
Estructura: Pequeña asamblea
Alineamiento: NM
Cita: Cuando los dragones plateados hayan desaparecido encontraremos la paz que merecemos
Tipo_organizacion: Asamblea
Historia: |
 La asamblea de los cinco colores era una organización liderada por [[Tiamat]] con el objetivo de acabar con los dragones metalicos de Gath e Igeo. Tras pensar que habian acabado con todos los huevos y dragones la asamblea se disolvio.
 Hace 1600 años tras lo que la La asamblea de los cinco colores considero que era el final de las perlas años aqui se acordo el pacto del aguijon, por el cual los los drows de [[Ust Natha]] se comprometia a acabar con los hijos de Gath e Igeo.
 #### El pacto del Aguijon
 El pacto del Aguijon fue el acuerdo por el cual los Drows se comprometen a acabar con
 #### Tiempos modernos
 Pensando que las piedras habian sido destruidas y que los hijos de Gath e Igeo morirían a manos de los Drows, la asamblea decidio cazar a los dragones metalicos. Aunque la ambición con el tiempo poco a poco se fue extingiendo
Nivel_de_influencia: Secreta
Alcance_de_influencia: interplanar
Camapaña:
 - Chumipower
Tags:
 - faccion
 - Interplanar
Descripcion: 
---

> [!infobox|left]
>  #
> ![[Tiamat.png| cover hsmal]]
> ###
> |Rasgo | Valor |
> | --- | --- |
> | Alineamiento | `=this.Alineamiento`|
> | Estructura | `=this.Estructura` |
> | Tipo de organizacion | `=this.Tipo_organizacion` |
>  | Alcance de influencia| `=this.Alcance_de_influencia` |
>  | Nivel de influencia| `=this.Nivel_de_influencia` |
>  | Lugares  importantes|  `=link(this.ubicaciones)`  |


## Descripción
`=this.Descripcion`
## Motivación
`=this.motivacion`
## Cita
`=this.cita`
## Historia
`=this.historia`

___

### Miembros

```dataview
table rango, alineamiento, objetivo , profesión, ubicaciones
FROM #NPC
WHERE contains(faccion, "La asamblea de los cinco colores")
```
