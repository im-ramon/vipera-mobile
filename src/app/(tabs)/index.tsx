import { Button } from '@rneui/themed';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Viperas Mobile - HOME</Text>

            <Link style={styles.text} href="/page1">page1</Link>
            <Button>
                <Text style={styles.text}>INSPECTION</Text>
            </Button>

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
