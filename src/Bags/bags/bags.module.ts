import { Module } from '@nestjs/common';
import { BagsController } from './bags.controller';
import { BagsService } from './bags.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BagsSchema } from '../Schemas/bagschema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Bags', schema: BagsSchema }])],
  controllers: [BagsController],
  providers: [BagsService],
})
export class BagsModule {}
