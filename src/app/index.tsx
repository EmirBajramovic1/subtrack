import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import SubscriptionCard from "@/components/SubscriptionCard";
import { FontSize, Radius, Spacing } from "@/constants/theme";
import { subscriptions } from "@/data/subscriptions";
import { useTheme } from "@/hooks/use-theme";

export default function HomeScreen() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const columns = width >= 900 ? 3 : width >= 600 ? 2 : 1;

  const contentWidth = Math.min(width, 1100) - 2 * Spacing.md;

  const cardWidth = (contentWidth - (columns - 1) * Spacing.md) / columns;

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

      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        My Subscriptions
      </Text>

      <View style={styles.cardsGrid}>
        {subscriptions.map((subscription) => (
          <SubscriptionCard
            key={subscription.id}
            subscription={subscription}
            style={{ width: cardWidth }}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 1100,
    alignSelf: "center",
    paddingHorizontal: Spacing.md,
    gap: Spacing.md,
    flexGrow: 1,
  },
  header: {
    marginBottom: Spacing.sm,
  },
  title: {
    fontSize: FontSize.hero,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: FontSize.body,
    marginTop: Spacing.xs,
  },
  summaryRow: {
    flexDirection: "row",
    gap: Spacing.sm,
  },
  summaryBox: {
    flex: 1,
    minWidth: 0,
    borderWidth: 1,
    borderRadius: Radius.md,
    padding: Spacing.sm,
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.xs,
  },
  summaryValue: {
    fontSize: FontSize.title,
    fontWeight: "bold",
    textAlign: "center",
  },
  summaryLabel: {
    fontSize: FontSize.small,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: FontSize.title,
    fontWeight: "bold",
    marginTop: Spacing.sm,
  },
  cardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: Spacing.md,
  },
});
