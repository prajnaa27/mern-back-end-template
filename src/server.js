import express from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes';

const app=express();

//a basic endpoint
//app.get('/hello',(req,res)=>{
    //res.send("Helllo bitch!!!");
//})

//instead of doing the above methode we can now use foreach

app.use(bodyParser.json()); // 

routes.forEach(route=>{
    app[route.method](route.path,route.handler);
})

app.listen(8000,()=>{
    console.log("Server is listening on port 8000");
});