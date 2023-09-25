import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExampleOrderByWithRelationInput } from "../../../inputs/ExampleOrderByWithRelationInput";
import { ExampleWhereInput } from "../../../inputs/ExampleWhereInput";
import { ExampleWhereUniqueInput } from "../../../inputs/ExampleWhereUniqueInput";
import { ExampleScalarFieldEnum } from "../../../../enums/ExampleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstExampleOrThrowArgs {
  @TypeGraphQL.Field(_type => ExampleWhereInput, {
    nullable: true
  })
  where?: ExampleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExampleOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ExampleOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ExampleWhereUniqueInput, {
    nullable: true
  })
  cursor?: ExampleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ExampleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "detail"> | undefined;
}
