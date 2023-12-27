import { Injectable } from '@nestjs/common';
import { Cliente } from './modelo/cliente';

@Injectable()
export class AppService {

  //Array de Clientes
  private listaClientes:Array<Cliente> = [];

  constructor(){
    const client1 = new Cliente(1,'Alice Almeida','alice@teste.com.br', 2010);
    const client2 = new Cliente(2,'Carlos Alberto','carlos@teste.com.br', 2007);
    const client3 = new Cliente(3,'Alice Almeida','teste1@gmail.com', 20);

    //Adiciona os objetos ao array
    this.listaClientes.push(client1, client2, client3);

    console.log(this.listaClientes);
  }

  public listarTodos():Array<Cliente>{
    return this.listaClientes;
  } 

  public buscarPorId(id:number): Cliente {
    return this.listaClientes.find(
        cliente => cliente.id == id
    );
  }

  public salvar(cliente:Cliente): Cliente{

    console.log(cliente);

    //Cria um novo registro
    const incluirCliente = new Cliente(
      this.obterProximoId(), 
      cliente.nome,
      cliente.email,
      cliente.anoNacimento
    );

    this.listaClientes.push(incluirCliente);
    console.log(incluirCliente);
    return incluirCliente;
  }

  public atualizar(id:number, cliente:Cliente): Cliente{
    //Encontra o índice do registro que será atualizado
    let indice = this.listaClientes.findIndex(
      cliente => cliente.id == id
    );

    //Cria um novo registro
    const alterarCliente = new Cliente(
      id, 
      cliente.nome,
      cliente.email,
      cliente.anoNacimento
    );

    //Atualiza o registro
    this.listaClientes[indice] = alterarCliente;
    return alterarCliente;
  }

  public excluir(id:number): void{
    //Encontra o índice do registro que será removido
    let indice = this.listaClientes.findIndex(
      cliente => cliente.id == id
    );

    //Remove o registo do array
    this.listaClientes.splice(indice, 1);
  }

  //Apenas para simular a chave incremental do banco de dados
  //Retorna o próximo valor do identificado para que não 
  //haja duplicidade de identificadores
  public obterProximoId(): number{
      
    if(this.listaClientes.length == 0){
      return 1
    }else{
      //Obtém o último registro do array
      let ultimoRegistro = this.listaClientes[
          this.listaClientes.length - 1
      ];

      //Incrementa o identificador 
      //para ser usado um novo registro
      return ultimoRegistro.id + 1;
    }
  }
}
