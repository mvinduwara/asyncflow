// apps/backend/src/standups/dto/create-standup.dto.ts
import { IsString, IsUUID, IsOptional, IsEnum } from 'class-validator';
import { MediaType } from '@prisma/client';

export class CreateStandupDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  workspaceId: string;

  @IsUUID()
  teamId: string;

  @IsEnum(MediaType)
  @IsOptional()
  type?: MediaType;

  @IsString()
  @IsOptional()
  transcript?: string;

  @IsString()
  @IsOptional()
  mediaUrl?: string;
}