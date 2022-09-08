---
tags:
 - evento
facciones:
 - La asamblea de los cinco colores
 - Tejedoras de la reina
fecha: 318 DM
ubicaciones:
 - Ust Natha
 - Embajada de los cinco colores
descripcion: El pacto del aguijon involucra a todos los miembros de [[La asamblea de los cinco colores]] decidierón otorgar la [[Llama del primer dragon]] a [[Ust Natha]] para ayudarles a crear armas capaces de matar a los dioses. A cambio los drows de [[Ust Natha]] deben encargarse de acabar con los [[Hijos de Gath e Igeo]]
relevancia: A nivel mundial
NPCs:
 - Mardrel Despana
 - Gran Dragón Girlarner
conocido: Conocido por muy  pocos
controversia: Evento aceptado por todos
parte_de:
Mundo: Aretries
usado_en:
 - Chumipower
---
> [!infobox|left]
>  # Pacto del aguijon
> |Rasgo | Valor |
> | --- | --- |
> | Fecha | `=this.fecha` |
> | Relevancia | `=this.relevancia` |
> | Ubicación | `=link(this.ubicaciones)` |
> | Conocido | `=this.conocido` |
> | controversia | `=this.controversia` |
>  | NPCs de relevancia| `=link(this.NPCs)` |
>  | Lugar del acontecimiento| `=link(this.ubicaciones)` |
>  | Parte de| `=link(this.parte_de)` |

## Descripción
 `=this.descripcion`
## Sub eventos
```dataview
table fecha as Fecha, facciones as Facciones , relevancia as "Relevancia", NPCs, ubicaciones as "Ubicaciones", conocido as Conocido,  controversia as Controversia, descripción as Descripción
FROM #evento
WHERE contains(parte_de, "Pacto del aguijon")
SORT fecha
```
