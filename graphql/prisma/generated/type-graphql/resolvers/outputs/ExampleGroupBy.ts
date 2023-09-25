import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExampleCountAggregate } from "../outputs/ExampleCountAggregate";
import { ExampleMaxAggregate } from "../outputs/ExampleMaxAggregate";
import { ExampleMinAggregate } from "../outputs/ExampleMinAggregate";

@TypeGraphQL.ObjectType("ExampleGroupBy", {
  isAbstract: true
})
export class ExampleGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  detail!: string;

  @TypeGraphQL.Field(_type => ExampleCountAggregate, {
    nullable: true
  })
  _count!: ExampleCountAggregate | null;

  @TypeGraphQL.Field(_type => ExampleMinAggregate, {
    nullable: true
  })
  _min!: ExampleMinAggregate | null;

  @TypeGraphQL.Field(_type => ExampleMaxAggregate, {
    nullable: true
  })
  _max!: ExampleMaxAggregate | null;
}
