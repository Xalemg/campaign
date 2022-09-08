---
Mundo: Aretries
Tags:
 - lugar
 - punto_de_interes
 - Aretries/Altalos/Riven
 - IslasShamal
 - mazmorra
banner: "![[Palacio de flores.jpg]]"
Tipo: Mazmorra
banner_x: 0.5
banner_y: 0.67857
Usado_en: Chumipower
---

#  Palacio de las flores

## Caracteristicas
| Tematica              | Descipcion                                               | Nivel de Peligro | Peculiaridades                    |
| --------------------- | -------------------------------------------------------- | ---------------- | --------------------------------- |
| Plantas y enredaderas | Plantas y enredaderas por todas partes cubren las parede | Medio            | Cubierta de enredaderas marchitas |


## NPCs

| Figuras clave | Amistosos | Neutrales | Ostiles   |
| ------------- | --------- | --------- | --------- |
| Haduuz        | Nadie     | Nadie     | Cultistas |

## Organización

## Historia

## Mapa planta Baja

```leaflet
id: Palacio Flores Planta Baja
image: [[Palacio Flores Planta Baja.png]]
maxZoom:7
```

## Puntos de Interes

### Patio de entrada
Un pequeño patio de tierra da la bienvenida a unas gran puerta. A vuesto alrededor una gran cantidad de arbustos marchitos han escapado de las jardineras. Entre ellas pueden dislumbrarse cuatro estatuas de las que apenas pueden vislumbrarse los pies. Una fuerte corriente de aire sopla entre las destrozadas puertas de lo que parece ser un palacio.

### Recibidor
En su interior un pequeño pasillo a ambos lados una antorchas de fuego violaceo iluminan la estancia. En el centro una gran estatua de un musculo ser con orejas picudas se llere desafiante con su brazo levantado. Fragmentos de piedras llacen a la derecha de la estancia.

### Sala principal
Marchitas enredaderas adornan el suelo y las paredes el suelo de piedras es casi imperceptible a traves de la capa de plantas putridas que cubren la estancía.

### Campamento cultista
Unos cultistan se preparan para montar guardia

### Jardin Exhuberante
La parte norte esta putrida mientras que la sur es un exhuberante jardin

### Capilla de Mieliki
Hermosas Rosas adornan las paredes, el suelo de cesped, en el centro de la habitación se encuentra un pedestal con Rosos.
Al fondo existe un busto con inscripcion: Bendita sea Mieliki y su benición sobre los bosques, los mares y los aires. Que su guia muestre tu camino a la paz.
### Jardin putrido

### Escaleras al sotano

## Mapa Catacumbas
```leaflet
id: Palacio Flores catacumbas
image: [[Subterraneos palacio.jpg]]
maxZoom:9
```

### Recibidor subterraneo
>Sala rectangular de suelo empedrado y tallado, las enredaderas del piso superior dan paso al musgo y un olor a cerrado que no podeis evitar un escalofrio. Tres puertas, una a la izaquierda y otras dos en la pared de enfrente a izquierda y derecha os reciben, la puerta de enfrente a la derecha y de la izquierda

Un grupo de Ghouls y Ghasts se han escapado de sus jaulas en los cuartos de monstruos y han llegado a la cocina.

### Cocina
> La puerta entre abierta tras el corredor da a una habitación en completa oscuridad sonidos de desgarros y masticacion y un fuerte olor a sangre

```encounter
creatures:
  - 3: Ghast, 36, 13, 3              
  - 5: Ghoul, 22, 12, 2              
```
### Laboratorio
Estanterias llenas de telarañas y extraños frascos llenan la sala al fondo a la izquierda en una jaula se encuentra un una especie de prisión con unas cajas.
Cosas en la habitación
- Marcas de desgarros en las paredes y una extraña mesa de metal\
- extraños cilindros con
```encounter
creatures:
  - Lesser Boneclaw, 75, 15, 3
  - Necrichor, 67, 12, 2
```

### Cuarto de las criaturas
Jaulas rotas en la primera habitación, 
Armarios y cajas en las siguiente

### Cuarto de los cultistas
3 cultistas se preparan para la ceremonia

### Antecamara del Zenit
>Ancestrales relieves de colores adornan las paredes de esta habitación. Diferentes escenas de ejércitos, caballeros naturaleza, corrupción y muerte aparecen grabadas en las paredes. Un enorme tiangulo negro con un círculo en su interior se encuentra superpuesto sobre el pasillo al otro lado de la habitación. 

