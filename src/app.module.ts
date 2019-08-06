import { Module } from '@nestjs/common';
import { Live } from './modules/bilibili.live/bilibili.live.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [Live],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
