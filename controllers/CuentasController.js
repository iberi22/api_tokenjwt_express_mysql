const Cuentas = require('../models').Cuentas;


const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let cuentas_json =[]
    for( let i in cuentas){
        let Cuentas = cuentas[i];
        let Cuentas_info = Cuentas.toWeb();
    }
        Cuentas_info.users = users_info;
        cuentas_json.push(Cuentas_info);
    console.log('c t', cuentas_json);
    return ReS(res, {cuentas:cuentas_json});
}


// const getAll = async function(req, res){

//   res.setHeader('Content-Type', 'application/json');

//    user.findAll({
//   where:{
//     is_active:'1',
//     name:{$like:'%%'}
//   },
//   limit:10
// }).then(function(users){
//   console.log(users);
//   res.send({error:false,message:'users list',data:users});
// }).catch(function(err){
//   console.log('Oops! something went wrong, : ', err);
// });
// }
// module.exports.getAll = getAll;



const get = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let Cuentas = req.Cuentas;
    return ReS(res, {Cuentas:Cuentas.toWeb()});
}
module.exports.get = get;
