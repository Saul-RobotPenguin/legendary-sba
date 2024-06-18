import foxUrl from "../urls/foxUrl.js";

export default async function foxCall() {
    const response = await fetch(foxUrl);
    const foxes = await response.json();
    console.log(foxes);
    return foxes
  }
  