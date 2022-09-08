---
Tags:
 - "deidad"
 - "IslasShamal"
 - "Aretries"
Tipo: "Deidad"
Dominios: "Forja, Conocimiento"
Alineamiento: "LB"
Seguidores: "Herreros e historiadores, especialmente enanos."
Prohibido: "No"
Usado_en: "Chumipower"
Usado-en: "Chumipower"
Descripcion: " Juez severo pero justo, era la fuerza de voluntad encarnada. Inspiró los inventos de los enanos y trató constantemente de mejorar su raza, fomentando una existencia bondadosa, inteligente y armoniosa con otras razas buenas, al tiempo que luchaba contra su orgullo y sus tendencias aislacionistas."
Tipo_deidad: "Deidad Superior"
Simbolo: "Martillo y yunque"
Objetivo: " Juez severo pero justo, era la fuerza de voluntad encarnada. Inspiró los inventos de los enanos y buscó constantemente la mejora de su raza, fomentando una existencia bondadosa, inteligente y armoniosa con otras razas buenas, al tiempo que luchaba contra su orgullo y sus tendencias aislacionistas."
Historia: "Según los mitos enanos, Moradin se encarnó en la roca, la piedra y el metal, y su alma era una brasa de fuego. Se decía que forjó a los primeros enanos a partir de metales y gemas y que les insufló alma cuando sopló sobre sus creaciones para enfriarlas. Moradin fue el responsable de desterrar a los dioses malignos de los derro y duergar de la superficie."
---
> [!infobox|left]
>  #### Moradin
> ![[Moradin.png|cover]]
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
![[moradin symbol.webp|cover]]

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
