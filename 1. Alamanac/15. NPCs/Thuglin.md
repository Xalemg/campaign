---
Faccion: N/A
usado-en: 
genero: N/A 
raza: Aboleth
rango: N/A
alineamiento: LM 
profesión: Tendero
edad: 24000
distintivo: |
 Aparenta una anguila extraña, con un largo y bular cuerpo , así como una cola en un extremo y dos aletas cerca de la cabeza y otra a lo largo de la espalda. La boca similar a la de una lamprea, llena de dientes dentados y sin mandíbula. Posee una tripa rosada y un dorso grisaceo oscuro
personalidad: Mercader engatusador
ideal: Dinero
vinculo: Su tienda
defecto: Amargado
historia: Ha viajado por toda la infraoscuridad, ha vivido en el plano del Agua
objetivo: obtener objetos raros
tags:
 - NPC
 - Aretries 
 - Chumipower 
ubicaciones:
 - Ust Natha 
 - Lago Natha
interpretacion: ladino 
muerto: no
---

> [!infobox|left]
>  #### Thuglin
> ![[Aboleth.jpg|cover]]
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
WHERE contains(NPCs, "Thuglin")
SORT Posicion
```
 ##  Objetivo
   `=this.objetivo`
   
___
   ## Notas

```statblock
monster: Aboleth
name: Thuglin
```