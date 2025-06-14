import Cliente from '../../entities/Cliente.js';

export default interface IClienteRepository {
  adicionaCliente(cliente: Cliente): void;
  listaClientes(): Cliente[];
}
