---
Tags:
 - "deidad"
 - "IslasShamal"
 - "Aretries"
Tipo: "Deidad"
Dominios: "Tempestad, Guerra"
Alineamiento: "CN"
Seguidores: "Orcos guerreros y cazadores que le adoran por su fuerza. Shamanes y marineros que buscan su permiso en la navegación"
Prohibido: "Si"
Usado-en: "Chumipower"
Usado_en: "Chumipower"
Descripcion: "Gruumsh normalmente aparece como un orco corpulento de 3 metros de altura cubierto de cicatrices de batalla y vestido con una armadura de malla de placas negra y reluciente. Tiene solo el ojo derecho con una cuenca vacia en el izquierdo."
Simbolo: "Ojo"
Tipo_deidad: "Deidad Superior"
ubicaciones: "Bolgog"
---
> [!infobox|left]
>  #### Gruumsh
> ![[Gruumsh.jpg|cover]]
> ######   
> |Rasgo | Valor |
> | --- | --- |
> | Alineamiento | `=this.alineamiento`|
> | Dominios | `=this.dominios` |
> | Tipo deidad | `=this.tipo_deidad` |
> | Titulos | `=this.titulos` |
>  | Lugares  importantes| `=link(this.ubicaciones)` |
> |Simbolo| `=this.simbolo`|

> [!infobox|right]
>### Simbolo
![[Gruumsh_symbol.webp|cover]]

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
