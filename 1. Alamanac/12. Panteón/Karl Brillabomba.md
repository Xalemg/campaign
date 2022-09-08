---
Tags:
 - "deidad"
 - "IslasShamal"
 - "Aretries"
Tipo: "Deidad"
Dominios: "Forja, Conocimiento"
Alineamiento: "NB"
Seguidores: "Magos, Alquimistas, Artificieros e ingenieros sobretodo gnomos y enanos"
Prohibido: "No"
Usado_en: "Chumipower"
Descripcion: "Karl Brillabomba es representado por un gnomo de de pelo cano y rasgos afilados. Suele ser representado con muchos de sus inventos en la mano o junto a ellos."
Historia: "Sus diseños fueron capaces de cerrar numerosas de las grietas durante [[El ultimo dia de los dioses]] "
Tipo_deidad: "Semidios"
Simbolo: "D20"
ubicaciones: "Puerto Kalabor"
Objetivo: "Crear los Spelljamers"
---
> [!infobox|left]
>  #### Karl Brillabomba
> ![[Karl Brillabomba.png|cover]]
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
![[Karl.jpg|cover]]

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
