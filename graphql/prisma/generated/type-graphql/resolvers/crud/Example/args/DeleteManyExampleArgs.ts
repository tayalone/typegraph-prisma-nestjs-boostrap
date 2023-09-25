import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExampleWhereInput } from "../../../inputs/ExampleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyExampleArgs {
  @TypeGraphQL.Field(_type => ExampleWhereInput, {
    nullable: true
  })
  where?: ExampleWhereInput | undefined;
}
