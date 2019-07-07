import { Movie } from './movie.model';
import { Genre } from './genre.model';

export interface MovieResult {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
}

export interface GenreResult {
    page: number;
    total_results: number;
    total_pages: number;
    results: Genre[];
}