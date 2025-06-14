interface Batedor {
  bater(): void;
}

class BatedorGlobo implements Batedor {
  bater() {
    console.log('Com esse batedor eu posso fazer sorvete!');
  }
}

class BatedorLeque implements Batedor {
  bater() {
    console.log('Com esse batedor eu posso fazer biscoito!');
  }
}

class BatedorGancho implements Batedor {
  bater() {
    console.log('Com esse batedor eu posso fazer pão!');
  }
}

class Maquina {
  constructor(public batedor: Batedor) {}

  bater(): void {
    this.batedor.bater();
  }
}

const maquina = new Maquina(new BatedorGancho());
maquina.bater();
maquina.batedor = new BatedorGlobo();
maquina.bater();
maquina.batedor = new BatedorLeque();
maquina.bater();
