import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search/search.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [SearchModule, MongooseModule.forRoot('mongodb://<username>:<password>@localhost:27017',{dbName: 'studentdb'}),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
