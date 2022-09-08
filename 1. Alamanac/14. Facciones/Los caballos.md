---
Camapaña: Chumipower
Tags: faccion, Aretries, Adur
Tipo: faccion
cssclass: kanban
Tipo_organizacion: Partido Politico
motivacion: Vuelta a la naturaleza, Busqueda de la sencillez
Estructura: Democratica
Alineamiento: N
Cita: Si no volvemos a encontrar nuestro camino, nunca llegaremas a nuestro destino
ubicaciones: Adur
Descripcion: Partido formado por los seguidores de Adur. Proponen un regreso a una vida rural, más cercana a la naturaleza.
Nivel_de_influencia: Baja
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
WHERE contains(faccion, "Los caballos")
```

