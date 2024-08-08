import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mssql",
    "host": "localhost",
    "port": 1433,
    "username": "waqas",
    "password": "Waqas@1234",
    "database": "carDB",
    "extra": {
      "options": {
        "encrypt": false,
        "trustServerCertificate": true
      }
    }
  }), CarsModule,],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}