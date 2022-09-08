---
<%*
const materia = await tp.system.prompt("Nombre del material", "");
const tipo = await tp.system.prompt("Tipo materia", "Material", "");


const rarezas = await tp.user.dictionary("rarezas");
const rareza = await tp.system.suggester(rarezas, rarezas);
const descripcion = await tp.system.prompt("Descripción", "De aspecto de madera...", "");
const price = await tp.system.prompt("Precio del Kg", "50gp", "");

const location = await tp.system.prompt("Se encuentra en...", "Se encuentra principalmente en", "");

const world = await tp.system.suggester(["Costa de la espada", "Aretries"], ["Golpe de los dragones ", "Chumipower"]);
const campaign = await tp.system.suggester(["Golpe de los dragones", "Islas Shamal", "No"], ["Golpe de los dragones ", "Chumipower", "No"]);
const tags = await tp.system.prompt("Tags, ", tipo +", Aretries/Altalos", "");
await tp.file.rename(materia);
%>
Mundo: <%world%>
Tags: Materia, <%tags%>
Tipo: <%tipo%>
descripcion: <%descripcion%>
cssclass: kanban
usado-en: <% campaign %>
---
![[#todo||clear+hmed+right]]
# <%materia%>
- [Rareza:: <%rareza%>]
- [Precio por Kg:: <%price%>]
## Descripción
<%descripcion%>

## Localización
<%location%>