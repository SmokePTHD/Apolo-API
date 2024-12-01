import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Dentist {
  @Field()
  dentistId: number; // OMD

  @Field()
  name: string;

  @Field()
  dateBirth: Date;

  @Field()
  sex: string;
}
