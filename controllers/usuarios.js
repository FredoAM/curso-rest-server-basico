const {response} = require('express');


const usuariosGet = (req, res = response) =>{
    res.json({
        msg:'get API - controller'
    });
}

    const usuariosPut = (req, res = response) =>{

        const {id} = req.params;

        res.json({
            msg:'put API - controller',
            id
        });
}
const usuariosPost = (req, res = response) =>{
    
    
    const body = req.body;

    res.json({
        msg:'post API - controller',
        body
    });
}
const usuariosDelete = (req, res = response) =>{
    res.json({
        msg:'delete API - controller'
    });
}
const usuariosPatch = (req, res = response) =>{
    res.json({
        msg:'patch API - controller'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}