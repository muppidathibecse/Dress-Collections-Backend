import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { BagsService } from './bags.service';
import { BagsDTO } from '../DTO/bagsdto';
import { BagsInterface } from '../interface/bagsinterface';

@Controller('bags')
export class BagsController {
  constructor(public BagServices: BagsService) {}
  @Post()
  async AddItem(@Body() data: BagsDTO): Promise<BagsInterface> {
    return await this.BagServices.AddItem(data);
  }

  @Get()
  async GetAllItem(): Promise<BagsInterface[] | null> {
    return await this.BagServices.GetAllItem();
  }
  @Delete(':id')
  async DeleteById(@Param('id') id: string): Promise<BagsInterface | null> {
    return await this.BagServices.DeleteById(id);
  }

  @Put(':id')
  async updateBag(
    @Param('id') id: string,
    @Body() updateData: Partial<BagsDTO>,
  ) {
    return await this.BagServices.UpdateById(id, updateData);
  }
}
