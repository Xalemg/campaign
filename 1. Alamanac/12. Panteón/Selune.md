---
Tags:
 - deidad
 - IslasShamal
 - Aretries
 - Drow
Tipo: Deidad
Dominios: Sabiduria, Vida, Crepusculo
Alineamiento: CB
Seguidores: 
Prohibido: Si
Usado-en: Chumipower
Usado_en: Chumipower
Tipo_deidad: Deidad menor
ubicaciones:
 - Bajo Volcan
Simbolo: Par de ojos rodeados de siete estrellas
Descripcion: También conocida como Nuestra Señora de la Plata, la Doncella de la Luna y la Dama Blanca de la Noche. Al igual que los ciclos de la luna, Selûne tenía muchos y cambiantes estados de ánimo y naturaleza. Sus fieles, procedentes de muchos ámbitos, la veían de innumerables maneras diferentes
---
> [!infobox|left]
>  #### Selune
> ![[Selune.jpg|cover]]
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
![[Selune_symbol.webp|cover]]

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
