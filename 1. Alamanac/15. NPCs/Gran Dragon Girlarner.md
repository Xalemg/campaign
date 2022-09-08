---
Faccion: 
 - La asamblea de los cinco colores
usado-en: Chumipower 
Tags: 
- NPC
- Islas Shamal 
- Aretries 
- Dragon
genero: Mujer 
raza: Dragon 
rango: Lider 
alineamiento: CM  
profesión: Lider de la Asamblea
edad: 17.000
distintivo: El aire a su alrededor arde  
personalidad: Destructivo, odioso e irascivo
ideal: Todo debe arder
vinculo: Tiamat
defecto: Ignorante 
historia: |
 Fundo la asamblea para acabar con [[Bahamut]] despues que este le humillara aunque le dejara vivir para poder redimirse
objetivo: Probar su poder
ubicaciones:
 - Embajada de los cinco colores 
interpretacion: 
muerto: no
---

> [!infobox|left]
>  #### Girlarner
> ![[Red Greatwyrm.webp|cover]]
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
### Eventos
```dataview
table descripcion as Descripción, fecha as Fecha
FROM #evento
WHERE contains(NPCs, "Girlarner")
SORT Posicion
```
 ##  Objetivo
   `=this.objetivo`
   
___
   ## Notas

```statblock
monster: Red Greatwyrm
name: Girlarner
```