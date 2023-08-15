import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/images/logo.png';
import { THEME } from '../../styles/theme';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.image}
                    source={logo}
                    placeholder={'logo Vipera'}
                    contentFit="cover"
                />
                <Text style={styles.logoText}>Vipera</Text>
            </View>
            <View style={styles.main}>
                <View style={styles.dashboard}>
                    <View style={styles.dashboard_card}>
                        <Text style={styles.text}>Total 1</Text>
                        <Text style={styles.text}>Total 1</Text>
                        <Text style={styles.text}>Total 1</Text>
                    </View>

                    <View style={styles.dashboard_card}>
                        <Text style={styles.text}>Total 2</Text>
                        <Text style={styles.text}>Total 2</Text>
                        <Text style={styles.text}>Total 2</Text>
                    </View>

                    <View style={styles.dashboard_card}>
                        <Text style={styles.text}>Total 2</Text>
                        <Text style={styles.text}>Total 2</Text>
                        <Text style={styles.text}>Total 2</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.COLORS.BACKGROUND_2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: THEME.SPACING.PADDING
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        paddingVertical: 8
    },
    logoText: {
        fontFamily: 'Lobster_400Regular',
        fontSize: 26,
        color: THEME.COLORS.PRIMARY
    },
    image: {
        width: 26,
        height: 26,
    },
    text: {
        color: "#fff"
    },
    main: {
        backgroundColor: THEME.COLORS.BACKGROUND_1,
        width: '100%',
        alignItems: 'center',
        borderRadius: THEME.RADIUS.SM,
    },
    dashboard: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8
    },
    dashboard_card: {
        backgroundColor: THEME.COLORS.PRIMARY,
        borderRadius: THEME.RADIUS.MD,
        flex: 1,
        padding: THEME.SPACING.PADDING
    },
});
