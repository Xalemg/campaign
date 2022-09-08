---
Faccion: 

usado-en: 

genero: 
raza: 
rango: 
alineamiento: 
profesión: 
edad: 
distintivo: 
personalidad: 
ideal: 
vinculo: 
defecto: 
historia: 
objetivo: 
tags:
 - NPC
ubicaciones:
 - 
interpretacion: 
muerto: 
---

> [!infobox|left]
>  #### <% tp.file.title%>
> ![[NPC.jpg|cover]]
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
WHERE contains(parte_de, "<%tp.file.title%>")
SORT fecha
```
 ##  Objetivo
   `=this.objetivo`
   
___
   ## Notas

```statblock
monster: Commoner
name: <%tp.file.title%>
```