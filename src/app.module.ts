import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';


@Module({
  imports: [ProductModule,
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/acame'
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
