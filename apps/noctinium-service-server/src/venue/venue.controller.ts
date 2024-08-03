import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VenueService } from "./venue.service";
import { VenueControllerBase } from "./base/venue.controller.base";

@swagger.ApiTags("venues")
@common.Controller("venues")
export class VenueController extends VenueControllerBase {
  constructor(
    protected readonly service: VenueService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
