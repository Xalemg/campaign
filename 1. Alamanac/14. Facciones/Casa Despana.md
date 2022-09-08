---
motivacion: Llevar a los Dows de vuelta a la superficie
ubicaciones:
 - Infraoscuridad
 - Ust Natha
Estructura: Matriarcal
Alineamiento: CM
Cita: La bendicion de [[Lolth]] no tiene precio
Tipo_organizacion: Casa Drow
Historia: 
Nivel_de_influencia: Media
Alcance_de_influencia: Regional
Camapaña:
 - Chumipower
Tags:
 - faccion
 - Drow
 - Infraoscuridad
 - Ust Natha
Descripcion: " **Madre matrona**: Phaere Despana   **Patron**: Qilue Despana   **Mago Principal**: Malavon Despana   **Maestro de armas**: Alton Despana  La Casa Despana es una casa noble drow con sucursales en muchas ciudades drow de la [[Infraoscuridad]]. La rama más grande se encuentra en Ust Natha, pero hay alrededor de media docena de otras ramas. La casa está dirigida por la madre matrona Phaere Despana, que mató a su madre para hacerse cargo de la casa hace más de un siglo. Cuenta con la ayuda de un poderoso archimago llamado Malavon, que se unió a ella hace unos años cuando su rama de Despana se vio obligada a abandonar la ciudad drow de Rilauven."
---

> [!infobox|left]
>  #
> ![[Casa Despana.webp| cover hsmal]]
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
WHERE contains(faccion, "<%tp.file.title%>")
```
