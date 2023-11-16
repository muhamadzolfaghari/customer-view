export interface ICustomer {
  names: string;
  age: number;
}

export default interface ICustomerResult {
  ok: boolean;
  message: "Okay";
  data: {
    items: ICustomer[];
  };
}
