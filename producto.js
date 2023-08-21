const express = require("express");

const mysql = require('mysql2');
const app = express();

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tienda'
});

conexion.connect((err) => {
    if (err){
        throw err;
    } else {
        console.log("conexion exitosa")
    }
});
app.use(express.json());
/*
app.post('/prod',(req,res)=>
{

    data={
            id_producto:req.body.id.producto,
            id_tipo:req.body.id_tipo,
            precio_compra:req.body.precio_compra,
            precio_venta:req.body.precio_venta,
            cantidad:req.body.cantidad,
            activo:req.body.activo,

    }
});

    let sql= "insert into tproducto set?";
    conexion.query(sql,data,(err, resul)=>{
        if(err){
            console.log(err,resul);
            res.json({mensaje:'error inesperado'});
        }else{
            res.json(resul);
        }
});
*/
app.get("/prod",(req,res)=>{
    let sql= 'Select * FROM tproducto';
    conexion.query(sql,(err,resul)=>{
        if(err){
           console.log(err.message);
           res.json({mensaje:'Error insperado'});
        }else{
            res.json(resul);
        }
        });
    });

/*
app.get(('/saludo/:edad'), (req, res) => {
    res.send(`tienes la edad de: ${req.params.edad}`);
});
*/
app.listen(3000, () => {
    console.log("servidor Ok en puerto 3000");
});