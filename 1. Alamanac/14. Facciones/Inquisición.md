---
motivacion: Acabar con las religiones prohibidas
ubicaciones: Islas Shamal
Estructura: Jerarquica
Alineamiento: LN
Cita: Brujas y cultistas son como una plaga. Somos el fuego que mantiene la plaga a raya
Tipo_organizacion: Orden
Historia: 
Nivel_de_influencia: Media
Alcance_de_influencia: Regional
Camapaña:
 - Chumipower
Tags:
 - faccion
 - Aretries
 - Islas Shamal
Descripcion: 
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
WHERE contains(faccion, "Inquisición")
```
