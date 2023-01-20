import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';

import { heroes } from '../../src/data/heroes';

describe('Prueba en 08 import y export', () => {
  test('getHeroesById debe de retornar un heroe por ID', () => {
    const id = 1;

    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    const heroNotExist = getHeroeById(100);

    expect(heroNotExist).toEqual(undefined);
    expect(heroNotExist).toBeFalsy(); // que tenga un valor negativo, null o undefined
  });

  test('getHeroesByOwner debe de retornar los heroes de DC', () => {
    const dc = 'DC';

    const heroesDC = getHeroesByOwner(dc);

    console.log(heroesDC);

    expect(heroesDC.length).toBe(3);
    // me aseguro que la data, ya que puede cambiar..
    expect(heroesDC).toEqual(heroes.filter((heroe) => heroe.owner === dc));
    expect(heroesDC).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ]);
  });

  test('getHeroesByOwner debe de retornar los heroes de Marvel', () => {
    const marvel = 'Marvel';

    const heroesMarvel = getHeroesByOwner(marvel);

    expect(heroesMarvel.length).toBe(2);
    expect(heroesMarvel).toEqual([
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' },
    ]);
  });
});
