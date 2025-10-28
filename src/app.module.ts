import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MenModule } from './Mens/men/men.module';
import { WomenModule } from './Womens/women/women.module';
import { KidsModule } from './Kids/kids/kids.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/DressCollections'),
    MenModule,
    WomenModule,
    KidsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
