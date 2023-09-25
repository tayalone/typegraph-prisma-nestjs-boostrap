import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateExampleArgs } from "./args/AggregateExampleArgs";
import { Example } from "../../../models/Example";
import { AggregateExample } from "../../outputs/AggregateExample";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Example)
export class AggregateExampleResolver {
  @TypeGraphQL.Query(_returns => AggregateExample, {
    nullable: false
  })
  async aggregateExample(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExampleArgs): Promise<AggregateExample> {
    return getPrismaFromContext(ctx).example.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
