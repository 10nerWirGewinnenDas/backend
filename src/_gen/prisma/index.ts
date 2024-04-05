import { BlackSpotRelations as _BlackSpotRelations } from './black_spot_relations';
import { CategoryRelations as _CategoryRelations } from './category_relations';
import { CityRelations as _CityRelations } from './city_relations';
import { CityDistrictRelations as _CityDistrictRelations } from './city_district_relations';
import { SubjectOfficeRelations as _SubjectOfficeRelations } from './subject_office_relations';
import { VoteRelations as _VoteRelations } from './vote_relations';
import { CommentRelations as _CommentRelations } from './comment_relations';
import { BlackSpot as _BlackSpot } from './black_spot';
import { Category as _Category } from './category';
import { City as _City } from './city';
import { CityDistrict as _CityDistrict } from './city_district';
import { SubjectOffice as _SubjectOffice } from './subject_office';
import { Vote as _Vote } from './vote';
import { Comment as _Comment } from './comment';

export namespace PrismaModel {
  export class BlackSpotRelations extends _BlackSpotRelations {}
  export class CategoryRelations extends _CategoryRelations {}
  export class CityRelations extends _CityRelations {}
  export class CityDistrictRelations extends _CityDistrictRelations {}
  export class SubjectOfficeRelations extends _SubjectOfficeRelations {}
  export class VoteRelations extends _VoteRelations {}
  export class CommentRelations extends _CommentRelations {}
  export class BlackSpot extends _BlackSpot {}
  export class Category extends _Category {}
  export class City extends _City {}
  export class CityDistrict extends _CityDistrict {}
  export class SubjectOffice extends _SubjectOffice {}
  export class Vote extends _Vote {}
  export class Comment extends _Comment {}

  export const extraModels = [
    BlackSpotRelations,
    CategoryRelations,
    CityRelations,
    CityDistrictRelations,
    SubjectOfficeRelations,
    VoteRelations,
    CommentRelations,
    BlackSpot,
    Category,
    City,
    CityDistrict,
    SubjectOffice,
    Vote,
    Comment,
  ];
}
