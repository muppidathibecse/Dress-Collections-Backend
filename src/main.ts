import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //For Enable
  // Confirm MongoDB connection
  mongoose
    .connect('mongodb://localhost/DressCollections')
    .then(() => console.log('====== MongoDB Successfully Connected  ======='))
    .catch((err) => console.error(' MongoDB Connection Error:', err));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
