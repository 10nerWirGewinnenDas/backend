import {ApiProperty, OmitType} from "@nestjs/swagger";
import {PrismaModel} from "../_gen/prisma";

export class CreateBlackSpotDto extends OmitType(PrismaModel.BlackSpot, ["votes", "id"]){
    @ApiProperty({required: false})
    voterId?: string;
}