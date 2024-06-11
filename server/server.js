import express from 'express';
import path from 'path';

const app = express();
const dir = path.resolve();
const dir_front = path.join(dir, '..', 'client', 'build');

app.use(express.static(dir_front));
app.use(express.json())
app.use(express.urlencoded({}))

app.listen(5000, function(){
    console.log("Servidor ha iniciado en el puerto 5000");
});

app.get('/', function(req, res){
    res.sendFile(path.join(dir_front, 'index.html'));
});

app.get('/register_page', function(req, res){
    res.sendFile(path.join(dir_front, 'index.html'));
});

app.get('/consult_page', (req, res) => {
    res.sendFile(path.join(dir_front, 'index.html'));
});

app.get('/contact_page', (req, res) => {
    res.sendFile(path.join(dir_front, 'index.html'));
});


app.post("/register_user", function (req, res){
    let {nombre, apellido, id} = req.body
    console.log(nombre + " " + apellido + " " + id)
    res.sendFile(path.join(dir_front, 'index.html'));
    res.redirect("/")
})