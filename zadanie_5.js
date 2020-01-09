/**
 * Napisz funkcje get, ktora jako parametry przyjmie odpowiednio obiekt (object),
 * szukane zagniezdzenie w drzewie obiektu (path), i opcjonalnie wartosc domyslna (defaultValue),
 * ktora zostanie zwrocona jezeli nie zostanie znaleziona wartosc w sciezce.
 * Funkcja ma zwrocic wartosc w szukanej sciezce lub defaultValue
 *
 * const obj = {a: {b: {c: { d: 'super'} } } };
 *
 * get(obj, 'a.b.c.d', 'default');
 * // zwroci 'super'
 *
 * get(obj, 'e.f.g.h');
 * // zwroci undefined;
 *
 * get(obj, 'a.b');
 * // zwroci { c: { d: 'super' } }
 */
const obj = {a: {b: {
  c: {
    d: 'super'
  }
} } };

function get(object, path, defaultValue) {
  const keys = path.split('.');

  for (let i = 0, ln = keys.length; i < ln; i += 1) {
    if (keys[i] in object) {
      object = object[keys[i]];
    } else {
      return;
    }
  }

  return object
}

function get(object, path, defaultValue) {
  return path.split('.').reduce(
    (parent, name) => parent && typeof parent === 'object' ? parent[name] : undefined, object
  ) || defaultValue;
}
