---
<%*
const name = await tp.system.prompt("Nombre del personaje", "Roberto");
const faccion = await tp.system.prompt("Faccion", "Culto de Bane");
const tags = await tp.system.prompt("Tags", "IslasShamal, Aretries", "");
await tp.file.rename(name);
const campaign = await tp.system.suggester(["Golpe de los dragones", "Islas Shamal", "No"], ["Golpe de los dragones ", "Chumipower", "No"]);
const lugares = await tp.system.prompt("Ubicaciones relevantes", "Aretries, Adur...", "");
const job = await tp.system.prompt("Profesión", "Cantante de calabazas");
const rango = await tp.system.prompt("Rango", "Lider");
const alineamiento = await tp.system.prompt("Alineamiento", "LB");
const monster = "Commoner";
const raza = await tp.system.prompt("Raza del Personaje", "", "");
const edad =  await tp.system.prompt("Edad", "", "") ;
const genero = await tp.system.prompt("Genero", "", "");
const distintivo = await tp.system.prompt("Rasgo distintivo", "", "");
const personalidad = await tp.system.prompt("Rasgo personalidad", "", "");
const interpretacion = await tp.system.prompt("Interpretación", "Voz rasgada...", "");
const ideal = await tp.system.prompt("Ideal", "", "");
const vinculo = await tp.system.prompt("Vinculo", "", "");
const defecto = await tp.system.prompt("Defecto", "", "");
const historia = await tp.system.prompt("Historia", "", "");
const objetivo = await tp.system.prompt("Objetivo", "", "");
_%>
Tags: NPC ,<%tags %> ,<%job%> 
Tipo: NPC
usado-en: [[<% campaign %>]]
profesión: <% job %>
rango: <% rango %>
faccion: [[<% faccion %>]]
alineamiento: <% alineamiento %>
raza: <% raza %>
edad: <% edad %>
genero: <% genero %>
distintivo: <% distintivo %>
personalidad: <% personalidad %>
ideal: <% ideal %>
vinculo: <% vinculo %>
ubicaciones:
- [[<% lugares.replace(",","]]\n- [[")%>]]
defecto: <% defecto %>
interpretacion: <% interpretacion %>
historia: <% historia %>
objetivo: <% objetivo %>
imagen: ![[Kompac Paxiros.webp | cover hsmal]]
---

#  <% name %>  
> [!infobox|left]
>  #### <% name %> 
> ![[NPC.jpg|cover]]
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

```statblock
monster: <%monster%>
name: <%name%>
```