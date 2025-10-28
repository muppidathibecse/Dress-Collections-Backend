import { Module } from '@nestjs/common';
import { WomenController } from './women.controller';
import { WomenService } from './women.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WomenSchema } from '../Schemas/womenschema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Women', schema: WomenSchema }]),
  ],
  controllers: [WomenController],
  providers: [WomenService],
})
export class WomenModule {}
