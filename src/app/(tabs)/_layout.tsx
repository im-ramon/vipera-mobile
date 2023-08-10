import { Feather } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabRoutesLayout() {

    return (
        <SafeAreaProvider>
            <Tabs screenOptions={{ headerShown: false }} >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Inicio",
                        tabBarIcon: () => <Feather name="home" size={24} color="gray" />
                    }}
                />

                <Tabs.Screen
                    name="inspection"
                    options={{
                        title: "Inspeções",
                        tabBarIcon: () => <Feather name="search" size={24} color="gray" />
                    }}
                />
            </Tabs>
            <StatusBar style='light' />
        </SafeAreaProvider>
    )
}