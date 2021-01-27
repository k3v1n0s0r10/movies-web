import { motion, Variants } from 'framer-motion';
import React, { Dispatch, SetStateAction } from 'react';

import { MovieData } from '../../@types/MovieTypes';
import config from '../../config';

import './MovieCard.scss';

interface Props {
  movie: MovieData;
  variants?: Variants;
  setSelectedId: Dispatch<SetStateAction<number | null>>;
}

const MovieCard: React.FC<Props> = ({ movie, variants, setSelectedId }) => {
  const { poster_path, original_title, vote_average } = movie;
  const { imageBaseUrl } = config;

  const Image = `${imageBaseUrl}w300${poster_path}`;

  return (
    <motion.div
      className='movie-card'
      variants={variants && variants}
      whileHover={{ scale: 1.1, cursor: 'pointer' }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setSelectedId(movie.id)}
      //@ts-ignore
      layoutId={movie.id}
    >
      <motion.img
        layoutId={movie.id + 'img'}
        src={Image}
        draggable='false'
        alt={original_title + ' poster'}
      />
      <span>
        {vote_average} / 10<i className='fas fa-star'></i>
      </span>
    </motion.div>
  );
};

export default MovieCard;
