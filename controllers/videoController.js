import { videos } from "../db";
import routes from "../routes"
export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => {
    //const searchingBy = req.query.term; //ES6 이전방식
    const {
        query: { term: searchingBy }
    } = req; //위와 같은 ES6 코드
    res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
    res.render("upload", {pageTitle: "Upload"});
export const postUpload = (req, res) => {
    const {
        body: { file, title, description }
    } = req;
    //To Do: upload and save video
    res.redirect(routes.videoDetail(121212));
};

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle: "Video Detail"});

export const editVideo = (req, res) => res.render("editVideo", {pageTitle: "Edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle: "Delete Video"});
