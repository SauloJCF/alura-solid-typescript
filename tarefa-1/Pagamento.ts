import CalculaSalario from "./CalculaSalario";
import Colaborador from "./Colaborador";

export default class Pagamento {
    constructor(private servicoCalcularSalario: CalculaSalario) { }

    pagar(colaborador: Colaborador) {
        const salarioColaborador = this.servicoCalcularSalario.calcular(
            colaborador.cargo
        );
        colaborador.saldo = salarioColaborador;
    }
}
