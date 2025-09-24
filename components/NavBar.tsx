import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';

export function NavBar() {
    const renderLogo = () => <Link href="/">
        <Image source={require('@/assets/images/react-logo.png')}
            style={styles.logo} />
    </Link>

    return (
        <View style={styles.headerTitle}>
            {renderLogo()}
            <View style={styles.links}>
                <Link href="/"><ThemedText type="defaultSemiBold">Home</ThemedText></Link>
                <Link href="/about"><ThemedText type="defaultSemiBold">About</ThemedText></Link>
                <Link href="/projects"><ThemedText type="defaultSemiBold">Projects</ThemedText></Link>
                <Link href="/contact"><ThemedText type="defaultSemiBold">Contact</ThemedText></Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerTitle: {
        flex: 1,
        flexDirection: 'row',
        height: 64,
        alignItems: 'center',
        gap: 48
    },
    links: {
        flex: 1,
        flexDirection: 'row',
        gap: 32
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 50,
        width: 50
    },
});
