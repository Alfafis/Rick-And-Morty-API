async function getAllCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character/");
  return response.json();
}

async function getCharacterById(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  return response.json();
}
async function getCharacterByName(name) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );
  return response.json();
}

export default {
  getAllCharacters,
  getCharacterById,
  getCharacterByName,
};
