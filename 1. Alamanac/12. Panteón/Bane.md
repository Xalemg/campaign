---
Tags:
 - "deidad"
 - "IslasShamal"
 - "Aretries"
Tipo: "Deidad"
Dominios: "Guerra, Orden"
Alineamiento: "LM"
Seguidores: "Hombre nobles con poco apego por el rey de Altalos y mercaderes con pretensiones de progresar y pocos escrupulos"
Prohibido: "Si"
Usado-en: "Chumipower"
Usado_en: "Chumipower"
Descripcion: "Musculado y enorme individuo de piel oscura, pequeños cuernos asoman por su cabeza y barbilla.	"
Simbolo: "Mano Negra"
Historia: "Antes de El ultimo dia de los dioses mato a Haduuz el campeon de Mielikki y lo convirtio en su capitan, logrando asi que acabara con su antuga deida"
ubicaciones: "Altalos"
Tipo_deidad: "Deidad menor"
---
> [!infobox|left]
>  #### Bane
> ![[Bane.jpg|cover]]
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
![[hand bane.webp|cover]]

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
