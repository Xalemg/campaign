---
Tipo: Mazmorra
Tags:
 - lugar
 - mazmorra
 - IslasShamal
 - Aretries/Infraoscuridad
Mundo: Aretries
Usado_en: Chumipower
tematica:
 - Demoniaca
 - Desolación
 - Ancestral
economia: 
peligro: Alto
descripcion: |
 [[La asamblea de los cinco colores]] era un grupo de grandes dragones altamente poderosos dedicados al servicio de [[Tiamat]]. Se encuentra adornado con numerosas estatuas y simbolos draconidos. Todo aqui es grandioso, desde los pasillos hasta las puertas. A pesar de la antigüedad del templo el hecho de encontrarse en la [[Infraoscuridad]]. ha hecho que se mantenga en gran estado
clima: Templado y humedo 
religion: Seguidores de [[Tiamat]]
historia: La [[Asamblea de los cinco colores]] designo este lugar como un punto de encuentro para tratar con los Drows de [[Ust Natha]].en su lugar Hace 1600 años tras lo que la [[La asamblea de los cinco colores]] considero que era el final de las perlas  años aqui se acordo el pacto del aguijon, por el cual los los drows de [[Ust Natha]] se comprometia a acabar con los hijos de Gath e Igeo acambio de que [[Gran Dragon Verlaeth]] forjara los [[Dedo de Lolth]]. Poco despues el edificio fue abandonado por sus miembros, cada uno regresando a sus dominios y dejando como guardían a [[Maerldroth]].en su lugar Hace unos pocos años [[Orcus]] aprendio la localización de la embajada. Buscando información que pueda usarse contra [[Tiamat]] en su regreso o para negociar.
ubicacion: Aretries
 - Infraoscuridad
banner: "![[templo cinco caras.jpg]]"
banner_y: 0.56324
monstruos: Demonios, kobolds y draconidos
defensas: Kobolds
---

#  Embajada de las cinco caras
> [!infobox|left]
> |Rasgo | Valor |
> | --- | --- |
> | Tematica | `=this.tematica`|
> |  Nivel de peligro: | `=this.peligro` |
> | Tipo de localizacion | `=link(this.tipo)` |
> | Monstruos | `=this.monstruos`  |

## Descripción
`=this.descripcion`
## Historia
`=this.historia`
## Mapa
La escala del mapa equivale a 15 pies por cuadrado
```leaflet
id: Embajada_de_los_cinco_colores
image: [[La asamblea de las 5 caras.png]]
height: 800px
width: 95%
minZoom: -1.5
### Max zoom is 18.
darkMode: disable
```


## Salas
#### Sala de Asambleas
> [!recite]
Una enorme sala circular de 60 pies de radio se abre ante vosotros. Del techo parece una estatua de un dragon de 5 cabezas desciende hacia el centro de la habitación con cada cabeza mirando en una dirección distinta. En la dirección de cada cabeza un enorme trono equivalente al color de la cabeza Un extraño olor a rancio. Enormes relieves con 5 cabezas de dragones en círculos se encuentran por todas las paredes de la estancia
` encounter: 1: Night Hag Elder`
#### Entrada colapsada
Los aventureros caen en este punto colapsando la entrada y el pasillo. Las puertas Este y Oeste están colapsadas por la avalancha. En el amplio pasillo existen extrañas antorchas con formas de dragon y en la boca.
`encounter: 2: White Guard Drake , 12: Kobold`  llegaran a comprobar el colapso de la entrada. En cuando la mitad hayan muerto se retiraran  al [[#Pasillo de caza]]
#### Pasillo de caza
Pasillo oscuro decorado con dos filas de enormes cráneos de dragones metálicos muertos. Existen hilos a nivel del suelo como trampas CD 15 con trampas, en caso de activarlo las cabezas soltaran ácido `dice: 4d6` daño de fuego.
#### Cocina abandonada
Los huesos de enormes criaturas se encuentran esparcidos por la habitación. El olor a podredumbre y ácido todavía se mantiene en la habitación. Baldosas trampa CD 12 3d6 daño de acido

#### Habitación de [[Gran Dragon Varo ]]
Habitación del [[Gran Dragon Varo]] ancient blue wyrmling 


> [!recite]
> Una enorme habitación con el suelo lleno arena y gigantescos cristales. Un intenso olor a ozono inunda la estancia. En la zona Norte una enorme puerta da a una habitación. En la pared sur un  cuadro medio quemado de lo que parece un dragon azul .

Si alguien inspecciona el cuadro:
> [!recite]
> Un dragon azul tan grande como una montaña aplasta una pequeña aldea mientras pequeños humanoides amontonan enormes pilas de oro. Una terrible tormenta ruje tras de el.
> En la esquina inferior se puede leer. El [[Gran Dragon Varo]] muestra su magnificencia a los habitantes de Faerun 

#### Entrada al Hall
Una gigantesca puerta de metal de 60 pies de altura y 20 de ancho cuando los aventureros entren los kobolds les tenderan una emboscada por la retaguardia
`encounter: 2: White Guard Drake , 12: Kobold` 

#### Guarida Kobold 
Multitud de pequeñas madrigueras creadas por los Kobolds para defender la Embajada. En esta zona se encuentran huevos de Drakes.

#### Guarida de [[Maerldroth]]
Enrollada al rededor de la estatua una pequeña masa con forma de lagartija. 
` encounter: 1: Adult Deep Dragon, 1 Lyrena Despana`
#### Liberia de dragones

> [!recite] 
> Una gigantesca sala con enormes filas de estanterías con extraños hongos negros recubren todo, entre ellos pequeñas setas bioluminiscente. 
> 

DC 15 Percepción:  Información sobre las [[Perlas de Alma]]  si fallo info sobre la inferioridad física de los dragones cromáticos.
DC 20 Percepción: Escuchan al Balruga

Escuchan una fuerte respiración antes de ver un gigantesco mono atacarlos si la percepción es menor de 20 tiene **Sorpresa**



## NPCs
```dataview
table rango, alineamiento, objetivo AS "Objetivo" , profesión, ubicaciones
FROM #NPC
WHERE contains(ubicaciones, "Embajada de los cinco colores")
```
## Facciones
```dataview
table Tipo_organizacion as "Tipo de Organizacion", Alineamiento, Estructura, Nivel_de_influencia as "Nivel de influencia"
FROM #faccion
WHERE contains(ubicaciones, "Embajada de los cinco colores")
SORT Posicion
```
