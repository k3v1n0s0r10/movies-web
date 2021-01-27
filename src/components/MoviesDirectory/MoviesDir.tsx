import React, { useState } from 'react';
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  Variants,
} from 'framer-motion';

import { MovieData } from '../../@types/MovieTypes';

import MovieCard from '../MovieCard/MovieCard';
import MovieModal from '../MovieModal/MovieModal';

import './MoviesDir.scss';

interface Props {
  movies: MovieData[];
}

const MoviesDir: React.FC<Props> = ({ movies }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <motion.div
      variants={containerAnim}
      className='movies-dir'
      initial='hidden'
      animate='visible'
    >
      <AnimateSharedLayout>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            variants={itemAnim}
            setSelectedId={setSelectedId}
          />
        ))}
        <AnimatePresence exitBeforeEnter>
          {selectedId && (
            <MovieModal selectedId={selectedId} setSelectedId={setSelectedId} />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </motion.div>
  );
};

export default MoviesDir;

const containerAnim: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemAnim: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
