import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VenueServiceBase } from "./base/venue.service.base";

@Injectable()
export class VenueService extends VenueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
