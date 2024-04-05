import { BlackSpot as _BlackSpot } from './black_spot';
import { City as _City } from './city';
import { CityDistrict as _CityDistrict } from './city_district';
import { SubjectOffice as _SubjectOffice } from './subject_office';
import { Upvote as _Upvote } from './upvote';

export namespace PrismaModel {
  export class BlackSpot extends _BlackSpot {}
  export class City extends _City {}
  export class CityDistrict extends _CityDistrict {}
  export class SubjectOffice extends _SubjectOffice {}
  export class Upvote extends _Upvote {}

  export const extraModels = [
    BlackSpot,
    City,
    CityDistrict,
    SubjectOffice,
    Upvote,
  ];
}
