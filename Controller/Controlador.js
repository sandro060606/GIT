let controlador = {}

controlador.mostrarPaginaInicio = (req, res) => {
    res.render('inicio')
}

controlador.mostrarPaginaSobre = (req, res) => {
    res.render('sobre')
}

controlador.mostrarPaginaContacto = (req, res) => {
    res.render('contacto')
}
module.exports = controlador