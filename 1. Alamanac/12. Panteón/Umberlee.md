---
Tags:
 - "deidad"
 - "IslasShamal"
 - "Aretries"
Tipo: "Deidad"
Dominios: "Tempestad, Venganza"
Alineamiento: "CM"
Seguidores: "Piratas y mercaderes no necesariamente malvados pero que temen la furia del mar"
Prohibido: "Si"
Usado-en: "Chumipower"
Usado_en: "Chumipower"
Tipo_deidad: "Deidad menor"
Simbolo: "Dos olas separandose"
Descripcion: "Umberlee era temperamental, malvada y maliciosa. No sentía la obligación moral de cumplir ninguno de sus acuerdos o promesas si el resultado final no era beneficioso para ella. Eso, y su deseo por los objetos de valor y los tributos excesivos, caracterizaban su insaciable codicia y crueldad. Estaba ávida de poder y le encantaba ejercerlo, jugando con sus adoradores.	"
---
> [!infobox|left]
>  #### Umberlee
> ![[Umberlee.webp|cover]]
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
![[Umberlee_symbol.webp|cover]]

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
