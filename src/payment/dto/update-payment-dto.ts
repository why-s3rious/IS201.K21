import { ApiProperty } from "@nestjs/swagger";

export class updatePaymentDto {
    @ApiProperty()
    price_water?: number;
    @ApiProperty()
    price_electric?: number;
    @ApiProperty()
    price_else?: number;
}