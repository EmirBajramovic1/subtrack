import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { FontSize, Radius, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import type { Subscription } from "@/types";

type SubscriptionDetailsProps = {
  subscription: Subscription;
};

export default function SubscriptionDetails({
  subscription,
}: SubscriptionDetailsProps) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const yearlyCost =
    subscription.billing_cycle === "monthly"
      ? subscription.price * 12
      : subscription.price;

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
    <ScrollView
      style={{ backgroundColor: theme.background }}
      contentContainerStyle={[
        styles.container,
        {
          paddingTop: Spacing.md + insets.top,
          paddingBottom: Spacing.md + insets.bottom,
        },
      ]}
    >
      <View style={styles.content}>
        <View
          style={[
            styles.visual,
            { backgroundColor: subscription.accent_color },
          ]}
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
        </View>

        <Text style={[styles.name, { color: theme.text }]}>
          {subscription.service_name}
        </Text>

        <Text style={[styles.price, { color: theme.text }]}>
          {subscription.price.toFixed(2)} KM
        </Text>

        <Text style={[styles.cycle, { color: theme.muted }]}>
          Billed {subscription.billing_cycle}
        </Text>

        <View
          style={[
            styles.card,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <View style={styles.detailRow}>
            <Text style={[styles.label, { color: theme.muted }]}>
              Billing cycle:
            </Text>

            <Text style={[styles.value, { color: theme.text }]}>
              {subscription.billing_cycle}
            </Text>
          </View>

          <View style={[styles.divider, { backgroundColor: theme.border }]} />

          <View style={styles.detailRow}>
            <Text style={[styles.label, { color: theme.muted }]}>
              Next renewal:
            </Text>

            <Text style={[styles.value, { color: theme.text }]}>
              {subscription.next_renewal_date.split("-").reverse().join(".")}
            </Text>
          </View>

          <View style={[styles.divider, { backgroundColor: theme.border }]} />

          <View style={styles.detailRow}>
            <Text style={[styles.label, { color: theme.muted }]}>
              Yearly equivalent:
            </Text>

            <Text style={[styles.value, { color: theme.text }]}>
              {yearlyCost.toFixed(2)} KM
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: Spacing.md,
  },
  content: {
    width: "100%",
    maxWidth: 600,
    alignSelf: "center",
    alignItems: "center",
    gap: Spacing.md,
  },
  visual: {
    width: 80,
    height: 80,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  visualImage: {
    width: 70,
    height: 70,
  },
  initial: {
    fontSize: 48,
    fontWeight: "bold",
  },
  name: {
    fontSize: FontSize.hero,
    fontWeight: "bold",
    textAlign: "center",
  },
  price: {
    fontSize: FontSize.hero,
    fontWeight: "bold",
  },
  cycle: {
    fontSize: FontSize.body,
  },
  card: {
    width: "100%",
    borderWidth: 1,
    borderRadius: Radius.md,
    padding: Spacing.md,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: Spacing.sm,
    paddingVertical: Spacing.sm,
  },
  label: {
    flex: 1,
    fontSize: FontSize.body,
  },
  value: {
    flex: 1,
    flexShrink: 1,
    fontSize: FontSize.body,
    fontWeight: "bold",
    textAlign: "right",
  },
  divider: {
    height: 1,
    width: "100%",
    marginVertical: Spacing.sm,
  },
});
