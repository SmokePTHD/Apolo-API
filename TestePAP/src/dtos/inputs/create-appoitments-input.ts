import { Field, InputType } from "type-graphql";

@InputType()
export class createAppointmentInput {
  @Field()
  customerId: number;

  @Field()
  dentistId: number;

  @Field()
  office: number;

  @Field()
  startsAt: Date;

  @Field()
  endsAt: Date;
}
