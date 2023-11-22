// pages/film-details/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import 'src/app/globals.css';
import { useState } from 'react';
import Film from '../../types/film';
import fetchFilms from '../api/film';
import MyLayout from '@/app/MyLayout';
import Image from 'next/image';

const FilmDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [films, setFilms] = useState<Film[]>([]);
  const [currentFilm, setCurrentFilm] = useState<Film | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilms(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (id && films.length > 0) {
      const film = films.find((film) => film.id === Number(id));
      setCurrentFilm(film || null);
    }
  }, [id, films]);

  return (
    <MyLayout>
      <main
        className="flex min-h-[112vh] flex-col items-center justify-between p-50 relative"
        style={{
          backgroundImage: `url(/img/${currentFilm?.poster})`,
          backgroundSize: 'cover',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
            textAlign: 'left',
            padding: '4rem',
          }}
        >
          <div className="flex flex-col items-center">
            {currentFilm && (
              <div className="max-w-5xl">
                <h2 className="text-3xl pb-3 font-bold mb-4">
                  {currentFilm.title}
                </h2>
                <Image
                  width={300}
                  height={400}
                  className="mb-4"
                  src={`/img/${currentFilm.poster}`}
                  alt={currentFilm.title}
                />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p>
                      <span className="font-bold">Year:</span>{' '}
                      {currentFilm.year}
                    </p>
                    <p>
                      <span className="font-bold">Director:</span>{' '}
                      {currentFilm.director}
                    </p>
                    <p>
                      <span className="font-bold">Stars:</span>{' '}
                      {currentFilm.stars.join(', ')}
                    </p>
                    <p>
                      <span className="font-bold">Duration:</span>{' '}
                      {currentFilm.duration}
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-bold">Genre:</span>{' '}
                      {currentFilm.genre.join(', ')}
                    </p>
                    <p>
                      <span className="font-bold">Language:</span>{' '}
                      {currentFilm.language}
                    </p>
                    <p>
                      <span className="font-bold">Time:</span>{' '}
                      {currentFilm.time}
                    </p>
                    <p>
                      <span className="font-bold">Day:</span> {currentFilm.day}
                    </p>
                  </div>
                </div>
                <p className="mt-4">
                  <span className="font-bold">About:</span> {currentFilm.about}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </MyLayout>
  );
};

export default FilmDetails;
