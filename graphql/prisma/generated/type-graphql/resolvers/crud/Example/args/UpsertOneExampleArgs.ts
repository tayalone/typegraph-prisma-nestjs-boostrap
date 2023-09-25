import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExampleCreateInput } from "../../../inputs/ExampleCreateInput";
import { ExampleUpdateInput } from "../../../inputs/ExampleUpdateInput";
import { ExampleWhereUniqueInput } from "../../../inputs/ExampleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneExampleArgs {
  @TypeGraphQL.Field(_type => ExampleWhereUniqueInput, {
    nullable: false
  })
  where!: ExampleWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExampleCreateInput, {
    nullable: false
  })
  create!: ExampleCreateInput;

  @TypeGraphQL.Field(_type => ExampleUpdateInput, {
    nullable: false
  })
  update!: ExampleUpdateInput;
}
