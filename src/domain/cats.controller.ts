import { Controller, Get, Post, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getHello(): string {
    return this.catsService.getHello();
  }
  @Get()
  async listAll() {
    return [];
  }
  @Post()
  async createCat 
  () {
   return []; 
  }
  @Delete()
  async deleteCat 
  () {
   return []; 
  }
  

}
