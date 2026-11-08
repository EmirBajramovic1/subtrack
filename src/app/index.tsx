
import SubscriptionDetails from "@/components/SubscriptionDetails";
import { subscriptions } from "@/data/subscriptions";

export default function HomeScreen() {
  return (
    <SubscriptionDetails subscription={subscriptions[5]} />
  );
}
