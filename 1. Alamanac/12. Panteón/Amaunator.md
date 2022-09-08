---
Tags:
 - "deidad"
 - "IslasShamal"
 - "Aretries"
 - "Aumaunator"
Tipo: "Deidad"
Dominios: "Vida, Paz"
Alineamiento: "LB"
Seguidores: "Elfos y gnomos pacifistas sobretodos aquellos pertenecientes a Tawdryhyde"
Prohibido: "No"
Usado-en: "Chumipower"
Descripcion: "El avatar de Amaunator, cuya piel desprendía una luz dorada, tenía el aspecto de un hombre larguirucho, de pelo blanco plateado y largo, con una barba blanca tendida, vestido con un traje largo y fluido, negro o morado, con adornos plateados o dorados, el uniforme de un magistrado.	"
Simbolo: "Sol dorado"
Objetivo: "Encontrar alguna forma de recuperar la paz tras la ruptura de las cadenas."
ubicaciones: "Tawdryhide"
Tipo_deidad: "Deidad Superior"
Usado_en: "Chumipower"
---
> [!infobox|left]
>  #### Amaunator
> ![[Amaunator.jpg|cover ]]
> ######   
> |Rasgo | Valor |
> | --- | --- |
> | Alineamiento | `=this.alineamiento`|
> | Dominios | `=this.dominios` |
> | Tipo deidad | `=this.tipo_deidad` |
> | Titulos | `=this.titulos` |
>  | Lugares  importantes| `=link(this.ubicaciones)` |
> |Simbolo| `=this.simbolo`|
> 
![[Amaunator.webp|cover]]

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
WHERE contains(parte_de, "Amaunator")
SORT fecha
```
## Objetivo
   `=this.objetivo`

## Notas
