import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ClientsModule, Transport} from '@nestjs/microservices'

@Module({
  imports: [
    ClientsModule.register(
      [
        {
          name: 'SERVICE_1',
          transport: Transport.TCP,
          options:{
            host: '127.0.0.1',
            port: 3333
          }
        },
        {
          name: 'SERVICE_2',
          transport: Transport.TCP,
          options:{
            host: '127.0.0.1',
            port: 4444
          }
        }
      ]
    )

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
