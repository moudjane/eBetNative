import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, View } from 'react-native';

export default Home = (props) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>

                <StatusBar style="auto" />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A90FF',
        paddingTop: '5%',
        paddingLeft: '1%',

    },
    head: {
        color: '#FFFFFF',
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '50%',
    },
});