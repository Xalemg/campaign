---
motivacion: Desbancar a la[[Casa Despana]] y asegurar su posición como la segunda casa de [[Ust Natha]]
ubicaciones:
 - Ust Natha
 - [[Adrith]]
Estructura: Jerarquica 
Alineamiento: CM
Cita: Comerciando puedes ganar mucha confianza, sufieciente incluso para que se sorprendan cuando les apuñales por la espalda
Tipo_organizacion: Familia
Historia: La casa se alzo entre las menores por medio del comercio, son los principales promotores del crecimiento economico de [[Ust Natha]]
Nivel_de_influencia: Alto
Alcance_de_influencia: Medio
Camapaña: Chumipower 
Tags:
 - faccion
Descripcion: |
 Segunda casa más importante de [[Ust Natha]] y tercer de [[Adrith]] tienen bastante sedes por distintas ciudades drows. Su extrategia de expansión esta dando sus frutos aunque debido a su enfoque mas economico y menos comercial han pasado desapercibidos a numerosas casas. En su lugar prefieren el uso de mercenarios para tramar sus planes.
 
---
> [!infobox|left]
>  # Casa Laudrez
> ![[Casa Laudrez.png| cover hsmal]]
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
WHERE contains(parte_de, "Casa Laudrez")
SORT Posicion
```

___

## Miembros
```dataview
table rango, alineamiento, objetivo , profesión, ubicaciones
FROM #NPC
WHERE contains(faccion, "Casa Laudrez")
```
 **Madre matrona**: Fernalia Laudrez 
 **Patron**:  Mirfalar Laudrez
 **Mago Principal**: Arannis Laudrez 
