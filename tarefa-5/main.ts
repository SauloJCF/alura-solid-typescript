import ClienteController from './controller/ClienteController.js';
import Cliente from './entities/Cliente.js';
import InMemoryRepository from './repositories/InMemoryRepository.js';
import PostgresRepository from './repositories/PostgresRepository.js';

const clienteController = new ClienteController(new PostgresRepository());

const cliente1 = new Cliente(1, 'João', 'joao@mail.com');
const cliente2 = new Cliente(2, 'Kleber', 'kleber@mail.com');

clienteController.adicionaCliente(cliente1);
clienteController.adicionaCliente(cliente2);

console.log(clienteController.listaClientes());
