import { View, StyleSheet } from 'react-native'
import React from 'react'

const layout = ({ children }) => {
    return <View style={styles.container}>{children}</View>
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#222F3E",
        padding: 20,
        flex: 1,
        alignItems: "center",
    }
})

export default layout;