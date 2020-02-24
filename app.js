//https://expressjs.com/ko/guide/routing.html
//const express = require('express'); //express를 가져와라(호출)

//express를 import
import express from "express" //ES6으로 변경

//middleware추가
import morgan from "morgan"; //morgan logging에 도움을 주는 미들웨어
import helmet from "helmet"; //node.js의 보안에 도움
import cookieParser from "cookie-parser"; //
import bodyParser from "body-parser";
//import { userRouter } from "./router";

import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";


//express를 실행한 결과를 app상수로 만듦.
const app = express(); // 실행


// const handleHome = (req, res) => res.send('hello from home aadddda');

// function handleProfile(req, res){
//     res.send('you are on my profile');
// }
// const handleProfile = (req, res) => res.send('you are on my profile');

/* middleware - 중간 처리과정
const betweenHome = (req, res, next) => {
    console.log("I'm Between");
    next();
}
app.use(betweenHome); // 전역적으로 사용
*/

app.use(helmet());
app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:true}));
app.use(morgan("dev"));

app.use(localsMiddleware);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

/*
const middleware = (req, res, next) => {
    res.send('not happening');
}
*/
// app.get("/", handleHome);
//
// app.get("/profile", handleProfile);

//app.use("/user", userRouter); //use의 의미는 누군가 /user에 접속하면,




export default app; //app.use, get등 설정한 뭉탱으를 보내겠다