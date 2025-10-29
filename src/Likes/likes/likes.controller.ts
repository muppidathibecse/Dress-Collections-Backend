import { Body, Controller, Post } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikeDTO } from '../DTO/likedto';
import { LikeInterface } from '../interface/likeinterface';

@Controller('likes')
export class LikesController {
   constructor(public LikeServices: LikesService) {}
    @Post()
      async AddItem(@Body() data: LikeDTO): Promise<LikeInterface> {
        return await this.LikeServices.AddItem(data);
      }
}
