---
motivacion: Ganar pasta 
ubicaciones: 
- Islas Shamal
- Ust Natha
- Bolgog
- La dríada descortés
Estructura: Celulas organizadas 
Alineamiento: N
Cita: "De algo hay que ganarse la vida"
Descripcion: "El gremio de aventureros es una organización encargada de poner en contacto a patrones con grupos de avenuteros. La organización siempre encarga a aquellos miembros nuevos misiones de prueba para comprobar la valia de los distintos grupos. La reputación del gremio es algo importante para su existencia por lo cual intentan asegurarse de que los encargos salgan bie. **La sede de este gremio en las  [[Islas Shamal]] se encuentra en [[Puerto Kalabor]]**"
Tipo_organizacion: Gremio
Historia: El gremio de aventureros surjio en el año 24 DM. Tras [[La guerra del mar]] muchos soldados se vierons sin trabajo. Por ello la [[Mancomunidad del Viento]] realizo una gran inversión en esta asociación. Contratandola para liberar zonas infestadas de demonios como en el Norte de la [[Isla de Adur]] o como escolta de los barcos mercantes. Cabe destacar que esta **no es una organización política** el hecho de que cualquiera dirgientes tome partido en conflictos de este punto conlleva la expulsión de estos
Nivel_de_influencia: Bajo
Alcance_de_influencia: Global
Camapaña: 
Tags: 
- faccion 
- Aretries 
- Islas Shamal
- Puerto Kalabor
---

> [!infobox|left]
>  # Gremio de aventureros
> ![[Gremio aventureros.jpg| cover hsmal]]
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
WHERE contains(faccion, "Gremio de aventureros")
```
