import express, { response } from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());

const video = "./resources/mario.mp4";
const image = "resources/cookie.png";

app.get("/", function(request,response){
    response.json("Server");
});

app.get("/video", function(request,response){
    response.json(video);
});


app.get("/image", function(request,response){
    response.json(image);
});

app.listen(8080, function(){
    console.log("Port 8080");
});