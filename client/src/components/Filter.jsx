import React, {useState} from 'react';
import axios from 'axios';

const Filter = ({characters, setCharacters, allCharacters}) => {
  const [lastCharacters, setLastCharacters] = useState([]);

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

  const filterElement = (keyword) => {

    console.log(lastCharacters)
    if (isElement) {
      if (keyword === characters[0].element) {
        setCharacters(lastCharacters);
        setIsElement(!isElement);
      } else {
        let updatedList = [];
        characters.forEach(character => {
          if (character.element === keyword) {
            updatedList.push(character);
          }
        })
        if (updatedList.length > 0) {
          setCharacters(updatedList);
        }
      }
    } else {
      let currentList = characters.slice();
      let updatedList = [];
        characters.forEach(character => {
          if (character.element === keyword) {
            updatedList.push(character);
          }
        })
        if (updatedList.length > 0) {
          setLastCharacters(currentList);
          setCharacters(updatedList);
          setIsElement(!isElement);
        }
    }
  }

  const filterWeapon = (keyword) => {
    if (isWeapon) {
      if (keyword === characters[0].weapon) {
        setCharacters(allCharacters);
        setIsWeapon(!isWeapon);
      } else {
        let updatedList = [];
        characters.forEach(character => {
          if (character.weapon === keyword) {
            updatedList.push(character);
          }
        })
        if (updatedList.length > 0) {
          setCharacters(updatedList);
        }
      }
    } else {
      let updatedList = [];
        characters.forEach(character => {
          if (character.weapon === keyword) {
            updatedList.push(character);
          }
        })
        if (updatedList.length > 0) {
          setCharacters(updatedList);
          setIsWeapon(!isWeapon);
        }
    }
  }

  return (
    <div className="w-3/4 m-auto">
      <div className='text-amber-200 text-xl text-center m-5'>Filter by Element</div>
      <div className="flex space-x-10 justify-center">
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isAnemo ? 'url(https://preview.redd.it/5cgw3tah2ay71.png?width=360&format=png&auto=webp&s=0d7852de9d666068a8b164264d507b16deba27fa)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/1/10/Element_Anemo.svg)'}} onClick={(event) => {
          filterElement(event.currentTarget.textContent);
          setIsAnemo(!isAnemo);
        }}>Anemo</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isGeo ? 'url(https://preview.redd.it/n5ej1aeo2ay71.png?width=360&format=png&auto=webp&s=29b111b484dbf8419ffa628b4d76dd708a1515f2)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Element_Geo.svg)'}} onClick={(event) => {
          filterElement(event.currentTarget.textContent);
          setIsGeo(!isGeo);
        }}>Geo</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isPyro ? 'url(https://preview.redd.it/f62yf4o95ay71.png?width=360&format=png&auto=webp&s=a3713c25c9088ca0b9321eed295ec2bca3d0d4b2)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/2/2c/Element_Pyro.svg)'}} onClick={(event) => {
          filterElement(event.currentTarget.textContent);
          setIsPyro(!isPyro);
        }}>Pyro</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isElectro ? 'url(https://preview.redd.it/0ps0mocb3ay71.png?width=360&format=png&auto=webp&s=22b893ac1c5b496b231942bf6b9c54dc22a4a368)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Element_Electro.svg)'}} onClick={(event) => {
          filterElement(event.currentTarget.textContent);
          setIsElectro(!isElectro);
        }}>Electro</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isHydro ? 'url(https://preview.redd.it/zwarjvzk4ay71.png?width=360&format=png&auto=webp&s=c755931829096e5a41936c66424905b0454cbb57)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/8/80/Element_Hydro.svg)'}} onClick={(event) => {
          filterElement(event.currentTarget.textContent);
          setIsHydro(!isHydro);
        }}>Hydro</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-cover text-center leading-[80px]" style={{backgroundImage: isCryo ? 'url(https://preview.redd.it/a8kju4zk5ay71.png?width=360&format=png&auto=webp&s=c7483a9a99cd111432e43d823dd85ca2d31891da)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/7/72/Element_Cryo.svg)'}} onClick={(event) => {
          filterElement(event.currentTarget.textContent);
          setIsCryo(!isCryo);
        }}>Cryo</div>
        <div className="inline-block text-white h-20 w-20 bg-no-repeat bg-contain text-center leading-[80px]" style={{backgroundImage: isDendro ? 'url(https://preview.redd.it/w7jmevct3ay71.png?width=360&format=png&auto=webp&s=5ea427a55c2d573dcddd3bb47e63823fd512df5b)' : 'url(https://static.wikia.nocookie.net/gensin-impact/images/7/73/Element_Dendro.svg)'}} onClick={(event) => {
          filterElement(event.currentTarget.textContent);
          setIsDendro(!isDendro);
        }}>Dendro</div>
      </div>
      <div className='text-amber-200 text-xl text-center m-5'>Filter by Weapon</div>
      <div className="flex space-x-10 justify-center">
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png)'}} onClick={(event) => {
          filterWeapon(event.currentTarget.textContent);
          setIsBow(!isBow);
        }}>Bow</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png)'}} onClick={(event) => {
          filterWeapon(event.currentTarget.textContent);
          setIsSword(!isSword);
        }}>Sword</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png)'}} onClick={(event) => {
          filterWeapon(event.currentTarget.textContent);
          setIsPolearm(!isPolearm);
        }}>Polearm</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png)'}} onClick={(event) => {
          filterWeapon(event.currentTarget.textContent);
          setIsCatalyst(!isCatalyst);
        }}>Catalyst</div>
        <div className="inline-block text-white h-28 w-28 bg-no-repeat bg-cover text-center leading-[100px]" style={{backgroundImage: 'url(https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png)'}} onClick={(event) => {
          filterWeapon(event.currentTarget.textContent);
          setIsClaymore(!isClaymore);
        }}>Claymore</div>
      </div>
    </div>
  );
};

export default Filter;