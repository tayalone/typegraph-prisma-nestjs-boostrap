import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ExampleScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ExampleScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ExampleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ExampleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExampleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ExampleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExampleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ExampleScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  detail?: StringWithAggregatesFilter | undefined;
}
