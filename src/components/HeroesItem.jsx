function HeroesItem({heroe}) {
  // Step 3 : get Heroe data from props and display them
 

  return (
    <>
      <p>{heroe.name}</p>
      <p>{heroe.biography?.alignment}</p>
      {heroe.images?.xs && <img alt="heroeIcon" src={heroe.images.xs} />}
    </>
  );
}

export default HeroesItem;
