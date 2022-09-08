---
Tags:
 - "deidad"
 - "IslasShamal"
 - "Aretries"
Tipo: "Deidad"
Dominios: "Magia"
Alineamiento: "N"
Seguidores: "Magos y estudiosos de la magía arcana"
Prohibido: "No"
date_updated: "2021-12-08 03:19"
Usado-en: "Chumipower"
Usado_en: "Chumipower"
Simbolo: "Un hilo vertical con tres lunas de fondo"
Tipo_deidad: "Deidad Superior"
---
> [!infobox|left]
>  #### Mystra
> ![[Mystra.jpg|cover]]
> ######   
> |Rasgo | Valor |
> | --- | --- |
> | Alineamiento | `=this.alineamiento`|
> | Dominios | `=this.dominios` |
> | Tipo deidad | `=this.tipo_deidad` |
> | Titulos | `=this.titulos` |
>  | Lugares  importantes| `=link(this.ubicaciones)` |
> |Simbolo| `=this.simbolo`|
>### Simbolo
![[Mystral.svg|cover]]

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
