import {ApiProperty, IntersectionType, OmitType, PickType} from "@nestjs/swagger";
import {PrismaModel} from "../../_gen/prisma";

export class CreateBlackSpotDto extends OmitType(PrismaModel.BlackSpot, ["id", "finished", "finished"]){
    @ApiProperty({required: false})
    voterId?: string;
}

class BlackSpotCounts {
    @ApiProperty()
    votes: number;

    @ApiProperty()
    comments: number;
}
export class GetBlackSpotDto extends IntersectionType(PrismaModel.BlackSpot, PrismaModel.Category, PickType(PrismaModel.BlackSpotRelations, ["comments"])) {
    @ApiProperty({
        type: BlackSpotCounts
    })
    _count: BlackSpotCounts
}

export class BlackSpotCreatedDto extends IntersectionType(PrismaModel.BlackSpot, PrismaModel.Vote, PrismaModel.Category) {}