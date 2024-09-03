import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService , @Inject('MATH_SERVICE') private client: ClientProxy,) {
    
   }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('sum1')
  async sum1(@Body('numbers') numbers: number[]): Promise<number> {
    try {
      const response = await axios.post('http://localhost:3001/math/sum', { 
        numbers,
       });
       return response.data;
    } catch(error) {
      console.error('Error calling the microservice', error);
      throw error;
    }
  }

  @Post('sum2')
  async sum2(@Body('numbers') numbers: number[]): Promise<number> {
    try {
      const response = await axios.post('http://localhost:3001/math/sum', { 
        numbers,
       });
       return response.data;
    } catch(error) {
      console.error('Error calling the microservice', error);
      throw error;
    }
  }
}
