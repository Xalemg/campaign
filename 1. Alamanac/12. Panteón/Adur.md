---
Tags:
 - "deidad"
 - "IslasShamal"
 - "Aretries"
Tipo: "Deidad"
Tipo_deidad: "Deidad menor"
Dominios: "Naturaleza, Vida"
Alineamiento: "NB"
Seguidores: "Principalmente en Adur por aquellos que buscan defender la naturaleza."
Prohibido: "No"
Simbolo: "Cabeza de caballo blanco con crin dorada"
descripcion: "Solia manifestarse como un gran caballo de crines doradas"
historia: "Es el hijo de Mielikki, nacio del vientre de su madre tras ser asesinada por su antiguo caballero Hazduul"
Usado-en: "Chumipower"
ubicaciones: "Adur"
Descripcion: "Un caballo de pelo blanco inmaculado con una impreisonante crin de color dorado"
Objetivo: "Proteger la Naturaleza de las perversiones humanoides"
Usado_en: "Chumipower"
---
  > [!infobox|left]
>  #### Adur
> ![[Adur.jpg|cover]]
> ######   
> |Rasgo | Valor |
> | --- | --- |
> | Alineamiento | `=this.alineamiento`|
> | Dominios | `=this.dominios` |
> | Tipo deidad | `=this.tipo_deidad` |
> | Titulos | `=this.titulos` |
>  | Lugares  importantes| `=link(this.ubicaciones)` |
> |Simbolo| `=this.simbolo`|

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