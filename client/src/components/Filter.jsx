import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Filter = ({characters, setCharacters, allCharacters}) => {
  const [isFiltered, setIsFiltered] = useState(false);

  const [isAnemo, setIsAnemo] = useState(false);
  const [isGeo, setIsGeo] = useState(false);
  const [isPyro, setIsPyro] = useState(false);
  const [isElectro, setIsElectro] = useState(false);
  const [isHydro, setIsHydro] = useState(false);
  const [isCryo, setIsCryo] = useState(false);
  const [isDendro, setIsDendro] = useState(false);
  const [isBow, setIsBow] = useState(false);
  const [isSword, setIsSword] = useState(false);
  const [isPolearm, setIsPolearm] = useState(false);
  const [isCatalyst, setIsCatalyst] = useState(false);
  const [isClaymore, setIsClaymore] = useState(false);

  useEffect(() => {
    setCharacters(allCharacters);
      if (isAnemo) {
        filterList('Anemo');
      }
      if (isGeo) {
        filterList('Geo');
      }
      if (isPyro) {
        filterList('Pyro');
      }
      if (isElectro) {
        filterList('Electro');
      }
      if (isHydro) {
        filterList('Hydro');
      }
      if (isCryo) {
        filterList('Cryo');
      }
      if (isDendro) {
        filterList('Dendro');
      }
      if (isBow) {
        filterList('Bow');
      }
      if (isSword) {
        filterList('Sword');
      }
      if (isPolearm) {
        filterList('Polearm');
      }
      if (isCatalyst) {
        filterList('Catalyst');
      }
      if (isClaymore) {
        filterList('Claymore');
      }
  }, [isFiltered]);

  const filterList = (keyword) => {
      let updatedList = [];
      characters.forEach(character => {
        if (character.element && character.element === keyword) {
          updatedList.push(character);
        }
        if (character.weapon && character.weapon === keyword) {
          updatedList.push(character);
        }
      })
      setCharacters(updatedList);
  };

  return (
    <div className="w-3/4 m-auto">
      <div className='text-amber-200 text-xl text-center m-5'>Filter by Element</div>
      <div className="flex space-x-10 justify-center">
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isAnemo ? 'url(https://preview.redd.it/5cgw3tah2ay71.png?width=360&format=png&auto=webp&s=0d7852de9d666068a8b164264d507b16deba27fa)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/1/10/Element_Anemo.svg)'}} onClick={(event) => {
          if (!isAnemo) {
            setIsAnemo(!isAnemo);
            filterList('Anemo');
          } else {
            setIsAnemo(!isAnemo);
            setCharacters(allCharacters);
          }
          setIsFiltered(!isFiltered);
        }}>Anemo</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isGeo ? 'url(https://preview.redd.it/n5ej1aeo2ay71.png?width=360&format=png&auto=webp&s=29b111b484dbf8419ffa628b4d76dd708a1515f2)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Element_Geo.svg)'}} onClick={(event) => {
          if (!isGeo) {
            setIsGeo(!isGeo);
            filterList('Geo');
          } else {
            setIsGeo(!isGeo);
            setCharacters(allCharacters);
          }
          setIsFiltered(!isFiltered);
        }}>Geo</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isPyro ? 'url(https://preview.redd.it/f62yf4o95ay71.png?width=360&format=png&auto=webp&s=a3713c25c9088ca0b9321eed295ec2bca3d0d4b2)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/2/2c/Element_Pyro.svg)'}} onClick={(event) => {
          if (!isPyro) {
            setIsPyro(!isPyro);
            filterList('Pyro')
          } else {
            setIsPyro(!isPyro);
            setCharacters(allCharacters);
          }
          setIsFiltered(!isFiltered);
        }}>Pyro</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isElectro ? 'url(https://preview.redd.it/0ps0mocb3ay71.png?width=360&format=png&auto=webp&s=22b893ac1c5b496b231942bf6b9c54dc22a4a368)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Element_Electro.svg)'}} onClick={(event) => {
          if (!isElectro) {
            setIsElectro(!isElectro);
            filterList('Electro');
          } else {
            setIsElectro(!isElectro);
            setCharacters(allCharacters);
          }
          setIsFiltered(!isFiltered);
        }}>Electro</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isHydro ? 'url(https://preview.redd.it/zwarjvzk4ay71.png?width=360&format=png&auto=webp&s=c755931829096e5a41936c66424905b0454cbb57)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/8/80/Element_Hydro.svg)'}} onClick={(event) => {
          if (!isHydro) {
            setIsHydro(!isHydro);
            filterList('Hydro')
          } else {
            setIsHydro(!isHydro);
            setCharacters(allCharacters);
          }
          setIsFiltered(!isFiltered);
        }}>Hydro</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isCryo ? 'url(https://preview.redd.it/a8kju4zk5ay71.png?width=360&format=png&auto=webp&s=c7483a9a99cd111432e43d823dd85ca2d31891da)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/7/72/Element_Cryo.svg)'}} onClick={(event) => {
          if (!isCryo) {
            setIsCryo(!isCryo);
            filterList('Cryo')
          } else {
            setIsCryo(!isCryo);
            setCharacters(allCharacters);
          }
          setIsFiltered(!isFiltered);
        }}>Cryo</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-contain text-center leading-[80px]" style={{backgroundImage: isDendro ? 'url(https://preview.redd.it/w7jmevct3ay71.png?width=360&format=png&auto=webp&s=5ea427a55c2d573dcddd3bb47e63823fd512df5b)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/7/73/Element_Dendro.svg)'}} onClick={(event) => {
          if (!isDendro) {
            setIsDendro(!isDendro);
            filterList('Dendro');
          } else {
            setIsDendro(!isDendro);
            setCharacters(allCharacters);
          }
          setIsFiltered(!isFiltered);
        }}>Dendro</div>
      </div>
      <div className='text-amber-200 text-xl text-center m-5'>Filter by Weapon</div>
      <div className="flex space-x-10 justify-center">
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png)'}} onClick={(event) => {
          if (!isBow) {
            setIsBow(!isBow);
            filterList('Bow');
          } else {
            setIsBow(!isBow);
            setCharacters(allCharacters);
          }
          setIsFiltered(!isFiltered);
        }}>Bow</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png)'}} onClick={(event) => {
          if (!isSword) {
            setIsSword(!isSword);
            filterList('Sword');
          } else {
            setIsSword(!isSword);
            setCharacters(allCharacters);
          }
          setIsFiltered(!isFiltered);
        }}>Sword</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png)'}} onClick={(event) => {
          if (!isPolearm) {
            setIsPolearm(!isPolearm);
            filterList('Polearm');
          } else {
            setIsPolearm(!isPolearm);
            setCharacters(allCharacters);
          }
          setIsFiltered(!isFiltered);
        }}>Polearm</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png)'}} onClick={(event) => {
          if (!isCatalyst) {
            setIsCatalyst(!isCatalyst);
            filterList('Catalyst')
          } else {
            setIsCatalyst(!isCatalyst);
            setCharacters(allCharacters);
          }
          setIsFiltered(!isFiltered);
        }}>Catalyst</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png)'}} onClick={(event) => {
          if (!isClaymore) {
            setIsClaymore(!isClaymore);
            filterList('Claymore');
          } else {
            setIsClaymore(!isClaymore);
            setCharacters(allCharacters);
          }
          setIsFiltered(!isFiltered);
        }}>Claymore</div>
      </div>
    </div>
  );
};

export default Filter;