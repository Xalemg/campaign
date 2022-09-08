---
Camapaña: Chumipower
Tags: faccion, Aretries, cultoBane
Tipo: faccion
date updated: "2021-12-13 10:10"
cssclass: kanban
Estructura: Jerárquica
Alineamiento: LM
Tipo_organizacion: Culto
ubicaciones: Isla de Altalos
motivacion: Obtener poder e influencia
Cita: Temedle siempre y haced que otros le teman mas que tu.
Descripcion: El culto de [[Bane]] es una secta de seguidores de [[Bane]], visten con capas negras y son muy cuidadosos con su anonimato
actualizado: 1
Nivel_de_influencia: Media
Alcance_de_influencia: Regional
---

> [!infobox|left]
>  #
> ![[hand bane.webp| cover hsmal]]
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

___

### Miembros

```dataview
table rango, alineamiento, objetivo , profesión, ubicaciones
FROM #NPC
WHERE contains(faccion, "Culto de Bane")
```
### Rangos
---

| Nombre                           | Miembros                                                                           | Rol                                                                                 |
| -------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Alto Imperceptor                 | [Principe Carrión](ckjd0ynkf6h2f07266dfwgwsu.html)                                 | El más alto cargo de los sacerdotes                                                 |
| Imperceptor oscuro               |                                                                                    | Coordina al culto en las islas                                                      |
| Misterio profundo                |                                                                                    | [Sirviente del imperceptor oscuro](https://5e.tools/bestiary.html#war%20priest_vgm) |
| Alta perdicion                   | [[Carlos Baedoz]]                                                                  | Coordina regionalmente al culto                                                     |
| Perdicion oscura                 | [[Marcos Alacazar]]                                                                | Coordina misiones del culto                                                         |
| Muerte enmascarada               | [Coordina misiones del culto](https://5e.tools/bestiary.html#battle%20mage_ccodex) |                                                                                     |
| Sirviente de la perdición oscura |                                                                                    |                                                                                     |
| Amenaza encapuchada              |                                                                                    | [Reclutador](https://5e.tools/bestiary.html#black%20gauntlet%20of%20bane_bgdia)     |
| Latigo ferreo                    |                                                                                    | [Reclutador menor](https://5e.tools/bestiary.html#war%20chaplain_ccodex)            |
| Sirvientes leales                |                                                                                    | [Lider de grupo](https://5e.tools/bestiary.html#fist%20of%20bane_bgdia)             |
| Adepto mortal                    |                                                                                    | [Dominador menor](https://5e.tools/bestiary.html#fist%20of%20bane_bgdia)            |
| Hemano vigia                     |                                                                                    | [Predicadores](https://5e.tools/bestiary.html#acolyte_mm)                           |
| Esclavo                          |                                                                                    | [Iniciado](https://5e.tools/bestiary.html#commoner_mm)                              |
