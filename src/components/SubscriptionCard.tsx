import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import type { Subscription } from "../types";

type SubscriptionCardProps = {
  subscription: Subscription;
};

export default function SubscriptionCard({
  subscription,
}: SubscriptionCardProps) {
  return (
    <Pressable
      onPress={() => console.log("Open", subscription.id)}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View
        style={[styles.icon, { backgroundColor: subscription.accent_color }]}
      >
        <Text style={styles.iconText}>
          {subscription.service_name.charAt(0).toUpperCase()}
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{subscription.service_name}</Text>

        <Text style={styles.details}>
          Next renewal: {subscription.next_renewal_date}
        </Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>{subscription.price.toFixed(2)} KM</Text>

        <Text style={styles.cycle}>
          {subscription.billing_cycle === "monthly" ? "Monthly" : "Yearly"}
        </Text>

        <Image
          source={require("../../assets/images/icon.png")}
          style={styles.smallImage}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    gap: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  pressed: {
    opacity: 0.6,
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0F172A",
  },
  details: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 4,
  },
  priceContainer: {
    alignItems: "flex-end",
    gap: 4,
  },
  price: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#0F172A",
  },
  cycle: {
    fontSize: 11,
    color: "#64748B",
  },
  smallImage: {
    width: 14,
    height: 14,
    opacity: 0.4,
  },
});
