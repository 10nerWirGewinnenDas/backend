import { ApiProperty } from '@nestjs/swagger';

export class CityDistrict {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  cityId: string;

  @ApiProperty({ isArray: true, type: String })
  plzCodes: string[];
}
