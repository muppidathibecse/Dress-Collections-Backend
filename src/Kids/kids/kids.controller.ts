import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { KidsService } from './kids.service';
import { KidsInterface } from '../interface/kidinterface';
import { KidsDTO } from '../DTO/kidsdto';

@Controller('kids')
export class KidsController {
  constructor(public KidServices: KidsService) {}
  @Get()
  async GetAllItem(): Promise<KidsInterface[] | null> {
    return await this.KidServices.GetAllItem();
  }
  @Post()
  async AddItem(@Body() data: KidsDTO): Promise<KidsInterface> {
    return await this.KidServices.AddItem(data);
  }
  @Patch(':id')
  async toggleLike(@Param('id') id: string) {
    return this.KidServices.toggleLike(id);
  }
}
