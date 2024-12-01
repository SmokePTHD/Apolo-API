import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Appointment {
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
