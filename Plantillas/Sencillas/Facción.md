---
motivacion: 
ubicaciones:
 - 
Estructura: 
Alineamiento: 
Cita: 
Tipo_organizacion: 
Historia: 
Nivel_de_influencia: 
Alcance_de_influencia: 
Camapaña:
Tags:
 - faccion
Descripcion: |
 
---
> [!infobox|left]
>  # <% tp.file.title%>
> ![[facciones 2.png| cover hsmal]]
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
### Eventos
```dataview
table descripción as Descripción, fecha as Fecha
FROM #evento
WHERE contains(parte_de, "<%tp.file.title%>")
SORT Posicion
```

___

## Miembros

```dataview
table rango, alineamiento, objetivo , profesión, ubicaciones
FROM #NPC
WHERE contains(faccion, "<%tp.file.title%>")
```
