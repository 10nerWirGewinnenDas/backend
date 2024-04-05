import { CityDistrict } from './city_district';
import { ApiProperty } from '@nestjs/swagger';

export class SubjectOfficeRelations {
  @ApiProperty({ type: () => CityDistrict })
  district: CityDistrict;
}
