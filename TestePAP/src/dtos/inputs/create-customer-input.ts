import { Field, InputType } from "type-graphql";

@InputType()
export class createCustomerInput {
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
