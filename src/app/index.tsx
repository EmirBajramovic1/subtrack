import { ScrollView, StyleSheet, Text, View } from "react-native";

import SubscriptionCard from "@/components/SubscriptionCard";
import { subscriptions } from "@/data/subscriptions";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SubTrack</Text>
        <Text style={styles.subtitle}>Manage your subscriptions</Text>
      </View>

      <Text style={styles.sectionTitle}>
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
    backgroundColor: "#F8FAFC",
    flexGrow: 1,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0F172A",
  },
  subtitle: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 4,
  },
});
