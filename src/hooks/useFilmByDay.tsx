import { useEffect, useState } from 'react';
import Film from '@/types/film';

const useFilmByDay = (films: Film[]) => {
  const [friFilm, setFriFilm] = useState<Film[]>([]);
  const [satFilm, setSatFilm] = useState<Film[]>([]);
  const [sunFilm, setSunFilm] = useState<Film[]>([]);

  useEffect(() => {
    const filterFilmsByDay = (day: string) =>
      films.filter((film) => film.day === day);

    const sortFilmsByTime = (filmArray: Film[]) =>
      filmArray.sort((a, b) => {
        const timeA = a.time.split(':').map(Number);
        const timeB = b.time.split(':').map(Number);

        // Sortera efter timme och minut
        if (timeA[0] !== timeB[0]) {
          return timeA[0] - timeB[0];
        } else {
          return timeA[1] - timeB[1];
        }
      });

    setFriFilm(sortFilmsByTime(filterFilmsByDay('Friday')));
    setSatFilm(sortFilmsByTime(filterFilmsByDay('Saturday')));
    setSunFilm(sortFilmsByTime(filterFilmsByDay('Sunday')));
  }, [films]);

  return { friFilm, satFilm, sunFilm };
};

export default useFilmByDay;
