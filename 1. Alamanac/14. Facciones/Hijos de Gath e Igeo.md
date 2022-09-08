---
motivacion: sobrevivir
ubicaciones:
 - Bolgog 
Estructura: Tribal
Alineamiento: NB
Cita: Mientras no te acerques a un drow podremos cuidar de ti
Tipo_organizacion: Tribo
Historia: |
 Son los supervivientes de los guerreros de los dragones metalicos, su historia se ha perdido en el tiempo pero la bendición que obtuvieron de [[Bahamut]] aun persiste
Nivel_de_influencia: Diminuto
Alcance_de_influencia: Ninguno
Camapaña: Chumipower 
Tipo: faccion 
Tags:
 - faccion
Descripcion: |
 Tribu dispersa que se encontraba en el norte de Bolgog. 
---
> [!infobox|left]
>  # Hijos de Gath e Igeo
> ###
> |Rasgo | Valor |
> | --- | --- |
> | Alineamiento | `=this.Alineamiento`|
> | Estructura | `=this.Estructura` |
> | Tipo de organizacion | `=this.Tipo_organizacion` |
>  | Alcance de influencia| `=this.Alcance_de_influencia` |
>  | Nivel de influencia| `=this.Nivel_de_influencia` |
>  | Lugares  importantes| `=link(this.ubicaciones)` |


## Descripción
`=this.Descripcion`
## Motivación
`=this.motivacion`
## Cita
`=this.cita`
## Historia
`=this.historia`
### Eventos
```dataview
table descripción as Descripción, fecha as Fecha
FROM #evento
WHERE contains(parte_de, "Hijos de Gath e Igeo")
SORT Posicion
```

___

## Miembros

[[Kiera]]
```dataview
table rango, alineamiento, objetivo , profesión, ubicaciones
FROM #NPC
WHERE contains(faccion, "Hijos de Gath e Igeo")
```
