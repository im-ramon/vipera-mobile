import { Button } from '@rneui/base';
import { useThemeMode } from '@rneui/themed';
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
    const { mode, setMode } = useThemeMode();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>INDEX - Configurações</Text>
            <Button onPress={() => setMode('dark')} title={mode} />
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
