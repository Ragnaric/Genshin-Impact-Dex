import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Filter = ({characters, setCharacters, allCharacters}) => {
  const [elementList, setElementList] = useState([]);
  const [weaponList, setWeaponList] = useState([]);
  const [rarityList, setRarityList] = useState([]);
  const [regionList, setRegionList] = useState([]);

  const [filters, setFilters] = useState({});

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
    console.log('filters', filters);
    if (elementList.length === 0 && weaponList.length === 0) {
      setCharacters(allCharacters);
    } else {
      let filteredList = [];
      allCharacters.forEach(character => {
        let isPresentInAll = true;
        for (let key in filters) {
          if (filters[key].indexOf(character) === -1) {
            isPresentInAll = false;
            return;
          }
        }
        if (isPresentInAll) {
          filteredList.push(character);
        }
      });
      setCharacters(filteredList);
    }
  }, [elementList, weaponList]);

  const filterByElement = (keyword) => {
    let newList = elementList.slice();
    allCharacters.forEach(character => {
      if (character.element === keyword) {
        newList.push(character);
      }
    });
    setElementList(newList);
    let newFilters = filters;
    newFilters.element = newList;
    setFilters(newFilters);
  };

  const removeElement = (keyword) => {
    let newList = elementList.slice();
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].element === keyword) {
        newList.splice(i, 1);
        i--;
      }
    }
    setElementList(newList);
    let newFilters = filters;
    newFilters.element = newList;
    setFilters(newFilters);
    if (newList.length === 0) {
      let newFilters = filters;
      delete newFilters.element;
      setFilters(newFilters);
    }
  };

  const filterByWeapon = (keyword) => {
    let newList = weaponList.slice();
    allCharacters.forEach(character => {
      if (character.weapon === keyword) {
        newList.push(character);
      }
    })
    setWeaponList(newList);
    let newFilters = filters;
    newFilters.weapon = newList;
    setFilters(newFilters);
  };

  const removeWeapon = (keyword) => {
    let newList = weaponList.slice();
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].weapon === keyword) {
        newList.splice(i, 1);
        i--;
      }
    }
    setWeaponList(newList);
    let newFilters = filters;
    newFilters.weapon = newList;
    setFilters(newFilters);
    if (newList.length === 0) {
      let newFilters = filters;
      delete newFilters.weapon;
      setFilters(newFilters);
    }
  };

  return (
    <div className="w-3/4 m-auto">
      <div className='text-amber-200 text-xl text-center m-5'>Filter by Element</div>
      <div className="flex space-x-10 justify-center">
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isAnemo ? 'url(https://preview.redd.it/5cgw3tah2ay71.png?width=360&format=png&auto=webp&s=0d7852de9d666068a8b164264d507b16deba27fa)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/1/10/Element_Anemo.svg)'}} onClick={(event) => {
          if (!isAnemo) {
            setIsAnemo(!isAnemo);
            filterByElement('Anemo');
          } else {
            setIsAnemo(!isAnemo);
            removeElement('Anemo');
          }
        }}>Anemo</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isGeo ? 'url(https://preview.redd.it/n5ej1aeo2ay71.png?width=360&format=png&auto=webp&s=29b111b484dbf8419ffa628b4d76dd708a1515f2)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Element_Geo.svg)'}} onClick={(event) => {
          if (!isGeo) {
            setIsGeo(!isGeo);
            filterByElement('Geo');
          } else {
            setIsGeo(!isGeo);
            removeElement('Geo');
          }
        }}>Geo</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isPyro ? 'url(https://preview.redd.it/f62yf4o95ay71.png?width=360&format=png&auto=webp&s=a3713c25c9088ca0b9321eed295ec2bca3d0d4b2)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/2/2c/Element_Pyro.svg)'}} onClick={(event) => {
          if (!isPyro) {
            setIsPyro(!isPyro);
            filterByElement('Pyro');
          } else {
            setIsPyro(!isPyro);
            removeElement('Pyro');
          }
        }}>Pyro</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isElectro ? 'url(https://preview.redd.it/0ps0mocb3ay71.png?width=360&format=png&auto=webp&s=22b893ac1c5b496b231942bf6b9c54dc22a4a368)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Element_Electro.svg)'}} onClick={(event) => {
          if (!isElectro) {
            setIsElectro(!isElectro);
            filterByElement('Electro');
          } else {
            setIsElectro(!isElectro);
            removeElement('Electro');
          }
        }}>Electro</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isHydro ? 'url(https://preview.redd.it/zwarjvzk4ay71.png?width=360&format=png&auto=webp&s=c755931829096e5a41936c66424905b0454cbb57)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/8/80/Element_Hydro.svg)'}} onClick={(event) => {
          if (!isHydro) {
            setIsHydro(!isHydro);
            filterByElement('Hydro');
          } else {
            setIsHydro(!isHydro);
            removeElement('Hydro');
          }
        }}>Hydro</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isCryo ? 'url(https://preview.redd.it/a8kju4zk5ay71.png?width=360&format=png&auto=webp&s=c7483a9a99cd111432e43d823dd85ca2d31891da)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/7/72/Element_Cryo.svg)'}} onClick={(event) => {
          if (!isCryo) {
            setIsCryo(!isCryo);
            filterByElement('Cryo');
          } else {
            setIsCryo(!isCryo);
            removeElement('Cryo');
          }
        }}>Cryo</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-contain text-center leading-[80px]" style={{backgroundImage: isDendro ? 'url(https://preview.redd.it/w7jmevct3ay71.png?width=360&format=png&auto=webp&s=5ea427a55c2d573dcddd3bb47e63823fd512df5b)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/7/73/Element_Dendro.svg)'}} onClick={(event) => {
          if (!isDendro) {
            setIsDendro(!isDendro);
            filterByElement('Dendro');
          } else {
            setIsDendro(!isDendro);
            removeElement('Dendro');
          }
        }}>Dendro</div>
      </div>
      <div className='text-amber-200 text-xl text-center m-5'>Filter by Weapon</div>
      <div className="flex space-x-10 justify-center">
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png)', borderStyle: isBow ? 'solid' : '', borderWidth: isBow ? '4px' : '', borderRadius: isBow ? '9999px' : ''}} onClick={(event) => {
          if (!isBow) {
            setIsBow(!isBow);
            filterByWeapon('Bow');
          } else {
            setIsBow(!isBow);
            removeWeapon('Bow');
          }
        }}>Bow</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png)', borderStyle: isSword ? 'solid' : '', borderWidth: isSword ? '4px' : '', borderRadius: isSword ? '9999px' : ''}} onClick={(event) => {
          if (!isSword) {
            setIsSword(!isSword);
            filterByWeapon('Sword');
          } else {
            setIsSword(!isSword);
            removeWeapon('Sword');
          }
        }}>Sword</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png)', borderStyle: isPolearm ? 'solid' : '', borderWidth: isPolearm ? '4px' : '', borderRadius: isPolearm ? '9999px' : ''}} onClick={(event) => {
          if (!isPolearm) {
            setIsPolearm(!isPolearm);
            filterByWeapon('Polearm');
          } else {
            setIsPolearm(!isPolearm);
            removeWeapon('Polearm');
          }
        }}>Polearm</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png)', borderStyle: isCatalyst ? 'solid' : '', borderWidth: isCatalyst ? '4px' : '', borderRadius: isCatalyst ? '9999px' : ''}} onClick={(event) => {
          if (!isCatalyst) {
            setIsCatalyst(!isCatalyst);
            filterByWeapon('Catalyst');
          } else {
            setIsCatalyst(!isCatalyst);
            removeWeapon('Catalyst');
          }
        }}>Catalyst</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png)', borderStyle: isClaymore ? 'solid' : '', borderWidth: isClaymore ? '4px' : '', borderRadius: isClaymore ? '9999px' : ''}} onClick={(event) => {
          if (!isClaymore) {
            setIsClaymore(!isClaymore);
            filterByWeapon('Claymore');
          } else {
            setIsClaymore(!isClaymore);
            removeWeapon('Claymore');
          }
        }}>Claymore</div>
      </div>
    </div>
  );
};

export default Filter;