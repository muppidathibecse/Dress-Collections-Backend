import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LikeInterface } from '../interface/likeinterface';
import { Model } from 'mongoose';
import { LikeDTO } from '../DTO/likedto';

@Injectable()
export class LikesService {
  constructor(@InjectModel('Like') private likeModel: Model<LikeInterface>) {}
  async AddItem(data: LikeDTO): Promise<LikeInterface> {
      const newdata = new this.likeModel(data);
      return await newdata.save();
    }
}
