import Film from '../../types/film';

export const allFilms: Film[] = [];

const fetchFilms = async (): Promise<Film[]> => {
  try {
    const res = await fetch('http://localhost:3001/film');

    if (!res.ok) {
      throw new Error(`API-anropet misslyckades med status: ${res.status}`);
    }

    const data: Film[] = await res.json();
    allFilms.push(...data);
    return data;
  } catch (error) {
    console.error('Fel vid hämtning av data från API:', error);

    throw error;
  }
};

export default fetchFilms;

const searchFilms = async (search: string): Promise<any> => {
  try {
    const res = await fetch(`http://localhost:3001/film/search/${search}`);

    if (!res.ok) {
      throw new Error(`API-anropet misslyckades med status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Fel vid hämtning av data från API:', error);

    throw error;
  }
};

export { searchFilms };
