export default class GotService {

  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
  }

  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return await res.json();
  };

  async getAllCharacters() {
    const result = await this.getResourse('/characters?page=5&pageSize=10');
    return result.map(this._transformCharacter)
  }

  async getCharacter(id) {

    const character = await this.getResourse(`/characters/${id}`);
    return this._transformCharacter(character);
  }

  _transformCharacter(character) {
    return {
      name: character.name,
      gender: character.gender,
      born: character.born,
      died: character.died,
      culture: character.culture
    }
  }

  _transformHouse(house) {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapon: house.ancestralWeapon
    }
  }

  _transformBook(book) {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publiser: book.publiser,
      released: book.released
    }
  }
}

// const got = new GotService();
// got.getAllCharacters()
//   .then(res => {
//     console.log(res.forEach( item => console.log(item.name)));
//   });

// got.getAllCharacter(27)
//   .then(res => console.log(res));