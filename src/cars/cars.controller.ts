import { CarsService } from './cars.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) { }
    @Get()
    findAll() {
        return this.carsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.carsService.findOne(Number(id));
    }

    @Post()
    create(@Body() car: { make: string; model: string; year: number }) {
        return this.carsService.create(car);
    }

    @Put(":id")
    update(@Param('id') id: string, @Body() car: { make: string; model: string; year: number }) {
        return this.carsService.update(Number(id), car);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.carsService.delete(+id);
    }
}