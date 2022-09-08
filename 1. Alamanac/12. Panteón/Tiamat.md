---
Tags:
 - "deidad"
 - "IslasShamal"
 - "Aretries"
Tipo: "Deidad"
Dominios: "Engaño"
Alineamiento: "CM"
Seguidores: "Dragones cromáticos, draconidos malvados y cultistas"
Prohibido: "Si"
Usado_en: "Chumipower"
Descripcion: "Tiamat era un dragón cromático único, que tenía una cabeza para cada color primario de las especies cromáticas más comunes (negro, azul, verde, rojo, blanco). Cada cabeza podía operar de forma completamente independiente entre sí y tenía los poderes de un miembro de la raza respectiva de los dragones. Su cuerpo también tenía rasgos en común con un wyvern, incluida una cola larga con un aguijón venenoso en la punta."
Simbolo: "5 cabezas de dragones cromáticos en circulo"
Tipo_deidad: "Deidad menor"
Objetivo: "Acabar con [[Bahamut]]"
Titulos:
 - "La reina dragon"
 - "La reina del caos"
 - "La maldición de Bahamut"
Historia: "Durante la guerra de los dioses Tiamat tuvo feroces encuentros contra Bahamut. Creo la [[La asamblea de los cinco colores]] para asegurarse que tras la guerra los grandes dragones acabaran con los hijos de Gath e Igeo ya que en ellos [[Bahamut invuyo su alma para de esta forma poder regresar tras su muerte"
ubicaciones:
- [[Asamblea de los cinco colores]]
---
> [!infobox|left]
>  #### Tiamat
> ![[tiamat.jpg|cover]]
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
![[Tiamat.png|cover]]

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
