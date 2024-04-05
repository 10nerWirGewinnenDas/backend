import {ApiProperty, IntersectionType, OmitType} from "@nestjs/swagger";
import {PrismaModel} from "../../_gen/prisma";

export class CreateBlackSpotDto extends OmitType(PrismaModel.BlackSpot, ["id", "votes"]){
    @ApiProperty({required: false})
    voterId?: string;
}


class BlackSpotCounts {
    @ApiProperty()
    votes: number;
}
export class GetBlackSpotDto extends IntersectionType(PrismaModel.BlackSpot) {
    @ApiProperty({
        type: BlackSpotCounts
    })
    _count: BlackSpotCounts
}

export class BlackSpotCreatedDto extends IntersectionType(PrismaModel.BlackSpot, PrismaModel.Vote) {}