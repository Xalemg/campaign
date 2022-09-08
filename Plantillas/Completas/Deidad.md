---
<%*
const name = await tp.system.prompt("Nombre del dios", "Bane");
const tags = await tp.system.prompt("Tags", "IslasShamal, Aretries", "");
await tp.file.rename(name);
const dominios = await tp.system.prompt("Dominios", "Guerra, Orden", "");
const alineamiento = await tp.system.prompt("Alineamiento", "LB", "");
const descripcion = await tp.system.prompt("Descripción", "Suele ser representado", "");
const seguidores = await tp.system.prompt("Seguidores de " + name, "Aspirantes a la grandeza", "");
const prohibido = await tp.system.suggester(["Dios prohibido","Dios NO prohibido"],["Si","No"]);
const campaign = await tp.system.suggester(["Golpe de los dragones", "Islas Shamal", "No"], ["Golpe de los dragones ", "Chumipower", "No"]);
const simbolo = await tp.system.prompt("Simbolo sagrado", "Mano negra", "");
const historia = await tp.system.prompt("Historia", "#todo", "");
_%>
usado-en:   <% campaign %>
Tags: [Deidad,  <% tags %>  ]
Tipo: Deidad
Dominios : <%dominios%>
Alineamiento:  <%alineamiento%>
Seguidores: <%seguidores%>
Prohibido: <%prohibido%>
---
#  <% name %>  
 ![[Vecna_AFRT.jpg||clear+hmed+right]]
```ad-descripcion
<%descripcion%>
```
## Simbolo sagrado
<%simbolo%>
## Seguidores
<%seguidores%>

---
  
## Historia
<%historia%>
 