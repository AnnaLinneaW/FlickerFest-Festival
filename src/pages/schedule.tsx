import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import 'src/app/globals.css';
import fetchFilms from './api/film';
import Film from '../types/film';
import useFilmByDay from '../hooks/useFilmByDay';
import MyLayout from '@/app/MyLayout';
import Image from 'next/image';

const SchedulePage: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const { friFilm, satFilm, sunFilm } = useFilmByDay(films);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilms(data);
    };

    fetchData();
  }, []);

  return (
    <MyLayout>
      <div>
        <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 bg-gray-700 text-white">
          <h2 className="text-4xl font-bold mb-4 font-mono">Schedule</h2>
          <div className="max-w-5xl w-full flex items-center justify-between font-mono text-sm flex-col sm:flex-row sm:space-x-8">
            {/* Fredag */}
            <div className="flex flex-col items-center justify-center mb-8 sm:mb-0">
              <h2 className="text-2xl font-bold mb-4">Fredag</h2>
              {friFilm.map((film) => (
                <div key={film.id} className="mb-4">
                  <h3 className="text-lg font-semibold">{film.title}</h3>
                  <Link href={`/film-details/${film.id}`}>
                    <Image
                      width={300}
                      height={400}
                      src={`/img/${film.poster}`}
                      alt={film.title}
                      className="cursor-pointer rounded-lg shadow-lg object-cover object-center"
                    />
                  </Link>
                  <div className="mt-2 text-gray-600">Time: {film.time}</div>
                </div>
              ))}
            </div>
            {/* Lördag */}
            <div className="flex flex-col items-center justify-center mb-8 sm:mb-0">
              <h2 className="text-2xl font-bold mb-4">Lördag</h2>
              {satFilm.map((film) => (
                <div key={film.id} className="mb-4">
                  <h3 className="text-lg font-semibold">{film.title}</h3>
                  <Link href={`/film-details/${film.id}`}>
                    <Image
                      width={300}
                      height={400}
                      src={`/img/${film.poster}`}
                      alt={film.title}
                      className="cursor-pointer rounded-lg shadow-lg object-cover object-center"
                    />
                  </Link>
                  <div className="mt-2 text-gray-600">Time: {film.time}</div>
                </div>
              ))}
            </div>
            {/* Söndag */}
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold mb-4">Söndag</h2>
              {sunFilm.map((film) => (
                <div key={film.id} className="mb-4">
                  <h3 className="text-lg font-semibold">{film.title}</h3>
                  <Link href={`/film-details/${film.id}`}>
                    <Image
                      width={300}
                      height={400}
                      src={`/img/${film.poster}`}
                      alt={film.title}
                      className="cursor-pointer rounded-lg shadow-lg object-cover object-center"
                    />
                  </Link>
                  <div className="mt-2 text-gray-600">Time: {film.time}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </MyLayout>
  );
};

export default SchedulePage;
