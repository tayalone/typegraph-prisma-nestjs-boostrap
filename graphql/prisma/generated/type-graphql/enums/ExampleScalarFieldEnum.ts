import * as TypeGraphQL from "type-graphql";

export enum ExampleScalarFieldEnum {
  id = "id",
  detail = "detail"
}
TypeGraphQL.registerEnumType(ExampleScalarFieldEnum, {
  name: "ExampleScalarFieldEnum",
  description: undefined,
});
