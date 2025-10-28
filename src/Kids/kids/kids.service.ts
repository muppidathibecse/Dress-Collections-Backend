import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { KidsInterface } from '../interface/kidinterface';
import { KidsDTO } from '../DTO/kidsdto';

@Injectable()
export class KidsService {
  constructor(@InjectModel('Kid') private kidsModel: Model<KidsInterface>) {}

  async AddItem(data: KidsDTO): Promise<KidsInterface> {
    const newdata = new this.kidsModel(data);
    return await newdata.save();
  }

  async GetAllItem(): Promise<KidsInterface[] | null> {
    return await this.kidsModel.find();
  }

  async toggleLike(id: string) {
    const kid = await this.kidsModel.findById(id);
    if (!kid) throw new NotFoundException('Item not found');

    kid.isLike = !kid.isLike;
    return kid.save();
  }
}
