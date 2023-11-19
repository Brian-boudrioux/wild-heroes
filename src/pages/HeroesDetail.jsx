import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HeroesItem from '../components/HeroesItem';

function HeroesDetail() {

  // Step 4 : get id params, fetch api with the given id, show the data
  // const { id } = useParams();
  // const [heroe, setHeroe] = useState(null);

  // useEffect(() => {
  //   fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
  //     .then((res) => res.json())
  //     .then((data) => setHeroe(data));
  // }, []);

  const heroe = useLoaderData();
  const navigate = useNavigate();

  return (
    <main>
      <button type='button' onClick={() => navigate("/")}>Back to the list</button>
      <HeroesItem heroe={heroe} />
    </main>
  )
}

export const HeroeLoader = ({params}) => {
  return fetch(`https://akabab.github.io/superhero-api/api/id/${params.id}.json`);
}

export default HeroesDetail;