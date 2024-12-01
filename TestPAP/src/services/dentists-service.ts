import { Dentist } from "../dtos/models/dentist-model";

export const dentists: Dentist[] = [];

export function findDentistById(dentistId: number): Dentist | undefined {
  return dentists.find((dentist) => dentist.dentistId === dentistId);
}
