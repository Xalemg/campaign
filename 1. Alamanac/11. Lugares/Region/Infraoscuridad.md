---
Tipo: Region
Tags:
 - lugar
 - IslasShamal
 - Aretries
 - region
Mundo: Aretries
Usado_en: [Chumipower, Golpe de los Dragones]
banner_y: 0
tematica:
 - Alienigena
 - Terror
 - Superviviencia
banner_x: 0.50088
economia: Dispar
peligro: Muy Alto
comercio: Existen valiosas gemas y artefactos en el interior de la infraoscuridad.
ubicacion: Aretries
descripcion: |
 La Infraoscuridad no era una caverna gigante bajo Faerûn, sino más bien muchas redes enormes de cavernas y cuevas. Por ello, no siempre era posible viajar de un extremo a otro de la Infraoscuridad. La Infraoscuridad estaba dividida en varios dominios que eran similares a los continentes del mundo superior. Aunque era posible viajar de un lugar a otro dentro de un dominio, los dominios separados solían tener muy pocos pasajes que los unieran.La oscuridad superior **AltaOscuridad** Las primeras 3 millas (4,8 kilómetros) por debajo de la superficie. Es aquí donde los habitantes de la superficie y los de la Infraoscuridad se encuentran con más frecuencia. **Middledark** Situada entre 4,8 y 16 kilómetros por debajo de la superficie, esta capa era donde se encontraban la mayoría de las ciudades de la Infraoscuridad. **BajaOscuridad** A 16 kilómetros (10 millas) o más por debajo de la superficie, la BajaOscuridad era el lugar donde incluso los que conocían la Infraoscuridad se resistían a ir.
 [[Viaje por la Infraoscuridad]]
banner: "![[underdark.jpg]]"
clima: Varia bastante, en general es un clima estable y moderado. Aunque el agua tiende a estar congelada.
historia: La historia de la Infraoscuridad es anterior y paralela a la del mundo de la superficie. Las razas progenitoras surgieron en la Infraoscuridad y se extinguieron con el tiempo o fueron asesinadas cuando sus equivalentes se retiraron bajo tierra ante la oposición de nuevas razas como los elfos y los enanos. Las razas antiguas, como los kuo-toas, desaparecieron de la superficie antes de que se registrara la historia humana o élfica. Las pruebas del origen de los illithids son escasas, pero los sabios creen que los destructores de mentes surgieron casi al mismo tiempo que los kuo-toas o invadieron desde otro plano durante el apogeo de ese imperio. Los aboletos también son antiguos, pero la historia de sus maquinaciones desde la baja Infraoscuridad ha quedado sin registrar.
---
> [!infobox| left]
> # Información General
> |Rasgo | Valor |
> | --- | --- |
> | Tematica | `=this.tematica`|
>  | Nivel economico | `=this.economia` |
> |  Nivel de peligro: | `=this.peligro` |
> | Ubicado en | `=link(this.ubicacion)` |
> ## Monstruos
| Raza/Monstruos | Numero |
| -------------- | ------ |
| Drow           | Medio  |
| Aboleth        | Escaso |
| Derros         | Alto   |
| Duergars       | Medio  |
| Enanos         | Bajo   |
| Gnomos         | Bajo   |
| Kuotoa         | Bajo   |
| Ilithids       | Bajos  |
| Drider         | Bajo       |

## Descripción
`=this.descripcion`
### Clima
`=this.clima`
### Ecología
`=this.ecologia`
## Comercio
`=this.comercio`
## Historia
`=this.historia`
## Mapa
No existen mapas de la infraoscuridad
## Lugares de interés
```dataview
table tematica, economia, peligro, descripcion
FROM #lugar
WHERE contains(ubicacion, "Infraoscuridad")
SORT Posicion
```


## NPCs
```dataview
table Rango, Alineamiento, objetivo as "Objetivo", Faccion, Profesión
FROM #NPC
WHERE contains(ubicacion, "Infraoscuridad")
SORT Posicion
```
## Facciones

```dataview
table Tipo_organizacion as "Tipo de Organización", motivacion, Alineamiento, Nivel_de_influencia as "Nivel de Influencia",  Alcance_de_influencia as "Alcance de Influencia" 
FROM #faccion 
WHERE contains(ubicaciones, "Infraoscuridad")
SORT Posicion
```
