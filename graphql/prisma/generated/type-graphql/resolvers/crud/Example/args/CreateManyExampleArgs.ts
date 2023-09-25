import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExampleCreateManyInput } from "../../../inputs/ExampleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyExampleArgs {
  @TypeGraphQL.Field(_type => [ExampleCreateManyInput], {
    nullable: false
  })
  data!: ExampleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
