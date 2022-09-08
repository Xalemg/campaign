---
<%*
const faction = await tp.system.prompt("Nombre de la facción", "","");
const tags = await tp.system.prompt("Tags", "Aretries", "","");
const alineamiento = await tp.system.prompt("Alineamiento", "LB", "");
const motivation = await tp.system.prompt("Motivacion de sus miembros", "","");
const structure = await tp.system.prompt("Estructura de la facción", "","");
const type = await tp.system.prompt("Tipo de Organización", "Culto","");
const description = await tp.system.prompt("Descripcion de la facción", "","");
const lugares = await tp.system.prompt("Lugares de operación", "Aretries,","");
const quote = await tp.system.prompt("Cita", "","");
const history = await tp.system.prompt("Historia", "","");
const members = await tp.system.prompt("Como son los miembros", "","");
await tp.file.rename(faction)
%>
Camapaña: Chumipower
Tags: faccion, <%tags%>
Tipo: faccion
Estructura: <%structure%>
Alineamiento: <%alineamiento%>
Tipo_organizacion: <%type%>
Descripcion: <%description%>
Motivación: <%motivation%>
ubicaciones:
- [[<% lugares.replace(",","]]\n- [[")%>]]
cita: <%quote%>
---
> [!infobox|left]
>  #### <% name %> 
> ![[hand bane.webp| cover hsmal]]
> ###
> |Rasgo | Valor |
> | --- | --- |
> | Alineamiento | `=this.Alineamiento`|
> | Estructura | `=this.Estructura` |
> | Tipo de organizacion | `=this.Tipo_organizacion` |
>  | Lugares  importantes| `=link(this.ubicaciones)` |


## Descripción
`=this.Descripcion`
## Motivación
`=this.motivacion`
## Cita
`=this.cita`
## Historia


___

### Miembros

```dataview
table Rango, Alineamiento, objetivo as "Objetivo", Faccion, Profesión
FROM #NPC AND #Aretries
WHERE Faccion="<%faction%>"
```
