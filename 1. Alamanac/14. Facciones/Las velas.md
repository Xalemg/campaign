---
Camapaña: Chumipower
Tags: faccion, Aretries, Ciudades Libres de Adur
Tipo: faccion
cssclass: kanban
Tipo_organizacion: Partido Politico
motivacion: Aumentar la prosperidad de Adur, Avaricia
Cita: Al progreso y la libertad se llega cambiando monedas de mano
ubicaciones: Adur
Descripcion: Las velas trabajan por incrementar el comercio y cuidar la economía de las ciudades. A nivel nacional, su ambicion se traduce en incrementar el control comercial sobre los imperios del Amanecer y Atardecer y asegurar las rutas de los mares de sangre.
Estructura: Democratica, Meritocrata
Alineamiento: LN
Nivel_de_influencia: Alta
Alcance_de_influencia: Regional
---

> [!infobox|left]
>  #
> ![[Las velas.png| cover hsmal]]
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
WHERE contains(faccion, "Las velas")
```