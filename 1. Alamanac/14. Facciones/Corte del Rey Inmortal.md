---
Camapaña: Chumipower
Tags: faccion, Aretries, Islas Shamal
Tipo: faccion
cssclass: kanban
Tipo_organizacion: Culto
Estructura: Celulas desorganizadas
Alineamiento: NM
motivacion: Conocimiento y poder. Obsesion por la figura de [[Vecna]].
ubicaciones: Islas Shamal
Cita: Puedo darte el secreto para que tu amor vuelva a la vida... pero entonces me lo debes. Eres mía.
Nivel_de_influencia: Secreta
Alcance_de_influencia: Global
---

> [!infobox|left]
>  #
> ![[Corte del Rey Inmortal.jpg| cover hsmal]]
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
WHERE contains(faccion, "Corte del Rey Inmortal")
```