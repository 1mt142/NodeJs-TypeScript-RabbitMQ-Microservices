import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
console.log('Looginggg');
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const uri = configService.get<string>('MONGODB_URI');
        console.log(`Attempting to connect to MongoDB at: ${uri}`);
        return { uri };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
