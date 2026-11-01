import { ScrollView, StyleSheet, Text, View } from "react-native";

import type { Subscription } from "@/types";

type SubscriptionDetailsProps = {
  subscription: Subscription;
};

export default function SubscriptionDetails({
  subscription,
}: SubscriptionDetailsProps) {
  const yearlyCost =
    subscription.billing_cycle === "monthly"
      ? subscription.price * 12
      : subscription.price;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={[styles.icon, { backgroundColor: subscription.accent_color }]}
      >
        <Text style={styles.iconText}>
          {subscription.service_name.charAt(0).toUpperCase()}
        </Text>
      </View>

      <Text style={styles.name}>{subscription.service_name}</Text>
      <Text style={styles.price}>{subscription.price.toFixed(2)} KM</Text>
      <Text style={styles.cycle}>Billed {subscription.billing_cycle}</Text>

      <View style={styles.card}>
        <Text style={styles.detail}>
          Billing cycle: {subscription.billing_cycle}
        </Text>

        <View style={styles.divider} />

        <Text style={styles.detail}>
          Next renewal: {subscription.next_renewal_date}
        </Text>

        <View style={styles.divider} />

        <Text style={styles.detail}>
          Yearly equivalent: {yearlyCost.toFixed(2)} KM
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    flexGrow: 1,
    gap: 12,
  },
  icon: {
    width: 72,
    height: 72,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  iconText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0F172A",
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0F172A",
  },
  cycle: {
    fontSize: 14,
    color: "#64748B",
  },
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  detail: {
    fontSize: 14,
    color: "#0F172A",
    padding: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#E2E8F0",
    marginVertical: 16,
    width: "100%",
  },
});
