const express=require("express");
const app=express();
const port=process.env.port || 3000;
app.get('/', (req, res)=>{
    res.json([
        {
            "materia": "Desarrollo de aplicaciones web",
            "profesor": "Ing.Byron Loarte",
            "grupo": 3,
            "integrante1": "Joseph",
            "integrante2": "Marlon",
            "integrante3": "Isaac",
            "integrante4": "Michelle"
        }
    ])
})
app.listen(port, ()=>{
    console.log(`Servidor en puerto ${port}`);
})
