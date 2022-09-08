---
motivacion: Obtener poder de [[Orcus]]
ubicaciones: Aretries
Estructura: Individuos desorganizados
Alineamiento: CM
Cita: Seré la última criatura cuando termine. El cosmos será entonces perfecto, libre de las abominaciones rebuznantes que son todos los demás seres vivos.
Tipo_organizacion: Culto
Descripcion: 
Historia: 
Camapaña: Chumipower
Tags:
 - faccion
 - Aretries
 - Abismo
Nivel_de_influencia: Baja
Alcance_de_influencia: Global
---

> [!infobox|left]
>  #
> ![[orcus.png| cover hsmal]]
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
WHERE contains(faccion, "La sombra que fue")
```
