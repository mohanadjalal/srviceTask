export interface Account extends AccountBody {
  id: number;
}

export interface AccountBody {
  clientName: string;
  description: string;
  legalEntity: string;
}
