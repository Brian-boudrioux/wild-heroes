import HeroesItem from "./HeroesItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function HeroesList({ heroes }) {
  // Step 2 : get heroes data from props and map it to generate HeroesItem

  // Step 6 : add filters input for filter heroes by name
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function updateSearch(heroe) {
    return (
      heroe.name.toLowerCase().includes(search.toLowerCase()) || 
      heroe.biography.fullName.toLowerCase().includes(search.toLowerCase())
    ) ? true : false;
  }

  return (
    <>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {heroes.filter((heroe) => updateSearch(heroe)).map((heroe) => (
        <>
          <HeroesItem key={heroe.id} heroe={heroe} />
          <button type="button" onClick={() => navigate(`/heroes/${heroe.id}`)}>
            Voir le détail
          </button>
        </>
      ))}
    </>
  );
}

export default HeroesList;
