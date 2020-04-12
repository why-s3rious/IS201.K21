import { ApiProperty } from "@nestjs/swagger";

export class updateRecieptDto {
    @ApiProperty()
    price_water?: number;
    @ApiProperty()
    price_electric?: number;
    @ApiProperty()
    price_room?: number;
    @ApiProperty()
    price_constant?: number;
}