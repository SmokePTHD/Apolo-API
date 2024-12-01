import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Appointment } from "../dtos/models/appointments-model";
import { createAppointmentInput } from "../dtos/inputs/create-appoitments-input";
import { Customer } from "../dtos/models/customer-model";
import { findCustomerById } from "../services/customers-service";
import { findDentistById } from "../services/dentists-service";
import { findExistingAppointment } from "../services/appoitmnets-service";

const appointments: Appointment[] = [];

@Resolver(() => Appointment)
export class AppointmentsResolver {
  @Query(() => [Appointment])
  async appointment() {
    return appointments;
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg("data") data: createAppointmentInput) {
    const customer = findCustomerById(data.customerId);
    const dentist = findDentistById(data.dentistId);
    const existAppointment = findExistingAppointment(
      data.startsAt,
      data.endsAt,
      data.office
    );

    if (!customer) {
      throw new Error(`Customer ID ${data.customerId} not found`);
    }

    if (!dentist) {
      throw new Error(`Dentist ID ${data.customerId} not found`);
    }

    if (existAppointment) {
      throw new Error(
        `There is already an appointment at the chosen time in office ${data.office}.`
      );
    }

    const appoitment = {
      customerId: data.customerId,
      dentistId: data.dentistId,
      office: data.office,
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    };

    appointments.push(appoitment);

    return appoitment;
  }
}
