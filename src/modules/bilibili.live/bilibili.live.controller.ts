import { Controller, Get, Param, Response } from '@nestjs/common';
import BilibiliLiveService from './bilibili.live.service';

@Controller('bilibili/live')
export default class BilibiliLiveController {
    constructor(private readonly liveService: BilibiliLiveService) {
    }

    @Get(':id')
    async getBiliLiveBackground(@Response() response, @Param('id') id: string) {
        const background = await this.liveService.getBackground(id);
        console.log(background);
        response.redirect(302, background);
    }
}
