import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WomenInterface } from '../interface/womeninterface';
import { WomenDTO } from '../DTO/womendto';

@Injectable()
export class WomenService {
  constructor(
    @InjectModel('Women') private womenModel: Model<WomenInterface>,
  ) {}

  async AddItem(data: WomenDTO): Promise<WomenInterface> {
    const newdata = new this.womenModel(data);
    return await newdata.save();
  }

  async GetAllItem(): Promise<WomenInterface[] | null> {
    return await this.womenModel.find();
  }

  async toggleLike(id: string) {
    const women = await this.womenModel.findById(id);
    if (!women) throw new NotFoundException('Item not found');

    women.isLike = !women.isLike;
    return women.save();
  }
}
