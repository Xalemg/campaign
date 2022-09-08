---
Tags:
 - "deidad"
 - "IslasShamal"
 - "Aretries"
Tipo: "Deidad"
Dominios: "Vida, Guerra"
Alineamiento: "LB"
Seguidores: "Principalmente dragones metálicos y draconidos"
Prohibido: "No"
Usado_en: "Chumipower"
Historia: "Bahamut fue el primer padre. El junto a Tiamat crearon a los dragones a su imagen y semejanza. Tras la creación del resto de razas por el resto de los dioses, provocó la división entre ellos. Bahamut pensaba que los dragones debían compartir Aretries con el resto de razas mientras que Tiamat quería acabar con el resto de los Dioses. Bahamut tras ver que Tiamat enviaba ordenaba a los dragones cromáticos a aniquilar a los metálicos, creo las Perlas del Alma. Estas permitían a los dragones escapar."
Simbolo: "Cabeza de un dragón plateado"
Descripcion: "n su forma natural, Bahamut era un enorme dragón de aproximadamente 55 m (180 pies), con una cola de la misma longitud que su cuerpo[6], con escamas de platino más resistentes que cualquier escudo[34] (algunos dicen que son prácticamente indestructibles) que brillaban con un tenue resplandor azul[35], y ojos azules, cuyo color exacto era difícil de especificar y podía depender del estado de ánimo de Bahamut. [Como Xymor, se le describía como un enorme dragón envuelto en un aura de luz tan brillante que era imposible distinguir su color."
Objetivo: "Proteger el legado de los dragones metalicos"
Tipo_deidad: "Deidad Superior"
---
> [!infobox|left]
>  #### Bahamut
> ![[Bahamut.webp|cover]]
> ######   
> |Rasgo | Valor |
> | --- | --- |
> | Alineamiento | `=this.alineamiento`|
> | Dominios | `=this.dominios` |
> | Tipo deidad | `=this.tipo_deidad` |
> | Titulos | `=this.titulos` |
>  | Lugares  importantes| `=link(this.ubicaciones)` |
> |Simbolo| `=this.simbolo`|
>### Simbolo
![[Bahamut_holy_symbol.webp|cover]]

## Descripcion
  `=this.descripción`

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
