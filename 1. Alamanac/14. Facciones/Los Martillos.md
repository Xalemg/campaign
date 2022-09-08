---
Camapaña: Chumipower
Tags: faccion, Aretries, Ciudades Libres de Adur
Tipo: faccion
cssclass: kanban
Tipo_organizacion: Partido Politico
ubicaciones: Adur
motivacion: Aumentar la seguridad, expansionismo
Cita: Las ciudades de esta isla se construyeron a golpe de martillo y solo los martillos son capaces de guardarla.
Nivel_de_influencia: Media
Alcance_de_influencia: Regional
Historia: Los martillos siempre han velado por los intereses militares de las Islas
Estructura: Oligarquica
Alineamiento: LN
Tipo de organizacion: Partido político
Descripcion: Los martillos buscan solucionar los problemas mediante el poder militar. Buscan establecer un ejercito propio para garantizar la seguridad y expandir el control en el Norte de la Isla.
---

> [!infobox|left]
>  #
> ![[Los martillos.jpg| cover hsmal]]
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
WHERE contains(faccion, "Los Martillos")
```
