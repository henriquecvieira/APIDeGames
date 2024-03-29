const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')

dotenv.config();

const auth = async (req, res, next) => {
    const authToken = req.headers['authorization']
    const result = await validateToken(authToken)
    if (result.status == 'authenticate') {
        req.body.name = result.name
        req.body.email = result.email
        
        next()
    }else{
        res.status(result.code).json({ err: 'Não autorizado' })
    }
}
const validateToken = async (params) => {
    let resultValidate;
    if (params != undefined) {
        const bearer = params.split(' ');
        const token = bearer[1]
        
        jwt.verify(token, process.env.SECRET, (err, data) => {
            if (err) {
                console.log(err.message)
                if (err.message === "jwt expired") {
                    resultValidate = { status: 'Sessão inválida', code: 408 }
                }
                if (err.message === "invalid token") {
                    resultValidate = { status: 'Não autorizado', code: 401 }
                }
            } else {
                resultValidate = { 
                    status: 'authenticate',
                    data: data.name,
                    email: data.email
                }
            }
        });
    } else {
        resultValidate = { status: 'Não autorizado', code: 411 }
    }
    return resultValidate
}
module.exports = auth

