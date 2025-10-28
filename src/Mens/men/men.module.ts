import { Module } from '@nestjs/common';
import { MenController } from './men.controller';
import { MenService } from './men.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MenSchema } from '../Schemas/menschema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Men', schema: MenSchema }])],
  controllers: [MenController],
  providers: [MenService],
})
export class MenModule {}
