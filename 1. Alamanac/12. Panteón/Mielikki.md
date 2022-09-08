---
Usado-en: "Chumipower"
Tags:
 - "deidad"
 - "IslasShamal"
 - "Aretries"
 - "muerto"
tipo: "Deidad"
dominios: "Naturaleza"
alineamiento: "NB"
seguidores: "Amantes de la naturaleza que idolatran los días pasados. Quedan pocos."
prohibido: "No"
Alineamiento: "NB"
Usado_en: "Chumipower"
Dominios:
 - "Naturaleza"
Prohibido: "No"
Simbolo: "Unicornio dorado"
Historia: "Durante la época de El mundo antiguo Murió traicionada por su mayor campeón Hazduul después de que este se enfrentara a el."
Tipo_deidad: "Deidad menor"
Seguidores: "Amantes de la naturaleza que idolatran los días pasados. Quedan pocos"
Descripcion: "El avatar preferido de Mielikki era el de guardabosques suprema, en el que aparecía como una mujer alta de complexión robusta y torneada y de gracia ágil. Se movía con el resorte de un ciervo que salta y la facilidad de una pantera que merodea."
ubicaciones:
 - "Palacio de las flores"
---
> [!infobox|left]
>  #### Mielikki
> ![[Mielikki.jpg|cover]]
> ######   
> |Rasgo | Valor |
> | --- | --- |
> | Alineamiento | `=this.alineamiento`|
> | Dominios | `=this.dominios` |
> | Tipo deidad | `=this.tipo_deidad` |
> | Titulos | `=this.titulos` |
>  | Lugares  importantes| `=link(this.ubicaciones)` |
> |Simbolo| `=this.simbolo`|
>  ## Simbolo
![[NPC.jpg|cover]]

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
WHERE contains(parte_de, "<%tp.file.title%>")
SORT Posicion
```
## Objetivo
   `=this.objetivo`

## Notas
