import { City } from './city';
import { SubjectOffice } from './subject_office';
import { ApiProperty } from '@nestjs/swagger';

export class CityDistrictRelations {
  @ApiProperty({ type: () => City })
  city: City;

  @ApiProperty({ isArray: true, type: () => SubjectOffice })
  subjectOffices: SubjectOffice[];
}
