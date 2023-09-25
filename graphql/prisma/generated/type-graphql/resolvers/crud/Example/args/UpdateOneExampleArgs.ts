import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExampleUpdateInput } from "../../../inputs/ExampleUpdateInput";
import { ExampleWhereUniqueInput } from "../../../inputs/ExampleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneExampleArgs {
  @TypeGraphQL.Field(_type => ExampleUpdateInput, {
    nullable: false
  })
  data!: ExampleUpdateInput;

  @TypeGraphQL.Field(_type => ExampleWhereUniqueInput, {
    nullable: false
  })
  where!: ExampleWhereUniqueInput;
}
