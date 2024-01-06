import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Delete, 
  Query, 
  Body,
  Param,  
} from '@nestjs/common';
import { AppService } from './app.service';
import { Cliente } from './modelo/cliente';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get() //Exemplo: http://localhost:3000
  getStatus(): string {
    return "O node está rodando: " + new Date();
  }

  @Get("/clientes") //Exemplo: http://localhost:3000/clientes
  listarTodosClicentes():Array<Cliente> {
    console.log("Entrou no método: listarTodosClicentes "+ new Date());

    return this.appService.listarTodos();
  }

  @Get("/cliente") //Exemplo: http://localhost:3000?id=1
  public buscarPorId(@Query('id') id:number): Cliente {
    console.log("Entrou no método: buscarPorId "+ new Date());

    return this.appService.buscarPorId(id);
  }

  @Post()
  public salvar(@Body() cliente: Cliente):Cliente{
    console.log("Entrou no método: salvar");

    return this.appService.salvar(cliente);
  }

  @Put(':id')
  public alterar(@Param('id') id: number, @Body() cliente: Cliente ) : Cliente{
    console.log("Entrou no método: alterar "+ new Date());
      
    return this.appService.atualizar(id, cliente);
  }

  @Delete(':id')
  public excluir(@Param('id') id: number){
    console.log("Entrou no método: delete "+ new Date());

    this.appService.excluir(id);
  }
}