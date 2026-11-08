import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { useTheme } from "@/hooks/use-theme";

export default function RootLayout() {
  const theme = useTheme();

  return (
    <>
      <StatusBar style="auto" />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTintColor: theme.text,
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: theme.background,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
