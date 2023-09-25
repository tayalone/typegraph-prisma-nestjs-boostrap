import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExampleCreateInput } from "../../../inputs/ExampleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneExampleArgs {
  @TypeGraphQL.Field(_type => ExampleCreateInput, {
    nullable: false
  })
  data!: ExampleCreateInput;
}
