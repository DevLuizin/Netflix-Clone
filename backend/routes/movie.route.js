import express from 'express';

import { 
    getTrendingMovie,
    getMovieTrailers, 
    getMovieDetails, 
    getMovieSimilar, 
    getMoviesByCategory,
} from '../controllers/movie.controller.js';

const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/:id/trailers", getMovieTrailers);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getMovieSimilar);
router.get("/:category", getMoviesByCategory);

export default router;