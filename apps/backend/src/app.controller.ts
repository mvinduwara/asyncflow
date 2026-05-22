// apps/backend/src/app.controller.ts
import { Controller, Post } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  // A temporary endpoint to seed your database with test relationships
  @Post('seed')
  async seedDatabase() {
    const user = await this.prisma.user.create({
      data: { email: 'engineer@asyncflow.com', fullName: 'Demo Engineer' },
    });

    const workspace = await this.prisma.workspace.create({
      data: { name: 'Acme Corp' },
    });

    const team = await this.prisma.team.create({
      data: { name: 'Frontend Guild', workspaceId: workspace.id },
    });

    return {
      message: 'Database Seeded! Use these IDs to create a standup.',
      userId: user.id,
      workspaceId: workspace.id,
      teamId: team.id,
    };
  }
}