function add_memeber (tp) {
    let salida="";
    const rango = tp.system.prompt("Nombre de rango", "") ;
    return ('| ' + rango + ' |||')
}
module.exports = add_memeber;