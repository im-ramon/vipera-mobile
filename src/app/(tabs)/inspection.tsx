import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Inspection() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Viperas Mobile - INSPECTION</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "#fff"
    }
});