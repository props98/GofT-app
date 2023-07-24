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

  getAllCharacters() {
    return this.getResourse('/characters?page=5&pageSize=10');
  }

  getAllCharacter(id) {
    return this.getResourse(`/characters/${id}`);
  }
}

// const got = new GotService();
// got.getAllCharacters()
//   .then(res => {
//     console.log(res.forEach( item => console.log(item.name)));
//   });

// got.getAllCharacter(27)
//   .then(res => console.log(res));