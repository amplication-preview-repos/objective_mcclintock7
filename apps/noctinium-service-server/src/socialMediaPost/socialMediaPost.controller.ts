import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SocialMediaPostService } from "./socialMediaPost.service";
import { SocialMediaPostControllerBase } from "./base/socialMediaPost.controller.base";

@swagger.ApiTags("socialMediaPosts")
@common.Controller("socialMediaPosts")
export class SocialMediaPostController extends SocialMediaPostControllerBase {
  constructor(
    protected readonly service: SocialMediaPostService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
