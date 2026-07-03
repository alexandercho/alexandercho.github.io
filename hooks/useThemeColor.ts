import { Colors } from '@/constants/theme';
import { useTheme } from 'expo-router/react-navigation';

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
    const theme = useTheme();
    const themeName = theme.dark ? 'dark' : 'light';

    // Use prop override if provided
    const colorFromProps = props[themeName];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Colors[themeName][colorName];
    }
}
