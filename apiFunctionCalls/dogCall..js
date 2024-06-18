import dogUrl from "../urls/dogUrl.js";


export default async function duckBark() {
    const response = await fetch(dogUrl);
    const dogs = await response.json();
    console.log(dogs);
    return dogs
  }
  

