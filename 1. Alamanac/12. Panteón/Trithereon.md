---
Tags:
 - deidad
 - IslasShamal
 - Aretries
Tipo: Deidad
Dominios: Guerra
Alineamiento: CB
Seguidores: Humanos de Altalos. Prohibido por largo tiempo por cuestionar la autoridad del rey de Altalos. Gran numero de sus segidores se concentran en las zonas de conflicto.
Prohibido: Si
Usado-en: Chumipower
Usado_en: Chumipower
Descripcion: "Trithereon es representado como un hombre joven con el pelo rubio, alto y fornido, vestido con una camisa de cota de malla de oro con ropa de color azul o violeta. Está armado con tres armas mágicas: una espada llamada lengua de la Libertad; una lanza llamada Krelestro, el mensajero de la muerte; y un cetro conocido como el Baston de la Retribución	"
Historia: La fe en Trithereon surge de la llegada de los humanos a Altalos antes de [[El ultimo dia de los dioses]] que dejo la  Isla de Altalos a merced de las criaturas salvajes. En el dificultad de la dificultad de imponerse sobre las bestias salvajes surge la figura de Trithereon. Su origen exacto es desconocido pero muchos aseguran que se trataba de un hero cuya admiración por parte de los colonos de la Altalos elevo al estatus de dios.   Durante este periodo se unio a la divina alianza del progreso. Aunque cuando la victoria se hizo evidente fue el primero en abandonarla debido a grandes diferencias con el resto, en especial con Tyr. Esto provoco que gran parte de la población cambiara su devocion por Tyr.
Simbolo: Trisquel
ubicaciones:
 - Altalos
Tipo_deidad: Semidios
Objetivo: 
Titulos: La Trinidad
---
> [!infobox|left]
>  #### Trithereon
> ![[Trithereon.jpg|cover]]
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
![[Trithereon.webp|cover]]

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
