---
<%*
const item = await tp.system.prompt("Nombre del objeto", "");
const tipos = await tp.user.dictionary("tipo objeto");
const clase = await tp.system.suggester(tipos, tipos);
const rarezas = await tp.user.dictionary("rarezas");
const rareza = await tp.system.suggester(rarezas, rarezas);
const titulo = "" + item + " ( " + clase + ", " + rareza + ")"
await tp.file.rename(titulo)
const descripcion = await tp.system.prompt("Descripción", "Botella de aceite...", "");
const attunement = await tp.system.suggester(["Requiere Sincronización", "No requieres Sincronización"],["si", "no"] );
const propiedades = await tp.system.prompt("Propiedades del objeto", "1d4 daño cortante");
const peso = await tp.system.prompt("Peso del objeta", "1lb");
const valor = await tp.system.prompt("Valor del objeto", "Desconocido");
const fuente = await tp.system.prompt("Fuente del objeto", "Homebrew");
const campaign = await tp.system.suggester(["Golpe de los dragones", "Islas Shamal"], ["Golpe de los dragones ", "Chumipower"]);
const tags = await tp.system.prompt("Tags", clase + ", " + rareza);
let subtitle= "- [ ] ";
if (attunement == "si"){subtitle ="- [X] "}
_%>
tipo: Item
sintonizacion : <%attunement%>
tags: Item, <%tags%>
clase: <%clase%>
rareza: <%rareza%>
peso: <%peso%>
valor: <%valor%>
propiedades: <%propiedades%>
descripcion: <%descripcion%>
fuente: <%fuente%>
usado-en: <% campaign %>

---
> [!infobox|left]
>  #### <% item %> 
> ![[pergamino items.png || cover]]
> ######   
> |Rasgo | Valor |
> | --- | --- |
> | Tipo de objeto| `=this.clase`|
>  | Rareza| `=this.rareza`|
> | Sintonización | `=this.sintonizacion` |
> | Propiedades | `=this.propiedades` |
>  | Peso | `=this.peso` |
> | Valor | `=this.valor` |
> | Fuente | `=this.fuente` |

## Descripción
`=this.descripcion`
