import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Transport,MicroserviceOptions} from '@nestjs/microservices';
import { Logger } from "@nestjs/common";

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,{
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3333
    }
  });
  app.listen();
}
bootstrap();
