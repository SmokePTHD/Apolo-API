import { Field, InputType } from "type-graphql";

@InputType()
export class createDentistInput {
  @Field()
  dentistId: number; // OMD

  @Field()
  name: string;

  @Field()
  dateBirth: Date;

  @Field()
  sex: string;
}
