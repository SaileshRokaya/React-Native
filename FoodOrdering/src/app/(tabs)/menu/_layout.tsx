import { Stack } from "expo-router";

export default function MenuStak() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Menu' }} />
        </Stack>
    )
}