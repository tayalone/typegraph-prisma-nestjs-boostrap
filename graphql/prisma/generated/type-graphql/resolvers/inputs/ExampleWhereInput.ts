import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ExampleWhereInput", {
  isAbstract: true
})
export class ExampleWhereInput {
  @TypeGraphQL.Field(_type => [ExampleWhereInput], {
    nullable: true
  })
  AND?: ExampleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExampleWhereInput], {
    nullable: true
  })
  OR?: ExampleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExampleWhereInput], {
    nullable: true
  })
  NOT?: ExampleWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  detail?: StringFilter | undefined;
}
