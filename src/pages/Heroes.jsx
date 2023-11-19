import { useLoaderData } from 'react-router-dom';
import HeroesList from '../components/HeroesList';

function Heroes() {

  // Step 1 : Get Heroes data from loader
  const heroes = useLoaderData();

  return (
    <main>
      <HeroesList heroes={heroes} />
    </main>
  )
}

export const HeroesLoader = () => {
  return fetch("https://akabab.github.io/superhero-api/api/all.json");
}


export default Heroes;