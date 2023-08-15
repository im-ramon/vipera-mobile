import { Stack } from 'expo-router/stack';

export default function Layout() {
    return <Stack
        screenOptions={{
            // headerShown: false,
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            animation: 'fade',
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}
    >
        <Stack.Screen name='index' options={{ title: "INDEX" }} />
    </Stack>;
}
