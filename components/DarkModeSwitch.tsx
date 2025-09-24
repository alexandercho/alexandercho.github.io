import React from 'react';
import { Switch } from 'react-native';

type DarkModeSwitchProps = {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export function DarkModeSwitch({ isDarkMode, setIsDarkMode }: DarkModeSwitchProps) {

    return (
        <Switch
            style={{
                marginRight: 32
            }}
            // @ts-expect-error react-native doesn't include activeThumbColor in types
            activeThumbColor="#ffd93d"
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
            trackColor={{ false: '#bbb', true: '#1e3a8a' }}
            ios_backgroundColor="#888"
            onValueChange={() => setIsDarkMode(!isDarkMode)}
            value={isDarkMode}
        />
    );
}
