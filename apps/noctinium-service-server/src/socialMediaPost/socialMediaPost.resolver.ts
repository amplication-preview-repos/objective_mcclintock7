import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SocialMediaPostResolverBase } from "./base/socialMediaPost.resolver.base";
import { SocialMediaPost } from "./base/SocialMediaPost";
import { SocialMediaPostService } from "./socialMediaPost.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SocialMediaPost)
export class SocialMediaPostResolver extends SocialMediaPostResolverBase {
  constructor(
    protected readonly service: SocialMediaPostService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
