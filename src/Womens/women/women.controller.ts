import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { WomenService } from './women.service';
import { WomenInterface } from '../interface/womeninterface';
import { WomenDTO } from '../DTO/womendto';

@Controller('women')
export class WomenController {
  constructor(public WomenServices: WomenService) {}
  @Get()
  async GetAllItemk(): Promise<WomenInterface[] | null> {
    return await this.WomenServices.GetAllItem();
  }
  @Post()
  async AddItem(@Body() data: WomenDTO): Promise<WomenInterface> {
    return await this.WomenServices.AddItem(data);
  }
  @Patch(':id')
  async toggleLike(@Param('id') id: string) {
    return this.WomenServices.toggleLike(id);
  }
}
