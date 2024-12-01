import { Appointment } from "../dtos/models/appointments-model";

export const appointments: Appointment[] = [];

export function findExistingAppointment(
  startsAt: Date,
  endsAt: Date,
  office: number
): Appointment | undefined {
  return appointments.find((appointment) => {
    const isTimeConflict =
      (startsAt >= appointment.startsAt && startsAt < appointment.endsAt) ||
      (endsAt > appointment.startsAt && endsAt <= appointment.endsAt);

    const isSameOffice = appointment.office === office;

    return isTimeConflict && isSameOffice;
  });
}
