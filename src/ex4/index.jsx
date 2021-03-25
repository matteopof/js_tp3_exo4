import React, { useEffect, useState } from 'react';
import './ex4.css';
import Hero from './Hero';

const displayHeroes = (arr) => (
  <>
    <h1>Heroes :</h1>
    <div className="heroes_container">
      {
        arr.map(
          (ele) => <Hero name={ele.name} powerstats={ele.powerstats} images={ele.images} />,
        )
      }
    </div>
  </>
);

// eslint-disable-next-line import/prefer-default-export
export const ExerciseFourView = () => {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  });

  const badHeroes = superheroes
    .filter((superhero) => superhero.powerstats.intelligence < 20)
    .filter((superhero) => superhero.powerstats.power < 20)
    .filter((superhero) => superhero.powerstats.strength < 20)
    .filter((superhero) => superhero.powerstats.intelligence < 20);

  return (
    <main>
      {displayHeroes(badHeroes)}
    </main>
  );
};
