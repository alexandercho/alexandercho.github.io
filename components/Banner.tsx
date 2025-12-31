import { useWindowDimensions, StyleSheet, View } from 'react-native';
import { ImageBackground } from 'expo-image';
import { useTheme } from '@react-navigation/native';

import ReflectedText from '@/components/ReflectedText';

export default function Banner() {
    const { width } = useWindowDimensions()
    const theme = useTheme();
    const isDarkMode = theme.dark;
    const bannerSource = isDarkMode
        ? require('@/assets/banners/darkBanner.jpg')
        : require('@/assets/banners/lightBanner.jpg');

    return (
        <View style={styles.bannerContainer}>
            <ImageBackground
                contentFit='cover'
                contentPosition={{ top: '36%' }}
                transition={500}
                source={bannerSource}
                style={styles.banner}>
                <ReflectedText
                    text={'Hey I\'m Alex Cho. I write code.'}
                    fontSize={width / 30}
                    style={{
                        top: '62%',
                        left: '20%'
                    }}
                />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    bannerContainer: {
        width: '100%',
        aspectRatio: 2.9 / 1,
        position: 'relative'
    },
    banner: {
        width: '100%',
        height: '100%'
    }
});

