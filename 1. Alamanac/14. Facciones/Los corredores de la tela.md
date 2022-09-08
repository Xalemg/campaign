---
motivacion: Conseguir pelas
ubicaciones:
 - [[Los caminos de seda]]
Estructura: Desorganizada
Alineamiento: N
Cita: Surfear es mi vida
Tipo_organizacion: Amigos
Historia: Se perdieron por aqui siendo pequeños y descubrieron lo divertido que es surfear redes
Nivel_de_influencia: Ninguno
Alcance_de_influencia: Ninguno 
Camapaña: Chumipower 
Tags:
 - faccion
Descripcion: |
 Los Corredores de la Tela son una pareja de duendes buscadores de emociones llamados Yuk Yuk y Spiderbait. Han vivido en la Infraoscuridad desde que tienen uso de razón, y han pasado gran parte de su tiempo buscando tesoros y sobreviviendo en los Senderos Silenciosos. Los goblins son propensos a realizar atrevidas (y a menudo tontas) acrobacias. Que alguno de ellos siga vivo es un testimonio de su suerte y habilidad. Modifica sus estadísticas como sigue:
 Ambos goblins son neutrales.
 Añade Acrobacia +6 y Atletismo +3 a la lista de habilidades de los goblins.
 Los goblins tienen ventaja en los chequeos realizados para evitar ser sorprendidos.
 Los goblins se fijan en los aventureros cuando se acercan a los Caminos de Seda y están dispuestos a actuar como guías y ayudantes, a cambio de un precio, por supuesto. Se conformarán con 2 gp por día cada uno, pero Yuk Yuk (que es quien negocia) es igual de probable que pida algo llamativo que pertenezca a uno de los personajes. También puede pedir algún favor no especificado, que se pagará cuando los goblins y los aventureros lleguen a su destino y se separen. Puede que pida la primera opción de cualquier botín que el grupo descubra en los Caminos de Seda, y esperará y pedirá una parte del tesoro a pesar de todo.
 Yuk Yuk y Spiderbait llevan cada uno una calabaza de grasa, que aplican a sus pies para poder "navegar por las telarañas". Mientras se deslizan por las telarañas, se mueven al doble de su velocidad normal al caminar.
 Los Web Runners son tan buenos como su palabra cuando se trata de sus servicios, y pueden enseñar a los personajes una o dos cosas. Mientras viajan con los dos goblins, los personajes tienen ventaja en los chequeos realizados para evitar ser sorprendidos. Los goblins conocen los Caminos de Seda lo suficientemente bien como para no perderse en ellos.
 Si los aventureros causan una buena impresión a los Corredores de la Tela y si los objetivos del grupo parecen ofrecer oportunidades interesantes para hacer cosas nuevas y peligrosas, los goblins se ofrecen a quedarse después de cruzar los Caminos Silenciosos, y a ayudar a guiar a los personajes a través de la Infraoscuridad. Sin embargo, los dos no abandonarán la Infraoscuridad. Yuk Yuk intentará negociar una tarifa adecuada, pero los goblins podrían simplemente acompañarles, contentándose con ganar cualquier parte justa de lo que el grupo adquiera.


---
> [!infobox|left]
>  # Los corredores de redes
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
WHERE contains(parte_de, "Los corredores de redes")
SORT Posicion
```

___

## Miembros

```dataview
table rango, alineamiento, objetivo , profesión, ubicaciones
FROM #NPC
WHERE contains(faccion, "Los corredores de redes")
```
