// type Batedor = 'globo' | 'leque' | 'gancho';

interface Batedor {
  bater(): void;
}

class BatedorGlobo implements Batedor {
  bater(): void {
    console.log('Com esse batedor eu posso fazer sorvete!');
  }
}

class BatedorLeque implements Batedor {
  bater(): void {
    console.log('Com esse batedor eu posso fazer biscoito!');
  }
}

class BatedorGancho implements Batedor {
  bater(): void {
    console.log('Com esse batedor eu posso fazer pão!');
  }
}

class BatedeiraPlanetaria {
  constructor(public batedor: Batedor) {}

  bater(): void {
    this.batedor.bater();
  }
}
const batedeira = new BatedeiraPlanetaria(new BatedorGancho());
batedeira.bater();
batedeira.batedor = new BatedorGlobo();
batedeira.bater();
batedeira.batedor = new BatedorLeque();
batedeira.bater();
