import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { Lobster_400Regular, useFonts } from '@expo-google-fonts/lobster';
import { Feather } from '@expo/vector-icons';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { Tabs } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { THEME } from '../../styles/theme';

export default function TabRoutesLayout() {
    let [fontsLoaded, fontError] = useFonts({
        Lobster_400Regular,
        Inter_400Regular,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_900Black
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const theme = createTheme({
        components: {
            Button: {
                radius: 12,
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <SafeAreaProvider>
                <Tabs
                    screenOptions={{
                        headerShown: false,
                        tabBarActiveBackgroundColor: THEME.COLORS.PRIMARY,
                        tabBarInactiveBackgroundColor: '#00000000',
                        tabBarActiveTintColor: THEME.COLORS.PRIMARY,
                        tabBarInactiveTintColor: THEME.COLORS.NEUTRAL_1,
                        tabBarLabelStyle: {
                            color: 'white'
                        },
                        tabBarStyle: {
                            borderTopColor: '#2abc0000',
                            backgroundColor: '#141414',
                            paddingBottom: 16,
                            height: 70
                        },
                        tabBarItemStyle: {
                            borderRadius: 12,
                            paddingHorizontal: 4,
                            paddingVertical: 6,
                            marginHorizontal: 4
                        }
                    }} >
                    <Tabs.Screen
                        name="inspection"
                        options={{
                            title: "Inspeções",
                            tabBarIcon: () => <Feather name="search" size={24} color={THEME.COLORS.NEUTRAL_1} />
                        }}
                    />

                    <Tabs.Screen
                        name="index"
                        options={{
                            title: "Inicio",
                            tabBarIcon: () => <Feather name="home" size={24} color={THEME.COLORS.NEUTRAL_1} />
                        }}
                    />

                    <Tabs.Screen
                        name="settings"
                        options={{
                            title: "Configurações",
                            tabBarIcon: (a) => <Feather name="settings" size={24} color={THEME.COLORS.NEUTRAL_1} />
                        }}
                    />
                </Tabs>
            </SafeAreaProvider>
            <StatusBar style='light' backgroundColor='#141414' />
        </ThemeProvider>
    )
}