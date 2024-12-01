import { Field, InputType } from "type-graphql";

@InputType()
export class createAppointmentInput {
  @Field()
  customerId: string;

  @Field()
  startsAt: Date;

  @Field()
  endsAt: Date;
}
