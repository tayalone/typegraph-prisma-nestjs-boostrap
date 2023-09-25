import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExampleOrderByWithAggregationInput } from "../../../inputs/ExampleOrderByWithAggregationInput";
import { ExampleScalarWhereWithAggregatesInput } from "../../../inputs/ExampleScalarWhereWithAggregatesInput";
import { ExampleWhereInput } from "../../../inputs/ExampleWhereInput";
import { ExampleScalarFieldEnum } from "../../../../enums/ExampleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByExampleArgs {
  @TypeGraphQL.Field(_type => ExampleWhereInput, {
    nullable: true
  })
  where?: ExampleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExampleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ExampleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExampleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "detail">;

  @TypeGraphQL.Field(_type => ExampleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ExampleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
