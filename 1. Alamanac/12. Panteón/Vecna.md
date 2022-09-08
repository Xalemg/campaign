---
Tags:
 - "deidad"
 - "IslasShamal"
 - "Aretries"
 - "Vecna"
Tipo: "Deidad"
Dominios: "Arcano, Muerte, Conocimiento"
Alineamiento: "CM"
Seguidores: "Eruditos sin moral que buscan conocimientos perdidos"
Prohibido: "Si"
Usado_en: "Chumipower"
Usado-en: "Chumipower"
Descripcion: "Vecna tiene aparaiencia de lich. Le falta un ojo y la mano, mientras que el derecho brilla con una luz verde intensa."
Historia: "Vecna fue un lich antaño humano de Oerth que ascendió a la divinidad Su comandante se llamaba Kas"
Simbolo: "Mano y ojo"
Tipo_deidad: "Deidad menor"
---
> [!infobox|left]
>  #### Vecna
> ![[Vecna_AFRT.jpg|cover]]
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
![[Vecna_symbol.webp|cover]]

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
