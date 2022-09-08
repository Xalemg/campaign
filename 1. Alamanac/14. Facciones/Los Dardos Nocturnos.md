---
Camapaña: Chumipower
Tags: faccion, Aretries, Kalithir
Tipo: faccion
cssclass: kanban
Tipo_organizacion: Mercenarios
ubicaciones:
 - Kalithir
 - Ust Natha
Estructura: Grupo con lider
Alineamiento: NM
Cita: Podemos conseguir lo que sea si puedes permitirtelo
motivacion: Dinero y renombre
Historia: Empezaron realizando pequeños atracos y robos en la infraoscurad y planean expandirse a la superficie
Nivel_de_influencia: Baja
Alcance_de_influencia: Regional
---

> [!infobox|left]
>  #
> ![[Dardos Nocturnos.png| cover hsmal]]
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
WHERE contains(faccion, "Los Dardos Nocturnos")
```