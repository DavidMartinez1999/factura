import { IsString,IsNumber } from "class-validator";

export class CreateFacturaDto {
   
    @IsString()
    nombre: string;
    @IsString()
    fecha: string;
    @IsNumber()
    codigo: number;
}