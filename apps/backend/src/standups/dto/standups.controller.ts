// apps/backend/src/standups/standups.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StandupsService } from './standups.service';
import { CreateStandupDto } from './dto/create-standup.dto';

@Controller('standups')
export class StandupsController {
  constructor(private readonly standupsService: StandupsService) {}

  @Post()
  create(@Body() createStandupDto: CreateStandupDto) {
    return this.standupsService.create(createStandupDto);
  }

  @Get('team/:teamId')
  findAllByTeam(@Param('teamId') teamId: string) {
    return this.standupsService.findAllByTeam(teamId);
  }
}