import { Router} from 'express';
import {handlePageReq} from "../controller/MoviesController";

const rt = Router();

rt.get('/movies', handlePageReq);

export default rt;