import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Customer } from "../dtos/models/customer-model";
import { createCustomerInput } from "../dtos/inputs/create-customer-input";
import { customers } from "../services/customers-service";

let n: number = 0;

@Resolver(() => Customer)
export class CustomerResolver {
  @Query(() => [Customer])
  async customer() {
    return customers;
  }

  @Mutation(() => Customer)
  async createCustomer(@Arg("data") data: createCustomerInput) {
    n++;
    const customer = {
      customerId: n,
      name: data.name,
      dateBirth: data.dateBirth,
      sex: data.sex,
      phone: data.phone,
      email: data.email,
      nif: data.nif,
      sns: data.sns,
    };

    customers.push(customer);

    return customer;
  }
}
