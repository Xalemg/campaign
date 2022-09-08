---
Faccion: [[Casa Laudrez]]
usado-en: Chumipower 
genero: Mujer 
raza: Drow 
rango: Maestra de Armas
alineamiento: CM
profesión: Maestro de Armas
edad: 263
distintivo: Cara alargada de rasgos afilados
personalidad: cortante y borde
ideal: mi lengua es incluso mas rapida que mi espada
vinculo: El honor de mi casa es lo más importatne
defecto: Agresiva y temeraria
historia: Fue ascendida cuando su padre murio en el cargo en un asalto de la [[Casa Laudrez]] cuando intentaron asaltarla
objetivo: Su trabajo define su vida
tags:
 - NPC
ubicaciones:
 - Ust Natha
interpretacion: 
muerto: no
---

> [!infobox|left]
>  #### Faledrien
> ![[Faledrien.jpg|cover]]
> ######   
> |Rasgo | Valor |
> | --- | --- |
> | Alineamiento | `=this.alineamiento`|
> | Raza | `=this.raza` |
> | Edad | `=this.edad` |
> | Genero | `=this.genero` |
> | Profesión | `=this.profesión` |
> | Rango | `=this.rango` |
> | Faccion | `=link(this.faccion)` |
>  | Lugares  importantes| `=link(this.ubicaciones)` |

## Rasgos 
 `=this.distintivo`
  `=this.personalidad`
###  Interpretación
  `=this.interpretacion`
### Ideal           
 `=this.ideal`
### Vinculo 
 `=this.vinculo`
### Defecto
 `=this.defecto`
## Historia
 `=this.historia`

```dataview
table descripción as Descripción, fecha as Fecha
FROM #evento
WHERE contains(parte_de, "Faledrien")
SORT fecha
```
 ##  Objetivo
   `=this.objetivo`
   
___
   ## Notas

```statblock
monster: Commoner
name: Faledrien
```