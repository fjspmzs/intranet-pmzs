module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/efetivomils/:id',
            handler: 'efetivomil.findOne',
            config: {
                auth: false,
            }
        },
        {
            method: 'PUT', // Método para atualizar
            path: '/efetivomils/:id',
            handler: 'efetivomil.updateOne', // Novo método
            config: {
                auth: false,
            }
        }
    ]
}
