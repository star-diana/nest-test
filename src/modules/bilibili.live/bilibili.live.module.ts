import { Module } from '@nestjs/common';
import BilibiliLiveController from './bilibili.live.controller';
import BilibiliLiveService from './bilibili.live.service';

@Module({
    imports: [],
    controllers: [BilibiliLiveController],
    providers: [BilibiliLiveService],
})
export class Live {}
