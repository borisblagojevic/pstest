import { Router} from 'express';
import {handleCreateReq, handleDeleteReq, handlePageReq, handlePageRes} from "../controller/ActorsController";
import {createActor, deleteActor, getActor, getPageActor} from "../model/Actor";

const at = Router();

at.get('/actors', handlePageReq, getPageActor, handlePageRes);

at.post('/actors', handleCreateReq, createActor);

at.delete('/actors/:id', handleDeleteReq(false), getActor, deleteActor, handleDeleteReq(true));

export default at;
