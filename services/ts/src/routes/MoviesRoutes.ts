import { Router} from 'express';
import {handleReqGetMovieById, handlePageReq, handlePageRes} from "../controller/MoviesController";
import {getMovieById, getPageFilm} from "../model/Movies";

const rt = Router();

rt.get('/movies/:film_id', handleReqGetMovieById, getMovieById);
rt.get('/movies', handlePageReq, getPageFilm, handlePageRes);

export default rt;