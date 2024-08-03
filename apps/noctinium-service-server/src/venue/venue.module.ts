import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VenueModuleBase } from "./base/venue.module.base";
import { VenueService } from "./venue.service";
import { VenueController } from "./venue.controller";
import { VenueResolver } from "./venue.resolver";

@Module({
  imports: [VenueModuleBase, forwardRef(() => AuthModule)],
  controllers: [VenueController],
  providers: [VenueService, VenueResolver],
  exports: [VenueService],
})
export class VenueModule {}
