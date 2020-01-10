const obj = new Object();

function Konstruktor() {

}
Konstruktor.prototype

class NazwaKlasy {
  constructor(color) {
    this.color = color;
  }

  printColor() {
    console.log(this.color);
  }
}

class NowaNazwaKlasy extends NazwaKlasy {
  constructor(prefix, color) {
    super(color)
  }

  metoda() {

  }
}
