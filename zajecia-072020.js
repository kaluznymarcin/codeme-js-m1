/** --- typy proste */
12
'string' "string" `string`
true false
null
undefined

var nazwazmiennej = 12;
let zmienna = 'string';

const STALA = 3.14

let obiekt = {
  kolor: 'czerwony',
  metoda: function () {

  }
}
let obiekt2 = {
  kolor: 'niebieski'
}

let obiekt3 = new Object() //{}

obiekt3.kolor = 'zielony'

obiekt2.kolor

obiekt3['@#hjdsj!'] = 'lol'
obiekt3['@#hjdsj']

const array = ['a', 'b', 'c']

i = i + 1 // i += 1  // i++
i = i - 1 // i -= 1  // i--
i = i * 1 // i *= 1
i = i / 1 // i /= 1

for (let i = 0; i < 10; i += 1) {
  console.log(i);
}

let i = 0;
for (; i< 10; i += 1) {
  console.log(i)
}

let i = 0;
for (; i < 10;) {
  console.log(i)
  i += 1
}

while (i < 10) {
  console.log(i)
  i += 1
}

do {
  console.log(i)
} while (i < 10);

for (let key in object) {

}


for (let i = 0, length = array.length; i < length; i += 1) {
  console.log(array[i]);
}

if (typeof i === 'number') {
  console.log('Prawda')
} else if (i < 10 || i < 0) {
  console.log('Else');
}

function suma(a, b) {
  const sum = a + b;
  console.log(sum);
}

let liczba1 = 2
let liczba2 = 5
suma(liczba1, liczba2)

const func = suma;
func(45, 65);

const funkcja = function (string1, string2) {
  return `${string1 + string2}`;
}

funkcja('12', 13)


func2();
func1();

const func1 = function () {}

function func2() {}

const func3 = (a, b) => {
  return a + b
}


const func3 = a => a + 10

'marcin'
