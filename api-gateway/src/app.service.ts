import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from "@nestjs/microservices";
import { map } from "rxjs/operators";

@Injectable()
export class AppService {
  constructor(
    @Inject("SERVICE_1") private readonly clientService1: ClientProxy,
    @Inject("SERVICE_2") private readonly clientService2: ClientProxy
  ) {}

  helloService1() {
    const startTs = Date.now();
    const pattern = { cmd: "hello" };
    const payload = {};
    return this.clientService1
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message, duration: Date.now() - startTs }))
      );
  }

  helloService2() {
    const startTs = Date.now();
    const pattern = { cmd: "hello" };
    const payload = {};
    return this.clientService2
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message, duration: Date.now() - startTs }))
      );
  }

  getHello(): string {
    return 'Hello World!';
  }
}
