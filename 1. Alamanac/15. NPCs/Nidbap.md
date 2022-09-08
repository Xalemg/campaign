---
Tipo: NPC
Faccion: Iglesia de la luz
usado-en: Chumipower
Tags: 
edad: 85
rango: Lider de la iglesia
raza: Gnomo
alineamiento: LB
profesión: Lider de la iglesia
genero: Mujer
actualizado: 1
interpretacion: Pequeña y alegre como un hada
distintivo: Lleva una extraña bola de cristal con un fuego dentro
personalidad: Empatica y comprensiva
ideal: La paz nace del interior de cada uno de nosotros
vinculo: Su iglesia y su gente
defecto: Falta de confianza
historia: Fue educada por [[Nambra Genbella]] cuando era niña. Trabajo como panadera hasta la muerte de sus padres. Momento en el que comprendio que su vocación es dar a los demas. Durante el ataque su familia murio.
objetivo: Parar la ira que siente mucha gente hacia ellos
tags:
 - NPC
 - IslasShamal
 - Aretries/Adur
 - Iglesia de la Luz
ubicaciones:
 - Kalithir
muerto: no
---
> [!infobox|left]
>  #### Nidbap
> ![[Nidbap.jpg|cover]]
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
### Eventos
```dataview
table descripción as Descripción, fecha as Fecha
FROM #evento
WHERE contains(NPCs, "Nidbap")
SORT fecha
```
##  Objetivo
   `=this.objetivo`

   
___
   ## Notas

```statblock
monster: Priest
hp: 63
hit_dice: 14d8
ac: 14
name: Nidbap
```