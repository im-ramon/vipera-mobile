import { Button } from '@rneui/themed';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Inspection() {


    return (


        <View style={styles.container}>
            <Text style={styles.text}>Viperas Mobiles - INSPECTION</Text>
            <Button>
                <Text style={styles.text}>INSPECTION</Text>
            </Button>
            <StatusBar style="auto" />
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
        color: "#fff"
    }
});
