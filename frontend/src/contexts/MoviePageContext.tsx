import { createContext, useContext } from 'react';
import { MovieDetailDTO } from 'src/apis/services/movie/types';

export interface MovieContextValue {
    movie: MovieDetailDTO;
}

export const MovieContext = createContext<MovieContextValue | null>(null);

export const useMovie = () => {
    const ctx = useContext(MovieContext);
    if (!ctx) throw new Error('useMovie must be used inside MovieContext.Provider');
    return ctx;
};