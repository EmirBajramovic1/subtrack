export type BillingCycle = "monthly" | "yearly";

export type Subscription = {
  id: string;
  user_id: string;
  service_name: string;
  price: number;
  billing_cycle: BillingCycle;
  next_renewal_date: string;
  accent_color: string;
  created_at: string;
};
