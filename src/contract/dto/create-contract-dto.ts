import { ApiProperty } from "@nestjs/swagger";

export class createContractDto {
  @ApiProperty()
  bieu_phi_tuy_bien: string;
  @ApiProperty()
  bieu_phi_gia_phong: string;
  @ApiProperty()
  status: string;
  @ApiProperty()
  id_reciept: string;
  @ApiProperty()
  id_motel_room: string;
}
