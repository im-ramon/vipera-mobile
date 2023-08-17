import { Avatar, Divider } from '@rneui/themed';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import logo from '../../assets/images/logo.png';
import { THEME } from '../../styles/theme';

export default function Home() {
    const [iconNumber, setIconNumber] = useState<number>(17);

    function sorteio(intervaloInicio: number, intervaloFim: number): number {
        const numeroSorteado = Math.floor(Math.random() * (intervaloFim - intervaloInicio + 1)) + intervaloInicio;
        return numeroSorteado;
    }
    useEffect(() => {
        setIconNumber(sorteio(1, 99))
    }, [])

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
                    <Text style={styles.dashboard_header_text}>Dashboard</Text>
                    <LinearGradient style={styles.dashboard_card} colors={[THEME.COLORS.PRIMARY, THEME.COLORS.SECOUNDARY]} start={{ x: 0.2, y: 0.2 }}>
                        <Text style={styles.text}>Total 1</Text>
                        <Text style={styles.text}>Total 1</Text>
                        <Text style={styles.text}>Total 1</Text>
                    </LinearGradient>

                    <View style={styles.dashboard_card_2}>
                        <Text style={styles.text}>Total 2</Text>
                        <Text style={styles.text}>Total 2</Text>
                        <Text style={styles.text}>Total 2</Text>
                    </View>

                    <View style={styles.dashboard_card_2}>
                        <Text style={styles.text}>Total 2</Text>
                        <Text style={styles.text}>Total 2</Text>
                        <Text style={styles.text}>Total 2</Text>
                    </View>

                    <LinearGradient style={styles.dashboard_card} colors={[THEME.COLORS.PRIMARY, THEME.COLORS.SECOUNDARY]} start={{ x: 0.2, y: 0.2 }}>
                        <Text style={styles.text}>Total 1</Text>
                        <Text style={styles.text}>Total 1</Text>
                        <Text style={styles.text}>Total 1</Text>
                    </LinearGradient>
                </View>

                <View style={styles.report_list_area}>
                    <Text style={styles.dashboard_header_text}>Reports</Text>
                    <ScrollView style={styles.report_list} endFillColor={THEME.COLORS.PRIMARY} fadingEdgeLength={0}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((el, i) =>
                            <View key={i} style={styles.report}>
                                <Avatar size={36} rounded source={{ uri: `https://randomuser.me/api/portraits/men/${iconNumber}.jpg` }} />
                                <Divider orientation="vertical" color={THEME.COLORS.PRIMARY} />
                                <View style={{}}>
                                    <Text style={{ color: 'white', fontFamily: THEME.FONT_FAMILY.REGULAR, fontSize: 12 }}><Text style={{ fontFamily: THEME.FONT_FAMILY.BOLD }}>Tema: </Text>Exemplo de tema {el}</Text>
                                    <Text style={{ color: 'white', fontFamily: THEME.FONT_FAMILY.REGULAR, fontSize: 12 }}><Text style={{ fontFamily: THEME.FONT_FAMILY.BOLD }}>Data/Hora: </Text>16/08/2023 - 22:36h</Text>
                                </View>
                            </View>
                        )}
                    </ScrollView>
                </View>

                <View style={styles.dashboard}>
                    <Text style={styles.dashboard_header_text}>Overview</Text>
                    <LinearGradient style={styles.dashboard_card} colors={[THEME.COLORS.PRIMARY, THEME.COLORS.SECOUNDARY]} start={{ x: 0.2, y: 0.2 }}>
                        <Text style={styles.text}>Total 1</Text>
                        <Text style={styles.text}>Total 1</Text>
                        <Text style={styles.text}>Total 1</Text>
                    </LinearGradient>

                    <View style={styles.dashboard_card_2}>
                        <Text style={styles.text}>Total 2</Text>
                        <Text style={styles.text}>Total 2</Text>
                        <Text style={styles.text}>Total 2</Text>
                    </View>

                    <View style={styles.dashboard_card_2}>
                        <Text style={styles.text}>Total 2</Text>
                        <Text style={styles.text}>Total 2</Text>
                        <Text style={styles.text}>Total 2</Text>
                    </View>

                    <LinearGradient style={styles.dashboard_card} colors={[THEME.COLORS.PRIMARY, THEME.COLORS.SECOUNDARY]} start={{ x: 0.2, y: 0.2 }}>
                        <Text style={styles.text}>Total 1</Text>
                        <Text style={styles.text}>Total 1</Text>
                        <Text style={styles.text}>Total 1</Text>
                    </LinearGradient>
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
        width: '100%',
        borderRadius: THEME.RADIUS.SM,
        paddingHorizontal: THEME.SPACING.LG,
        marginBottom: 16,
        rowGap: 16
    },
    dashboard: {
        width: '100%',
        marginTop: 6,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: THEME.RADIUS.MD,
    },
    dashboard_header_text: {
        width: '100%',
        textAlign: 'left',
        fontSize: THEME.FONT_SIZE.LG,
        marginBottom: THEME.SPACING.XSM,
        color: THEME.COLORS.NEUTRAL_2,
        fontFamily: THEME.FONT_FAMILY.BOLD,
        paddingLeft: THEME.SPACING.MD,
    },
    dashboard_card: {
        backgroundColor: THEME.COLORS.PRIMARY,
        borderRadius: THEME.RADIUS.MD,
        width: '47%',
        padding: THEME.SPACING.MD,
        position: 'relative',
    },
    dashboard_card_2: {
        backgroundColor: THEME.COLORS.BACKGROUND_1,
        borderRadius: THEME.RADIUS.MD,
        width: '47%',
        padding: THEME.SPACING.MD,
        position: 'relative'
    },
    report_list_area: {
        width: '100%',
    },
    report_list: {
        backgroundColor: THEME.COLORS.BACKGROUND_1,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 7,
        borderRadius: THEME.RADIUS.SM,
        width: '100%',
        padding: THEME.SPACING.MD,
        height: 264
    },
    report: {
        flexDirection: 'row',
        columnGap: 16,
        marginBottom: 20,
    }
});
