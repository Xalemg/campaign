---
Camapaña: Chumipower
Tags: faccion, Aretries/Adur
Tipo: faccion
Tipo_organizacion: Mafia
Estructura: Celulas organizadas
Alineamiento: N
motivacion: Ganar pasta, muchos de sus miembros se unieron tras las hambrunas de la ciudad
ubicaciones: Kalithir
Cita: Si te lo dijera tendria que matarte
Historia: Los callizos tomaron el control del contrabando con la Infraoscuridad hace mas de 30 años cuando se asentaron en Kalithir y acabaron con el negocio de las dagas pegadizas
Nivel_de_influencia: Alta
Alcance_de_influencia: Local
---

> [!infobox|left]
>  #
> ![[Los callizos.jpg| cover hsmal]]
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
WHERE contains(faccion, "Los Callizos")
```