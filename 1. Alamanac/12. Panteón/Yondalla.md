---
Tags:
 - "deidad"
 - "IslasShamal"
 - "Aretries"
Tipo: "Deidad"
Dominios: "Vida, Fertilidad"
Alineamiento: "LB"
Seguidores: "Principalemente medianos y pacifistas de Ronco, Granjeros y gente de campo."
Prohibido: "No"
Usado_en: "Chumipower"
Usado-en: "Chumipower"
Descripcion: "Suele ser representada como una mediana con un gran escudo"
Simbolo: "Cornucopia en un escudo"
Tipo_deidad: "Deidad menor"
ubicaciones: "Roncor"
---
> [!infobox|left]
>  #### Yondalla
> ![[Yondallajpg.jpg|cover]]
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
![[Yondalla_symbol.webp|cover]]

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

## Notas
