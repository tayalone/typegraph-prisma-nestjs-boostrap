import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExampleUpdateManyMutationInput } from "../../../inputs/ExampleUpdateManyMutationInput";
import { ExampleWhereInput } from "../../../inputs/ExampleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyExampleArgs {
  @TypeGraphQL.Field(_type => ExampleUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExampleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ExampleWhereInput, {
    nullable: true
  })
  where?: ExampleWhereInput | undefined;
}
