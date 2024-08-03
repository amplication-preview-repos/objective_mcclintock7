import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SocialMediaPostServiceBase } from "./base/socialMediaPost.service.base";

@Injectable()
export class SocialMediaPostService extends SocialMediaPostServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
