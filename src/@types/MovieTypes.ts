export interface MovieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface BelongsToCollection {
  backdrop_path: string;
  id: number;
  name: string;
  poster_path: string;
}

export type Genres =
  | { id: 28; name: 'Action' }
  | { id: 12; name: 'Adventure' }
  | { id: 16; name: 'Animation' }
  | { id: 35; name: 'Comedy' }
  | { id: 80; name: 'Crime' }
  | { id: 99; name: 'Documentary' }
  | { id: 18; name: 'Drama' }
  | { id: 10751; name: 'Family' }
  | { id: 14; name: 'Fantasy' }
  | { id: 36; name: 'History' }
  | { id: 27; name: 'Horror' }
  | { id: 10402; name: 'Music' }
  | { id: 9648; name: 'Mystery' }
  | { id: 10749; name: 'Romance' }
  | { id: 878; name: 'Science Fiction' }
  | { id: 10770; name: 'TV Movie' }
  | { id: 53; name: 'Thriller' }
  | { id: 10752; name: 'War' }
  | { id: 37; name: 'Western' };

interface ProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres: Genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
