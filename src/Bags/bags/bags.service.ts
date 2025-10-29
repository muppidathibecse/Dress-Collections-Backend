import { Injectable } from '@nestjs/common';
import { BagsDTO } from '../DTO/bagsdto';
import { BagsInterface } from '../interface/bagsinterface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class BagsService {
  constructor(@InjectModel('Bags') private bagModel: Model<BagsInterface>) {}
  async AddItem(data: BagsDTO): Promise<BagsInterface> {
    const newdata = new this.bagModel(data);
    return await newdata.save();
  }

  async GetAllItem(): Promise<BagsInterface[] | null> {
    return await this.bagModel.find();
  }

  async DeleteById(id: string): Promise<BagsInterface | null> {
    return await this.bagModel.findByIdAndDelete(id);
  }

  async UpdateById(id: string, updateData: Partial<BagsDTO>) {
    return await this.bagModel.findByIdAndUpdate(id, updateData, { new: true });
  }
}
