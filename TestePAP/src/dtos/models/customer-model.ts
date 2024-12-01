import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Customer {
  @Field()
  customerId: number;

  @Field()
  name: string;

  @Field()
  dateBirth: Date;

  @Field()
  sex: string;

  @Field()
  phone: string;

  @Field()
  email: string;

  @Field()
  nif: number;

  @Field()
  sns: number;
}
