import { Module } from '@nestjs/common';
import { KidsController } from './kids.controller';
import { KidsService } from './kids.service';
import { KidSchema } from '../Schemas/kidschema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Kid', schema: KidSchema }])],
  controllers: [KidsController],
  providers: [KidsService],
})
export class KidsModule {}
