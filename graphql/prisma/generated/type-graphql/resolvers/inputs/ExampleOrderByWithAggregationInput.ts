import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExampleCountOrderByAggregateInput } from "../inputs/ExampleCountOrderByAggregateInput";
import { ExampleMaxOrderByAggregateInput } from "../inputs/ExampleMaxOrderByAggregateInput";
import { ExampleMinOrderByAggregateInput } from "../inputs/ExampleMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExampleOrderByWithAggregationInput", {
  isAbstract: true
})
export class ExampleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  detail?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExampleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ExampleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExampleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ExampleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExampleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ExampleMinOrderByAggregateInput | undefined;
}
