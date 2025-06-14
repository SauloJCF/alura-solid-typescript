interface Cozinheiro {
  fazerPratoPrincipal(): void;
}

interface Confeiteiro {
  fazerSobremesa(): void;
}

class MasterChef implements Cozinheiro, Confeiteiro {
  fazerPratoPrincipal(): void {
    console.log(
      'Não me atrapalhe enquanto estou concentrado em fazer meu prato principal!'
    );
  }

  fazerSobremesa(): void {
    console.log('Saborei minha melhor sobremesa!');
  }
}

class CozinheiroApenasDoce implements Confeiteiro {
  fazerSobremesa(): void {
    console.log('Aqui está minha melhor sobremesa!');
  }
}

const chefe = new MasterChef();
chefe.fazerPratoPrincipal();
chefe.fazerSobremesa();

const confeiteiro = new CozinheiroApenasDoce();
confeiteiro.fazerSobremesa();
