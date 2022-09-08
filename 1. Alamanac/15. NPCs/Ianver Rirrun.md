---
Tipo: NPC
usado-en: Chumipower
cssclass: kanban
Raza: Gnomo
tags: NPC ,IslasShamal, Aretries/Adur ,Inquisidor
Alineamiento: LN
Edad: 40
Genero: Mujer
Profesión: Inquisidor
Rango: Adepto
Faccion: Inquisición
interpretacion: Fiona de Shrek
distintivo: Muy delgada y bajita, con capa azul y una larga vara que acaba en una afilada punta
personalidad: Me gusta el trabajo bien hecho, sobre todo si puedo convencer a otro de que lo haga.
ideal: Respeto. Todas las personas, ricas o pobres, merecen respeto.
vinculo: La mejor manera de conseguir que haga algo es decirme que no puedo hacerlo.
defecto: Oigo con demasiada frecuencia insultos y amenazas veladas en cada palabra que se me dirige, y me enfado rápidamente.
historia: 
objetivo: Busca validación. Capturar a los Dardos Nocturnos para ascender en la inquisición
ubicaciones:
 - Adur
actualizado: 1
muerto: no
---
> [!infobox|left]
>  #### Ianver Rirrun
> ![[Ianver Rirrun.png|cover]]
> ######   
> |Rasgo | Valor |
> | --- | --- |
> | Alineamiento | `=this.alineamiento`|
> | Raza | `=this.raza` |
> | Edad | `=this.edad` |
> | Genero | `=this.genero` |
> | Profesión | `=this.profesión` |
> | Rango | `=this.rango` |
> | Faccion | `=link(this.faccion)` |
>  | Lugares  importantes| `=link(this.ubicaciones)` |

## Rasgos 
 `=this.distintivo`
  `=this.personalidad`
###  Interpretación
  `=this.interpretacion`
### Ideal           
 `=this.ideal`
### Vinculo 
 `=this.vinculo`
### Defecto
 `=this.defecto`
## Historia
 `=this.historia`

 ##  Objetivo
   `=this.objetivo`
   
___
   ## Notas
   Consiguio que la party acabara con [[Los Dardos Nocturnos]] y le dieran la cabeza de [[]]

```statblock
monster: Bladesinger
name: Ianver Rirrun
actions:
  - name: Bladesong (3/Day)
    desc: "The bladesinger starts Bladesong, which lasts for 1 minute. It ends early if the bladesinger is [incapacitated], dons medium or heavy armor or a shield, or if it uses two hands to make an attack with a weapon. It can also dismiss the Bladesong at any time (no action required). While the Bladesong is active, the bladesinger gains the following benefits: \n+3 bonus to its AC \nwalking speed increases by 10 feet \nadvantage on Dexterity (Acrobatics) checks \n+3 bonus to any Constitution saving throw it makes to maintain concentration on a spell"
```