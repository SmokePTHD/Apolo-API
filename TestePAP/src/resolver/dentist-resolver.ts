import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Dentist } from "../dtos/models/dentist-model";
import { createDentistInput } from "../dtos/inputs/create-dentist-input";

const dentists: Dentist[] = [];

@Resolver(() => Dentist)
export class DentistResolver {
  @Query(() => [Dentist])
  async dentist() {
    return dentists;
  }

  @Mutation(() => Dentist)
  async createDentist(@Arg("data") data: createDentistInput) {
    const dentist = {
      dentistId: data.dentistId,
      name: data.name,
      dateBirth: data.dateBirth,
      sex: data.sex,
    };

    dentists.push(dentist);

    return dentist;
  }
}
