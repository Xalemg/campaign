---
Tags:
 - "deidad"
 - "IslasShamal"
 - "Aretries"
Tipo: "Deidad"
Dominios: "Orden, Guerra"
Alineamiento: "LB"
Seguidores: "Jueces y caballeros humanos que buscan poder para imponer el orden y hacer el bien"
Prohibido: "No"
Usado-en: "Chumipower"
Usado_en: "Chumipower"
Objetivo: "Tyr fue representado como ciego o con una venda ensangrentada sobre sus ojos y sin su mano derecha	"
Simbolo: "Balanza reposando sobre un martillo"
Descripcion: "Tyr fue representado como ciego o con una venda ensangrentada sobre sus ojos y sin su mano derecha	"
Titulos:
 - "El dios justo"
ubicaciones: "Altalos"
Tipo_deidad: "Deidad menor"
---
> [!infobox|left]
>  #### Tyr
> ![[Tyr.jpg|cover]]
> ######   
> |Rasgo | Valor |
> | --- | --- |
> | Alineamiento | `=this.alineamiento`|
> | Dominios | `=this.dominios` |
> | Tipo deidad | `=this.tipo_deidad` |
> | Titulos | `=this.titulos` |
>  | Lugares  importantes| `=link(this.ubicaciones)` |
> |Simbolo| `=this.simbolo`|

> [!infobox|right]
>### Simbolo
![[Tyr_symbol.webp|cover]]

## Descripcion
  `=this.descripción`

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

## Notas
