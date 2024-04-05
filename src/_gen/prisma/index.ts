import { BlackSpot as _BlackSpot } from './black_spot';
import { Category as _Category } from './category';
import { City as _City } from './city';
import { CityDistrict as _CityDistrict } from './city_district';
import { SubjectOffice as _SubjectOffice } from './subject_office';
import { Vote as _Vote } from './vote';

export namespace PrismaModel {
  export class BlackSpot extends _BlackSpot {}
  export class Category extends _Category {}
  export class City extends _City {}
  export class CityDistrict extends _CityDistrict {}
  export class SubjectOffice extends _SubjectOffice {}
  export class Vote extends _Vote {}

  export const extraModels = [
    BlackSpot,
    Category,
    City,
    CityDistrict,
    SubjectOffice,
    Vote,
  ];
}
