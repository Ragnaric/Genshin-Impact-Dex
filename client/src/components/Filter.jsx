import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Filter = ({characters, setCharacters, allCharacters}) => {
  const [elementList, setElementList] = useState([]);
  const [weaponList, setWeaponList] = useState([]);

  const [isElement, setIsElement] = useState(false);
  const [isWeapon, setIsWeapon] = useState(false);

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
  //   setCharacters(allCharacters);
  //   if (isElement) {
  //     if (isAnemo) {
  //       filterElement(isAnemo);
  //     }
  //     if (isGeo) {
  //       filterElement(isGeo);
  //     }
  //     if (isPyro) {
  //       filterElement(isPyro);
  //     }
  //     if (isElectro) {
  //       filterElement(isElectro);
  //     }
  //     if (isHydro) {
  //       filterElement(isHydro);
  //     }
  //     if (isCryo) {
  //       filterElement(isCryo);
  //     }
  //     if (isDendro) {
  //       filterElement(isDendro);
  //     }
  //   }

  //   if (isWeapon) {
  //     if (isBow) {
  //       filterWeapon(isBow);
  //     }
  //     if (isSword) {
  //       filterWeapon(isSword);
  //     }
  //     if (isPolearm) {
  //       filterWeapon(isPolearm);
  //     }
  //     if (isCatalyst) {
  //       filterWeapon(isCatalyst);
  //     }
  //     if (isClaymore) {
  //       filterWeapon(isClaymore);
  //     }
  //   }
  // }, [isElement, isWeapon]);




  const filterElement = (keyword) => {
    if (isElement) {
      setCharacters(elementList);
      setIsElement(!isElement);
    } else {
      let currentList = [];
      let updatedList = [];
      characters.forEach(character => {
        if (character.element === keyword) {
          updatedList.push(character);
        }
      })
      // if (isWeapon) {
      //   setWeaponList(characters);
      // }
      setElementList(characters);
      setCharacters(updatedList);
    }
  };

  const filterWeapon = (keyword) => {
    if (isWeapon) {
      setCharacters(weaponList);
      setIsWeapon(!isWeapon);
    } else {
      let weaponList = [];
      let updatedList = [];
      characters.forEach(character => {
        if (character.weapon === keyword) {
          updatedList.push(character);
        }
      })
      // if (isElement) {
      //   setElementList(characters);
      // }
      setWeaponList(characters);
      setCharacters(updatedList);
    }
  };

  return (
    <div className="w-3/4 m-auto">
      <div className='text-amber-200 text-xl text-center m-5'>Filter by Element</div>
      <div className="flex space-x-10 justify-center">
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isAnemo === 'Anemo' ? 'url(https://preview.redd.it/5cgw3tah2ay71.png?width=360&format=png&auto=webp&s=0d7852de9d666068a8b164264d507b16deba27fa)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/1/10/Element_Anemo.svg)'}} onClick={(event) => {
          filterElement(event.currentTarget.textContent);
          if (!isAnemo) {
            setIsAnemo('Anemo');
          } else {
            setIsAnemo(!isAnemo);
          }
          setIsElement(!isElement);
        }}>Anemo</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isGeo === 'Geo' ? 'url(https://preview.redd.it/n5ej1aeo2ay71.png?width=360&format=png&auto=webp&s=29b111b484dbf8419ffa628b4d76dd708a1515f2)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Element_Geo.svg)'}} onClick={(event) => {
          filterElement(event.currentTarget.textContent);
          if (!isGeo) {
            setIsGeo('Geo');
          } else {
            setIsGeo(!isGeo);
          }
          setIsElement(!isElement);
        }}>Geo</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isPyro === 'Pyro' ? 'url(https://preview.redd.it/f62yf4o95ay71.png?width=360&format=png&auto=webp&s=a3713c25c9088ca0b9321eed295ec2bca3d0d4b2)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/2/2c/Element_Pyro.svg)'}} onClick={(event) => {
          filterElement(event.currentTarget.textContent);
          if (!isPyro) {
            setIsPyro('Pyro');
          } else {
            setIsPyro(!isPyro);
          }
          setIsElement(!isElement);
        }}>Pyro</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isElectro === 'Electro' ? 'url(https://preview.redd.it/0ps0mocb3ay71.png?width=360&format=png&auto=webp&s=22b893ac1c5b496b231942bf6b9c54dc22a4a368)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Element_Electro.svg)'}} onClick={(event) => {
          filterElement(event.currentTarget.textContent);
          if (!isElectro) {
            setIsElectro('Electro');
          } else {
            setIsElectro(!isElectro);
          }
          setIsElement(!isElement);
        }}>Electro</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isHydro === 'Hydro' ? 'url(https://preview.redd.it/zwarjvzk4ay71.png?width=360&format=png&auto=webp&s=c755931829096e5a41936c66424905b0454cbb57)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/8/80/Element_Hydro.svg)'}} onClick={(event) => {
          filterElement(event.currentTarget.textContent);
          if (!isHydro) {
            setIsHydro('Hydro');
          } else {
            setIsHydro(!isHydro);
          }
          setIsElement(!isElement);
        }}>Hydro</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isCryo === 'Cryo' ? 'url(https://preview.redd.it/a8kju4zk5ay71.png?width=360&format=png&auto=webp&s=c7483a9a99cd111432e43d823dd85ca2d31891da)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/7/72/Element_Cryo.svg)'}} onClick={(event) => {
          filterElement(event.currentTarget.textContent);
          if (!isCryo) {
            setIsCryo('Cryo');
          } else {
            setIsCryo(!isCryo);
          }
          setIsElement(!isElement);
        }}>Cryo</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-contain text-center leading-[80px]" style={{backgroundImage: isDendro === 'Dendro' ? 'url(https://preview.redd.it/w7jmevct3ay71.png?width=360&format=png&auto=webp&s=5ea427a55c2d573dcddd3bb47e63823fd512df5b)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/7/73/Element_Dendro.svg)'}} onClick={(event) => {
          filterElement(event.currentTarget.textContent);
          if (!isDendro) {
            setIsDendro('Dendro');
          } else {
            setIsDendro(!isDendro);
          }
          setIsElement(!isElement);
        }}>Dendro</div>
      </div>
      <div className='text-amber-200 text-xl text-center m-5'>Filter by Weapon</div>
      <div className="flex space-x-10 justify-center">
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png)'}} onClick={(event) => {
          filterWeapon(event.currentTarget.textContent);
          if (!isBow) {
            setIsBow('Bow');
          } else {
            setIsBow(!isBow);
          }
          setIsWeapon(!isWeapon);
        }}>Bow</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png)'}} onClick={(event) => {
          filterWeapon(event.currentTarget.textContent);
          if (!isSword) {
            setIsSword('Sword');
          } else {
            setIsSword(!isSword);
          }
          setIsWeapon(!isWeapon);
        }}>Sword</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png)'}} onClick={(event) => {
          filterWeapon(event.currentTarget.textContent);
          if (!isPolearm) {
            setIsPolearm('Polearm');
          } else {
            setIsPolearm(!isPolearm);
          }
          setIsWeapon(!isWeapon);
        }}>Polearm</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png)'}} onClick={(event) => {
          filterWeapon(event.currentTarget.textContent);
          if (!isCatalyst) {
            setIsCatalyst('Catalyst');
          } else {
            setIsCatalyst(!isCatalyst);
          }
          setIsWeapon(!isWeapon);
        }}>Catalyst</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png)'}} onClick={(event) => {
          filterWeapon(event.currentTarget.textContent);
          if (!isClaymore) {
            setIsClaymore('Claymore');
          } else {
            setIsClaymore(!isClaymore);
          }
          setIsWeapon(!isWeapon);
        }}>Claymore</div>
      </div>
    </div>
  );
};

export default Filter;