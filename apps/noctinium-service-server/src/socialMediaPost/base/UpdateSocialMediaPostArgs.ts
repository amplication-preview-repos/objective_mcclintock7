/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SocialMediaPostWhereUniqueInput } from "./SocialMediaPostWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SocialMediaPostUpdateInput } from "./SocialMediaPostUpdateInput";

@ArgsType()
class UpdateSocialMediaPostArgs {
  @ApiProperty({
    required: true,
    type: () => SocialMediaPostWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SocialMediaPostWhereUniqueInput)
  @Field(() => SocialMediaPostWhereUniqueInput, { nullable: false })
  where!: SocialMediaPostWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SocialMediaPostUpdateInput,
  })
  @ValidateNested()
  @Type(() => SocialMediaPostUpdateInput)
  @Field(() => SocialMediaPostUpdateInput, { nullable: false })
  data!: SocialMediaPostUpdateInput;
}

export { UpdateSocialMediaPostArgs as UpdateSocialMediaPostArgs };
