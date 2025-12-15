import { Pressable } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { Colors } from '@/constants/theme';

type DarkModeSwitchProps = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export function DarkModeSwitch({ isDarkMode, setIsDarkMode }: DarkModeSwitchProps) {
    const color = isDarkMode ? Colors.dark.icon : Colors.light.icon;
    const name = isDarkMode ? 'sun' : 'moon'
    return <Pressable onPress={() => setIsDarkMode(!isDarkMode)}>
        <Feather name={name} color={color} size={36} style={{ right: 25 }} />
    </Pressable>;
}
