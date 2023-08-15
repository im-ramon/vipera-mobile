import { StyleSheet, Text, View } from 'react-native';

export default function Inspection() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Vipera Mobile - INSPECTION</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 16,
        backgroundColor: '#141414',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    text: {
        color: "#ff0000"
    }
});
