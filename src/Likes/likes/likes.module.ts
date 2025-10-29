import { Module } from '@nestjs/common';
import { LikesController } from './likes.controller';
import { LikesService } from './likes.service';
import { LikeSchema } from '../Schemas/likeschema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Like', schema: LikeSchema }])],
  controllers: [LikesController],
  providers: [LikesService]
})
export class LikesModule {}
