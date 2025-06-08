interface Funcionario {
  nome: string;
  cargaHoraria: number;
  trabalha(): void;
}

interface FuncionarioEfetivo extends Funcionario {
  salario: number;

  calculaSalarioLiquido(): number;
  calculaParticipacaoDeLucros(lucro: number): number;
}

interface Pesquisador {
  nome: string;
  cargaHoraria: number;
  escreveRelatorio(): void;
  trabalha(): void;
}

class FuncionarioEfetivo implements FuncionarioEfetivo {
  constructor(nome: string, cargaHoraria: number, salario: number) {
    this.nome = nome;
    this.cargaHoraria = cargaHoraria;
    this.salario = salario;
  }

  trabalha(): void {
    console.log(
      `Me chamo ${this.nome} e eu trabalho ${this.cargaHoraria} horas por semana`
    );
  }

  calculaSalarioLiquido(): number {
    const TAXA_DESCONTO = 0.2;
    const desconto = this.salario * TAXA_DESCONTO;
    return this.salario - desconto;
  }
  calculaParticipacaoDeLucros(lucro: number): number {
    return lucro * this.salario;
  }
}

class Pesquisador implements Pesquisador {
  orientador: Funcionario;

  constructor(
    nome: string,
    cargaHorariaExtensao: number,
    funciarioEfetivo: Funcionario
  ) {
    this.nome = nome;
    this.cargaHoraria = cargaHorariaExtensao;
    this.orientador = funciarioEfetivo;
  }

  escreveRelatorio(): void {
    console.log(
      `Me chamo ${this.nome} e eu escrevo relatórios para o meu orientador ${this.orientador.nome}`
    );
  }

  trabalha(): void {
    console.log(
      `Me chamo ${this.nome} e eu pesquiso ${this.cargaHoraria} horas por semana para cumprir na minha graduação`
    );
  }
}

const funcionarioEfetivo = new FuncionarioEfetivo('João', 40, 2400);
const pesquisador = new Pesquisador(
  'Enzo',
  20,
  funcionarioEfetivo
);

//Efetivo
console.log('nome:', funcionarioEfetivo.nome);
console.log('salário bruto:', funcionarioEfetivo.salario);
console.log('salário líquido:', funcionarioEfetivo.calculaSalarioLiquido());
console.log(
  'salário com PL:',
  funcionarioEfetivo.calculaParticipacaoDeLucros(2.5),
  '\n'
);
funcionarioEfetivo.trabalha();

//Voluntário
console.log('nome:', pesquisador.nome);
pesquisador.trabalha();
pesquisador.escreveRelatorio();
