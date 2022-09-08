---
tags: 
- evento
facciones:
- 
fecha:
ubicaciones: 
descripción: |
           #todo
relevancia: 
NPCs:
- 
conocido: 
controversia: 
parte_de:
Mundo:
Usado_en:
---
> [!infobox|left]
>  # <% tp.file.title%>
> |Rasgo | Valor |
> | --- | --- |
> | Fecha | `=this.fecha` |
> | Relevancia | `=this.relevancia` |
> | Ubicaciónes | `=link(this.ubicacion)` |
> | Conocido | `=this.conocido` |
> | controversia | `=link(this.controversia)` |
>  | NPCs de relevancia| `=link(this.NPCs)` |
>  | Lugar del acontecimiento| `=link(this.ubicaciones)` |
>  | Parte de| `=link(this.parte_de)` |

## Descripción
 `=this.descripcion`
## Sub eventos
```dataview
table descripción as Descripción, fecha as Fecha
FROM #evento
WHERE contains(parte_de, "<%tp.file.title%>")
SORT Posicion
```
