interface Pagamento {
  valor: number;
  pagar(): void;
}

class PagamentoCheque implements Pagamento {
  valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }
  pagar(): void {
    console.log(`O pagamento de ${this.valor} será feito por cheque.`);
  }
}

class PagamentoDinheiro implements Pagamento {
  valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  pagar(): void {
    console.log(`O pagamento de ${this.valor} será feito por dinheiro.`);
  }
}

class PagamentoPix implements Pagamento {
  valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  pagar(): void {
    console.log(`O pagamento de ${this.valor} será feito por pix.`);
  }
}

class PagamentoBoleto implements Pagamento {
  valor: number;

  constructor(valor: number) {
    this.valor = valor;
  }

  pagar(): void {
    console.log(`O pagamento de ${this.valor} será feito por boleto.`);
  }
}

const pagamentoCheque = new PagamentoCheque(100);
pagamentoCheque.pagar();

const pagamentoDinheiro = new PagamentoDinheiro(200);
pagamentoDinheiro.pagar();

const pagamentoPix = new PagamentoPix(300);
pagamentoPix.pagar();

pagamentoDinheiro.pagar();

const pagamentoBoleto = new PagamentoBoleto(400);
pagamentoBoleto.pagar();
