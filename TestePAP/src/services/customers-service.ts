import { Customer } from "../dtos/models/customer-model";

export const customers: Customer[] = [];

export function findCustomerById(customerId: number): Customer | undefined {
  return customers.find((customer) => customer.customerId === customerId);
}
