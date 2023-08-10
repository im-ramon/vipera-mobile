import { Feather } from '@expo/vector-icons';
import { Tabs } from "expo-router";
export default function TabRoutesLayout() {
    return (
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
    )
}