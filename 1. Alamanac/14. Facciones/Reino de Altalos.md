---
Camapaña: Chumipower
Tags:
 - faccion
 - Aretries/Altalos
 - Islas Shamal
Tipo: faccion
cssclass: kanban
motivacion: Mantener la paz y la lealtad y superar su pasado
ubicaciones: Isla de Altalos
Tipo_organizacion: Reino
Descripcion: El principal reino humano de todas las Islas, es el segundo mayor poder militar y político de la Mancomunidad. Gobernado por la familia Altalos, su historia se encuentra llena de revueltas Nobles, campesinas y opresión por la corona. Tras la muerte de su hermano mayor, el actual Rey Kemdal parece haber roto con las anteriores aspiraciones totalitarias de su padre, lo que ha provocado que muchos de sus antiguos aliados le retiren su apoyo y se encuentre en una posición delicada en la que necesita ganar el apoyo de aquellos Nobles que hace apenas unas décadas su padre pretendía eliminar.
Cita: Es hora de poner a Altalos a la Altura de Adur
actualizado: 1
Alineamiento: LB
Estructura: Monarquia
Nivel_de_influencia: Alta
Alcance_de_influencia: Regional
---

> [!infobox|left]
>  #
> ![[generica.svg| cover hsmal]]
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

___

### Miembros

```dataview
table rango, alineamiento, objetivo , profesión, ubicaciones
FROM #NPC
WHERE contains(faccion, "Reino de Altalos")
```
