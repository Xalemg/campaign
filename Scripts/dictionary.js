function dictionary (tipo) {
    let salida="";
    switch (tipo) {
        case "asentamiento":
            return ["Capital","Gran ciudad", "Ciudad", "Fortaleza", "Pueblo", "Villa", "Tribu Nomada"];
        case "lugares con mapa":
            return ["ruta", "ciudad", "pueblo", "mazmorra", "punto de interes"];
        case "tipo objeto":
            return ["Arma", "Armadura", "Pergamino de hechizo", "Poción", "Consumible", "Otros"];
        case "rarezas":
            return ["comun", "infrecuente", "raro", "muy raro", "legendario", "artefacto"];
        case "territorios":
            return ["Nacion", "Región", "Zona", "Ruta"];
        case "Punto de interes":
            return ["Edificio", "Punto de interes"];
        default:
            return "nada";
    }
}
module.exports = dictionary;