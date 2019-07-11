import { Movie } from './movie.model';
import { Genre } from './genre.model';

export interface Result {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
}

export interface GeneroResult {
    genres: Genre[]
}

