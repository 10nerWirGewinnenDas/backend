import { City } from './city';
import { SubjectOffice } from './subject_office';
import { ApiProperty } from '@nestjs/swagger';

export class CityDistrict {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: () => City })
  city: City;

  @ApiProperty({ type: String })
  cityId: string;

  @ApiProperty({ isArray: true, type: String })
  plzCodes: string[];

  @ApiProperty({ isArray: true, type: () => SubjectOffice })
  SubjectOffice: SubjectOffice[];
}
