---
Tags:
 - deidad
 - Aretries
Tipo: Deidad
Dominios: 
Alineamiento: 
Seguidores: 
Prohibido: 
Usado_en: 
Descripcion:  |
           #todo
Historia: 
Simbolo: 
ubicaciones:
 - Aretries
Tipo_deidad: 
Objetivo: 
Titulos: 
---
> [!infobox|left]
>  #### <% tp.file.title%>
> ![[Deida.jpg|cover]]
> ######   
> |Rasgo | Valor |
> | --- | --- |
> | Alineamiento | `=this.alineamiento`|
> | Dominios | `=this.dominios` |
> | Tipo deidad | `=this.tipo_deidad` |
> | Titulos | `=this.titulos` |
>  | Lugares  importantes| `=link(this.ubicaciones)` |
> |Simbolo| `=this.simbolo`|
>  ## Simbolo
![[simbolo sagrddo.jpg|cover]]

## Descripcion
  `=this.descripcion`

## Seguidores
  `=this.seguidores`
  
## Historia
  `=this.historia`
## Sub eventos
```dataview
table descripción as Descripción, fecha as Fecha
FROM #evento
WHERE contains(parte_de, "<%tp.file.title%>")
SORT Posicion
```
## Objetivo
   `=this.objetivo`
## Creyentes
```dataview
table rango, alineamiento, objetivo , profesión, ubicaciones
FROM #NPC
WHERE contains(fe, "<%tp.file.title%>")
```

## Notas
