---
hp: #todo
ac: #todo
modifier: #todo
level: #todo
<%*
const name = await tp.system.prompt("Nombre del personaje", "Roberto");
const campaign = await tp.system.suggester(["Golpe de los dragones", "Islas Shamal"], ["Golpe de los dragones ", "Chumipower"]);
const tags = await tp.system.prompt("Tags", "IslasShamal, " + campaign, "");
await tp.file.rename(name);

_%>
Tags: Jugador, personaje, <%tags%>  
Tipo: jugador
Campaña: <%campaign%>  
En curso: si
---

# Nombre

## Stats
| STR | DEX | CON | INT | WIS | CHA |
| --- | --- | --- | --- | --- | --- |
|<%await tp.system.prompt("Fuerza", "", "")%>  | <%await tp.system.prompt("Destreza", "", "")%> |<%await tp.system.prompt("Constitución", "", "")%>  |<%await tp.system.prompt("Inteligencía", "", "")%>  |<%await tp.system.prompt("Sabiduría", "", "")%>  |<%await tp.system.prompt("Carisma", "", "")%>  |

## Competencias

## Generico
| Raza | Edad | Genero |
| --- | --- | --- |
| <% await tp.system.prompt("Raza del Personaje", "", "") %> | <% await tp.system.prompt("Edad", "", "") %> | <% await tp.system.prompt("Genero", "", "") %> |

## Caracteristicas
| Rasgo Personalidad | Ideal | Vinculo | Defecto |
| ------------------ | ----- | ------- | ------- |
| <% await tp.system.prompt("Rasgo Personalidad", "`dice: [[Tablas_aleatorias#^rasgos]]`", "") %> | <% await tp.system.prompt("Ideal", "`dice: [[Tablas_aleatorias#^ideales]]`", "") %> | <% await tp.system.prompt("Vinculo", "`dice: [[Tablas_aleatorias#^vinculos]]`", "") %> | <% await tp.system.prompt("Defecto", "`dice: [[Tablas_aleatorias#^defectos]]`", "") %> |

## Descripción

## Background

## Historia
