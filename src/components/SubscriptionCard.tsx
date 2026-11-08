import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native";

import { FontSize, Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import type { Subscription } from "@/types";

type SubscriptionCardProps = {
  subscription: Subscription;
  style?: StyleProp<ViewStyle>;
};

export default function SubscriptionCard({
  subscription,
  style,
}: SubscriptionCardProps) {
  const theme = useTheme();

  const billingCycle =
    subscription.billing_cycle === "monthly" ? "Monthly" : "Yearly";

  const serviceName = subscription.service_name.trim().toLowerCase();

  let logo = null;

  if (serviceName === "github pro") {
    logo = require("../../assets/images/github.png");
  } else if (serviceName === "icloud+ storage") {
    logo = require("../../assets/images/icloud.png");
  } else if (serviceName === "spotify") {
    logo = require("../../assets/images/spotify.png");
  } else if (serviceName === "netflix") {
    logo = require("../../assets/images/netflix.png");
  } else if (serviceName === "youtube premium") {
    logo = require("../../assets/images/youtube.png");
  }

  return (
    <Pressable
      onPress={() => console.log("Open", subscription.id)}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: theme.card,
          borderColor: theme.border,
        },
        pressed && styles.pressed,
        style,
      ]}
    >
      <View
        style={[styles.visual, { backgroundColor: subscription.accent_color }]}
      >
        {logo ? (
          <Image
            source={logo}
            style={styles.visualImage}
            resizeMode="contain"
          />
        ) : (
          <Text style={[styles.initial, { color: theme.onService }]}>
            {subscription.service_name.charAt(0).toUpperCase()}
          </Text>
        )}

        <Text
          style={[
            styles.badge,
            {
              backgroundColor: theme.primary,
              color: theme.onPrimary,
            },
          ]}
        >
          {billingCycle}
        </Text>
      </View>

      <View style={styles.body}>
        <View style={styles.row}>
          <Text style={[styles.name, { color: theme.text }]}>
            {subscription.service_name}
          </Text>

          <Text style={[styles.price, { color: theme.text }]}>
            {subscription.price.toFixed(2)} KM
          </Text>
        </View>

        <Text style={[styles.details, { color: theme.muted }]}>
          Next renewal: {subscription.next_renewal_date.split("-").reverse().join(".")}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: Radius.md,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.6,
  },
  visual: {
    width: "100%",
    aspectRatio: 16 / 9,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  logoContainer: {
    width: 110,
    height: 110,
    borderRadius: Radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  visualImage: {
    width: 110,
    height: 110,
  },
  initial: {
    fontSize: 48,
    fontWeight: "bold",
  },
  badge: {
    position: "absolute",
    top: Spacing.sm,
    right: Spacing.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: Radius.pill,
    fontSize: FontSize.small,
    fontWeight: "bold",
    overflow: "hidden",
  },
  body: {
    padding: Spacing.md,
    gap: Spacing.sm,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: Spacing.sm,
  },
  name: {
    flex: 1,
    fontSize: FontSize.body,
    fontWeight: "bold",
  },
  price: {
    fontSize: FontSize.body,
    fontWeight: "bold",
    flexShrink: 1,
    textAlign: "right",
  },
  details: {
    fontSize: FontSize.small,
  },
});
