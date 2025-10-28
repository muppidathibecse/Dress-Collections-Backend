import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MenInterface } from '../interface/meninterface';
import { MenDTO } from '../DTO/mendto';

@Injectable()
export class MenService {
  constructor(@InjectModel('Men') private menModel: Model<MenInterface>) {}

  async AddItem(data: MenDTO): Promise<MenInterface> {
    const newdata = new this.menModel(data);
    return await newdata.save();
  }

  async GetAllItem(): Promise<MenInterface[] | null> {
    return await this.menModel.find();
  }

  async toggleLike(id: string) {
    const men = await this.menModel.findById(id);
    if (!men) throw new NotFoundException('Item not found');

    men.isLike = !men.isLike; 
    return men.save(); 
  }
}
