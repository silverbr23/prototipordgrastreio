// const models = require('../../models');

// module.exports = function AllowClienteTokenMiddlewareFactory(tokenParamName) {
//     return async function AllowClienteTokenMiddleware(req, res, next) {



//         ////// O cliente ira realizar seu login, isso dara inicio a uma sessao..
//         ///// O token dessa sessao ira expirar mensalmente (ou semanalmente) ou seja,

//         ///// Esta funcao recebe o token
//         ///// Verifica se este token ja esta registrado em alguma sessao,
//         //// caso sim,A função


//         const token = req.query[tokenParamName];

//         if (!token) {
//             res.json({
//                 error: 1,
//                 msg: "Token de Cliente não encontrado!"
//             });
//             return;
//         }

//         const hasToken = await models.ClienteInfoSessao.findOne({
//             where: {
//                 token: token
//             }
//         });



//         if (!hasToken) {
//             res.json({
//                 error: 1,
//                 msg: "Token de cliente inválido"
//             });
//             return;
//         }

//         if (hasToken.fimSessao) {
//             res.json({
//                 error: 1,
//                 msg: "Token de cliente expirado"
//             });
//             return;
//         }

//         next();
//     }
// }