import { ScrollView, StyleSheet, Text, View } from "react-native";

import SubscriptionCard from "@/components/SubscriptionCard";
import { Spacing } from "@/constants/theme";
import { subscriptions } from "@/data/subscriptions";
import { useTheme } from "@/hooks/use-theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
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
        My Subscriptions ({subscriptions.length})
      </Text>

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
});
