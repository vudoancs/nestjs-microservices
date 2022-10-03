import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}



  @Get("/hello-1")
  pingService1() {
    return this.appService.helloService1();
  }

  @Get("/hello-2")
  pingService2() {
    return this.appService.helloService2();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
