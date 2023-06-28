import { Dog } from './09-protected';

// function getValue(value: unknown ) {
//   return value;
// }

// function getValue(value: string | number ) {
//   return value;
// }

function getValue<T>(value: T) {
  const array: T[] = [value];
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([11,1,1]).forEach;
const fifi = new Dog('fifi', 'nico');
getValue<Dog>(fifi).greeting
// Promise<boolean>
// axios.get<string[]>
/**
 * Nota:
   Por convención, se utiliza el nombre " T " para dar a conocer que es un generics, es muy común ver este tipo de nombre en otros repositorios, documentación y también es usado en otros lenguajes como java y C#.
   Otros nombres utilizados en los generics son:

   T - Type
   E - Elemento (elementos en una colección)
   K - Llave
   N - Número
   V - Valor
 */