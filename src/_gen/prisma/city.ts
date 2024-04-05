import { CityDistrict } from './city_district';
import { ApiProperty } from '@nestjs/swagger';

export class City {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ isArray: true, type: () => CityDistrict })
  districts: CityDistrict[];
}
