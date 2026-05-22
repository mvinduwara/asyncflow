// apps/backend/src/standups/standups.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStandupDto } from './dto/create-standup.dto';

@Injectable()
export class StandupsService {
  constructor(private prisma: PrismaService) {}

  async create(createStandupDto: CreateStandupDto) {
    return await this.prisma.standup.create({
      data: {
        userId: createStandupDto.userId,
        workspaceId: createStandupDto.workspaceId,
        teamId: createStandupDto.teamId,
        type: createStandupDto.type || 'TEXT',
        transcript: createStandupDto.transcript,
        mediaUrl: createStandupDto.mediaUrl,
        // Default status is 'COMPLETED' for text standups.
        status: createStandupDto.type === 'TEXT' ? 'COMPLETED' : 'DRAFT',
      },
    });
  }

  async findAllByTeam(teamId: string) {
    // Fetch all standups for a team, including the user's name and avatar
    return await this.prisma.standup.findMany({
      where: { teamId },
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: { fullName: true, email: true }
        }
      }
    });
  }
}