import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExampleWhereUniqueInput } from "../../../inputs/ExampleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneExampleArgs {
  @TypeGraphQL.Field(_type => ExampleWhereUniqueInput, {
    nullable: false
  })
  where!: ExampleWhereUniqueInput;
}
