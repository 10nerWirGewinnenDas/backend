import { CityDistrict } from './city_district';
import { ApiProperty } from '@nestjs/swagger';

export class CityRelations {
  @ApiProperty({ isArray: true, type: () => CityDistrict })
  districts: CityDistrict[];
}
