import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

import { MovieDetails } from '../../@types/MovieTypes';
import config from '../../config';

import './MovieModal.scss';

interface Props {
  selectedId: number;
  setSelectedId: Dispatch<SetStateAction<number | null>>;
}

const MovieModal: React.FC<Props> = ({ selectedId, setSelectedId }) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  const { BaseApiUrl, ApiKey, imageBaseUrl } = config;

  const Image = `${imageBaseUrl}w780${movieDetails?.backdrop_path}`;

  useEffect(() => {
    fetch(`${BaseApiUrl}${selectedId}?api_key=${ApiKey}&language=en-US`)
      .then((data) => data.json())
      .then((data: MovieDetails) => setMovieDetails(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='modal-container' onClick={() => setSelectedId(null)}>
      <motion.div
        variants={modalAnim}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='movie-modal'
        //@ts-ignore
        layoutId={selectedId}
      >
        <motion.img
          layoutId={selectedId + 'img'}
          draggable='false'
          src={Image}
          alt={movieDetails?.original_title + ' poster'}
        />
        <div className='content'></div>
      </motion.div>
    </div>
  );
};

export default MovieModal;

const modalAnim: Variants = {
  hidden: { opacity: 0, scale: 0, transition: { duration: 0.4 } },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};
