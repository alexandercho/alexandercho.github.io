import Feather from '@expo/vector-icons/Feather';
import { Colors } from '@/constants/theme';
import { HoverPressable } from '@/components/HoverPressable';

type DarkModeSwitchProps = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export function DarkModeSwitch({ isDarkMode, setIsDarkMode }: DarkModeSwitchProps) {
    const color = isDarkMode ? Colors.dark.icon : Colors.light.icon;
    const name = isDarkMode ? 'sun' : 'moon'
    return <HoverPressable
        accessibilityLabel={isDarkMode ? 'Use light appearance' : 'Use dark appearance'}
        accessibilityRole='button'
        lift={2}
        onPress={() => setIsDarkMode(!isDarkMode)}
        style={{
            width: 44,
            height: 44,
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
        <Feather name={name} color={color} size={24} />
    </HoverPressable>;
}
