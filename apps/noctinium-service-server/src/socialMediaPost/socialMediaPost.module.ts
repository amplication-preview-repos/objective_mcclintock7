import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SocialMediaPostModuleBase } from "./base/socialMediaPost.module.base";
import { SocialMediaPostService } from "./socialMediaPost.service";
import { SocialMediaPostController } from "./socialMediaPost.controller";
import { SocialMediaPostResolver } from "./socialMediaPost.resolver";

@Module({
  imports: [SocialMediaPostModuleBase, forwardRef(() => AuthModule)],
  controllers: [SocialMediaPostController],
  providers: [SocialMediaPostService, SocialMediaPostResolver],
  exports: [SocialMediaPostService],
})
export class SocialMediaPostModule {}
