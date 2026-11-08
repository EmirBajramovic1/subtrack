import { ScrollView, StyleSheet, Text, View } from "react-native";

import SubscriptionCard from "@/components/SubscriptionCard";
import { Spacing } from "@/constants/theme";
import { subscriptions } from "@/data/subscriptions";
import { useTheme } from "@/hooks/use-theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const totalMonthly = subscriptions.reduce((total, subscription) => {
    const monthlyCost =
      subscription.billing_cycle === "monthly"
        ? subscription.price
        : subscription.price / 12;

    return total + monthlyCost;
  }, 0);

  const totalYearly = subscriptions.reduce((total, subscription) => {
    const yearlyCost =
      subscription.billing_cycle === "monthly"
        ? subscription.price * 12
        : subscription.price;

    return total + yearlyCost;
  }, 0);

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
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>SubTrack</Text>
        <Text style={[styles.subtitle, { color: theme.muted }]}>
          Manage your subscriptions
        </Text>
      </View>

      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        My Subscriptions
      </Text>

      <View style={styles.summaryRow}>
        <View
          style={[
            styles.summaryBox,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={[styles.summaryValue, { color: theme.text }]}>
            {subscriptions.length}
          </Text>
          <Text style={[styles.summaryLabel, { color: theme.muted }]}>
            Subscriptions
          </Text>
        </View>
        <View
          style={[
            styles.summaryBox,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={[styles.summaryValue, { color: theme.text }]}>
            {totalMonthly.toFixed(2)}
          </Text>
          <Text style={[styles.summaryLabel, { color: theme.muted }]}>
            Monthly KM
          </Text>
        </View>
        <View
          style={[
            styles.summaryBox,
            {
              backgroundColor: theme.card,
              borderColor: theme.border,
            },
          ]}
        >
          <Text style={[styles.summaryValue, { color: theme.text }]}>
            {totalYearly.toFixed(2)}
          </Text>
          <Text style={[styles.summaryLabel, { color: theme.muted }]}>
            Yearly KM
          </Text>
        </View>
      </View>

      {subscriptions.map((subscription) => (
        <SubscriptionCard key={subscription.id} subscription={subscription} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
    flexGrow: 1,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },

  summaryRow: {
    flexDirection: "row",
    gap: Spacing.sm,
  },
  summaryBox: {
    flex: 1,
    minWidth: 0,
    borderWidth: 1,
    borderRadius: 12,
    padding: Spacing.sm,
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.xs,
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  summaryLabel: {
    fontSize: 13,
    textAlign: "center",
  },
});
