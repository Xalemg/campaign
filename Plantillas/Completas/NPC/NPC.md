---
<%*
const name = await tp.system.prompt("Nombre del personaje", "Roberto");
const facion = await tp.system.prompt("Facion", "Culto de Bane");
const tags = await tp.system.prompt("Tags", "IslasShamal, Aretries", "");
await tp.file.rename(name);
const campaign = await tp.system.suggester(["Golpe de los dragones", "Islas Shamal", "No"], ["Golpe de los dragones ", "Chumipower", "No"]);
const job = await tp.system.prompt("Profesión", "Cantante de calabazas");
const rango = await tp.system.prompt("Rango", "Lider");
const alignment = await tp.system.prompt("Alineamiento", "LB");
const monster = await tp.system.prompt("Stats de monstruo", "commoner");
_%>
Tags: NPC ,<%tags %> ,<%job%> 
Tipo: NPC
usado-en:   <% campaign %>
cssclass: kanban
---

#  <% name %>  

> [!infobox]
>  #### <% name %> 
> ![[Kompac Paxiros.webp | sban]]
> [Alineamiento::  <%alignment%>]
> [Raza:: <% await tp.system.prompt("Raza del Personaje", "", "") %>]
> [Edad:: <% await tp.system.prompt("Edad", "", "") %>]
> [Genero:: <% await tp.system.prompt("Genero", "", "") %>]
> [Profesión::<%job%>]
> [Rango:: <%rango%>]
> [Faccion:: <% facion %>]
## Rasgos 

<% await tp.system.prompt("Rasgo distintivo", "`dice: [[Tablas_aleatorias#^fisico]]|Rasgo`", "") %>
<% await tp.system.prompt("Rasgo Personalidad", "`dice: [[Tablas_aleatorias#^rasgos]]`", "") %>
###  Voz
### Ideal           
<% await tp.system.prompt("Ideal", "`dice: [[Tablas_aleatorias#^ideales]]`", "") %>
### Vinculo 
 <% await tp.system.prompt("Vinculo", "`dice: [[Tablas_aleatorias#^vinculos]]`", "") %>
### Defecto
 <% await tp.system.prompt("Defecto", "`dice: [[Tablas_aleatorias#^defectos]]`", "") %>

---
## Historia
<% await tp.system.prompt("Historia", "`dice: [[Tablas_aleatorias#^historia]]|Historia`") %>

 ##  Objetivo
<% await tp.system.prompt("Objetivo", "Recuperar a su hermano", "") %>

```statblock
monster: <%monster%>
name: <%name%>
```