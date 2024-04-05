import { ApiProperty } from '@nestjs/swagger';

export class SubjectOffice {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  districtId: string;
}
