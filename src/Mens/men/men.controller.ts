import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { MenDTO } from '../DTO/mendto';
import { MenService } from './men.service';
import { MenInterface } from '../interface/meninterface';

@Controller('men')
export class MenController {
  constructor(public MenServices: MenService) {}
  @Get()
  async GetAllItemk(): Promise<MenInterface[] | null> {
    return await this.MenServices.GetAllItem();
  }
  @Post()
  async AddItem(@Body() data: MenDTO): Promise<MenInterface> {
    return await this.MenServices.AddItem(data);
  }
  @Patch(':id')
  async toggleLike(@Param('id') id: string) {
    return this.MenServices.toggleLike(id);
  }
}
