import { Feather } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedIconProps = {
    style?: object;
    lightColor?: string;
    darkColor?: string;
    name?: string;
};

export function ThemedIcon({
    style = {},
    lightColor,
    darkColor,
    name
}: ThemedIconProps) {
    const primaryColor = useThemeColor({ light: lightColor, dark: darkColor }, 'primaryText');
    return (
        <Feather style={style} name={name as any} size={16} color={primaryColor} />
    );
}
