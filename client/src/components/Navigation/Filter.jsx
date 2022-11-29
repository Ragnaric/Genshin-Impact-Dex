import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Filter = ({characters, setCharacters, allCharacters}) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [filters, setFilters] = useState([]);

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

  // useEffect(() => {
  //   if (filters.length === 0) {
  //     setCharacters(allCharacters);
  //   } else {
  //     let queryString = '';
  //     for (let i = 0; i < filters.length; i+=2) {
  //       if (i === 0) {
  //         queryString += '/characters?' + filters[i] + '=' + filters[i + 1];
  //       } else {
  //         queryString += '&' + filters[i] + '=' + filters[i + 1];
  //       }
  //     }

  //     axios.get(queryString)
  //       .then(res => {
  //         setCharacters(res.data);
  //       })
  //       .catch(err => console.error(err.stack));
  //   }
  // }, [isFiltered]);

  useEffect(() => {
    if (filters.length === 0) {
      setCharacters(allCharacters);
    } else {
      let filteredResults = [];
      allCharacters.forEach(character => {
        for (let i = 1; i < filters.length; i +=2) {
          if (character.element === filters[i] || character.weapon === filters[i]) {
            filteredResults.push(character);
          }
        }
      });
      //console.log('results', filteredResults, 'filters', filters)
      setCharacters(filteredResults);
    }
  }, [isFiltered]);

  const addFilters = (category, keyword) => {
    let newFilters = filters.slice();
    newFilters.push(category, keyword);
    setFilters(newFilters);
  };

  const removeFilters = (category, keyword) => {
    let newFilters = filters.slice();
    newFilters.splice(newFilters.indexOf(category), 1);
    newFilters.splice(newFilters.indexOf(keyword), 1);
    setFilters(newFilters);
  };

  return (
    <div className="w-3/4 m-auto">
      <div className='text-amber-200 text-xl text-center m-5'>Filter by Element</div>
      <div className="flex space-x-10 justify-center">
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isAnemo ? 'url(https://preview.redd.it/5cgw3tah2ay71.png?width=360&format=png&auto=webp&s=0d7852de9d666068a8b164264d507b16deba27fa)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/1/10/Element_Anemo.svg)'}} onClick={(event) => {
          if (!isAnemo) {
            setIsAnemo(!isAnemo);
            addFilters('element', 'Anemo');
          } else {
            setIsAnemo(!isAnemo);
            removeFilters('element', 'Anemo');
          }
          setIsFiltered(!isFiltered);
        }}>Anemo</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isGeo ? 'url(https://preview.redd.it/n5ej1aeo2ay71.png?width=360&format=png&auto=webp&s=29b111b484dbf8419ffa628b4d76dd708a1515f2)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Element_Geo.svg)'}} onClick={(event) => {
          if (!isGeo) {
            setIsGeo(!isGeo);
            addFilters('element', 'Geo');
          } else {
            setIsGeo(!isGeo);
            removeFilters('element', 'Geo');
          }
          setIsFiltered(!isFiltered);
        }}>Geo</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isPyro ? 'url(https://preview.redd.it/f62yf4o95ay71.png?width=360&format=png&auto=webp&s=a3713c25c9088ca0b9321eed295ec2bca3d0d4b2)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/2/2c/Element_Pyro.svg)'}} onClick={(event) => {
          if (!isPyro) {
            setIsPyro(!isPyro);
            addFilters('element', 'Pyro');
          } else {
            setIsPyro(!isPyro);
            removeFilters('element', 'Pyro');
          }
          setIsFiltered(!isFiltered);
        }}>Pyro</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isElectro ? 'url(https://preview.redd.it/0ps0mocb3ay71.png?width=360&format=png&auto=webp&s=22b893ac1c5b496b231942bf6b9c54dc22a4a368)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Element_Electro.svg)'}} onClick={(event) => {
          if (!isElectro) {
            setIsElectro(!isElectro);
            addFilters('element', 'Electro');
          } else {
            setIsElectro(!isElectro);
            removeFilters('element', 'Electro');
          }
          setIsFiltered(!isFiltered);
        }}>Electro</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isHydro ? 'url(https://preview.redd.it/zwarjvzk4ay71.png?width=360&format=png&auto=webp&s=c755931829096e5a41936c66424905b0454cbb57)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/8/80/Element_Hydro.svg)'}} onClick={(event) => {
          if (!isHydro) {
            setIsHydro(!isHydro);
            addFilters('element', 'Hydro');
          } else {
            setIsHydro(!isHydro);
            removeFilters('element', 'Hydro');
          }
          setIsFiltered(!isFiltered);
        }}>Hydro</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isCryo ? 'url(https://preview.redd.it/a8kju4zk5ay71.png?width=360&format=png&auto=webp&s=c7483a9a99cd111432e43d823dd85ca2d31891da)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/7/72/Element_Cryo.svg)'}} onClick={(event) => {
          if (!isCryo) {
            setIsCryo(!isCryo);
            addFilters('element', 'Cryo');
          } else {
            setIsCryo(!isCryo);
            removeFilters('element', 'Cryo');
          }
          setIsFiltered(!isFiltered);
        }}>Cryo</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-contain text-center leading-[80px]" style={{backgroundImage: isDendro ? 'url(https://preview.redd.it/w7jmevct3ay71.png?width=360&format=png&auto=webp&s=5ea427a55c2d573dcddd3bb47e63823fd512df5b)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/7/73/Element_Dendro.svg)'}} onClick={(event) => {
          if (!isDendro) {
            setIsDendro(!isDendro);
            addFilters('element', 'Dendro');
          } else {
            setIsDendro(!isDendro);
            removeFilters('element', 'Dendro');
          }
          setIsFiltered(!isFiltered);
        }}>Dendro</div>
      </div>
      <div className='text-amber-200 text-xl text-center m-5'>Filter by Weapon</div>
      <div className="flex space-x-10 justify-center">
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png)', borderStyle: isBow ? 'solid' : '', borderWidth: isBow ? '4px' : '', borderRadius: isBow ? '9999px' : ''}} onClick={(event) => {
          if (!isBow) {
            setIsBow(!isBow);
            addFilters('weapon', 'Bow');
          } else {
            setIsBow(!isBow);
            removeFilters('weapon', 'Bow');
          }
          setIsFiltered(!isFiltered);
        }}>Bow</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png)', borderStyle: isSword ? 'solid' : '', borderWidth: isSword ? '4px' : '', borderRadius: isSword ? '9999px' : ''}} onClick={(event) => {
          if (!isSword) {
            setIsSword(!isSword);
            addFilters('weapon', 'Sword');
          } else {
            setIsSword(!isSword);
            removeFilters('weapon', 'Sword');
          }
          setIsFiltered(!isFiltered);
        }}>Sword</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png)', borderStyle: isPolearm ? 'solid' : '', borderWidth: isPolearm ? '4px' : '', borderRadius: isPolearm ? '9999px' : ''}} onClick={(event) => {
          if (!isPolearm) {
            setIsPolearm(!isPolearm);
            addFilters('weapon', 'Polearm');
          } else {
            setIsPolearm(!isPolearm);
            removeFilters('weapon', 'Polearm');
          }
          setIsFiltered(!isFiltered);
        }}>Polearm</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png)', borderStyle: isCatalyst ? 'solid' : '', borderWidth: isCatalyst ? '4px' : '', borderRadius: isCatalyst ? '9999px' : ''}} onClick={(event) => {
          if (!isCatalyst) {
            setIsCatalyst(!isCatalyst);
            addFilters('weapon', 'Catalyst');
          } else {
            setIsCatalyst(!isCatalyst);
            removeFilters('weapon', 'Catalyst');
          }
          setIsFiltered(!isFiltered);
        }}>Catalyst</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png)', borderStyle: isClaymore ? 'solid' : '', borderWidth: isClaymore ? '4px' : '', borderRadius: isClaymore ? '9999px' : ''}} onClick={(event) => {
          if (!isClaymore) {
            setIsClaymore(!isClaymore);
            addFilters('weapon', 'Claymore');
          } else {
            setIsClaymore(!isClaymore);
            removeFilters('weapon', 'Claymore');
          }
          setIsFiltered(!isFiltered);
        }}>Claymore</div>
      </div>
    </div>
  );
};

export default Filter;