Arriba del pasillo se pueden ver unos símbolos toscos

Primordial: El Zenit, el bordado entre planos creado por los hilos de la magia que cosen la Gran Rueda. La senda de Acheron se abrirá sólo ante los caminantes de planos. 

Los relieves se dividen en 5 escenas que parecen contar una historia:

Una isla salvaje en la que se distingue un palacio tallado en la roca y cubierto de rosas al fondo. En ella  una gran cantidad de elfos se arrodilla ante un unicornio el que los encabeza porta una preciosa armadura de motivos florales doradas y una vaina con forma de cuerno.
Grabado: La [[Isla de Riven]] jura lealtad a un dios debil

Un caballero con armadura de motivos florales navega hacia una isla en llamas mientras 2 grupos de humanos y elfos pelean en ella.
Grabado : [[Hazduul]] el caballero de la Rosa aprende la importancia de la servidumbre

Un enorme y musculoso humanoide con rasgos orcos y elficos extiende la mano al caballero de armadura floral que se arrodilla mostrando la cabeza de un unicorno. Al fondo elfos encadenados construyen un edificio.
Grabado : [[Hazduul]] el caballero de la Rosa es recompensado con gran poder por el asesinato de la Naturaleza.

Una gran guerra enfrenta a muchas razas de humanoides y extrañas maquinas contra demonios, abominaciones, bestias y zombies. En primer plano se muestra al enorme humanoide con rasgos elficos y orcos asesinar a un hermoso joven rubio clavandole una espada llameante en el pecho.

Se puede leer en común con dificultad: [[Bane]] acaba con la estirpe de [[Trithereon]] durante el ultimo día de los dioses.
Grabado oculto CD 18: Al lado de [[Bane]] el caballero de armaduras florales parece desaparecer arrollado por un caballo. En realidad es [[Bane]] el que tiene clavada la espada llameante de [[Trithereon]].

Una enorme estructura triangular con un circulo en su interior se ve en el centro del relieve superpuesta sobre la puerta del fondo de la estancia, unos pocos humanoides con diversas herramientas en la mano se agachan a los lados, mientras un grupo de zombies deboran a un elfo.
Grabado: El canalizador del zenit es completado.
Grabado oculto CD 20: La forma triangular realmente es una piramide.

### Bilbioteca
Antiguos escritos y pergaminos sobre agricultura, cuidado de la fauna y flora de la Isla, 

## Zenit
```ad-leer
El sonido del agua en movimiento golpea vuestros oídos. A vuestro alrededor dos grandes canales se encuentran entre paredes que parecen alzarse hasta el infinito. La corriente fluye hacia una cascada de la que no puede escucharse el final. Las paredes se abren a partir de este punto a un inmerso abismo de negrura. Un simple puente de piedra desafía el vació y une los pequeños caminos entre los canales y un único islote de piedra que surge entre la oscuridad. Sobre el y a unos 80 pies  un triangulo y un circulo. Un enorme anillo puntiagudo colgado de una estructura metálica con forma de arco por unas extrañas cadenas doradas brillantes. Una fuerte corriente de aire atraviesa el anillo hacia el pasillo a vuestras espaldas. Tras de el una enorme pirámide de piedra de 50 pies de altura engrabada con filigranas doradas.

Tanto a izquierda como a derecha, dos hombres a cada lado de los canales con túnicas del culto parecían ocupados limpiándose con el agua del canal y descansando antes de que les sorprendiera vuestra llegada. Al otro lado del puente un hombre de aspecto marcial examina el extraño arco y anillo frente a la pirámide. En la pared de la derecha de la pirámide, un hombre con capa negra y mascara negra parece estar siendo torturado por un hombre con aire de erudición y otros dos miembro del culto. Sobre la pirámide un hombre gordito, bajo y de aspecto pálido con una extraña ornamenta en su cabeza de color negro con 5 puntas dobladas hacia atrás que recuerdan a la forma de un puño.
```
### Cruce del velo

Ronda 1

> En esta tierra de debilidad y miseria,
> 
> solo hay un dios con poder para imponerse

Ronda 2

> Mi lealtad va mas allá de la vida y la muerte
> 
> Mi adoración hacia ti solo la iguala el terror que te siento

Ronda 3

> Oh Bane te suplico, préstame una gota de tu poder
> 
> Las ciudades arderán, los paganos serán esclavizados.
> 
> El temor a tu nombre yacerá en los corazones de la humanidad
> 
> Y en la mas alta de las cimas alzaremos un trono de huesos para tu regreso.
