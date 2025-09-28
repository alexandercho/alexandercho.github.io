import { ScrollProvider } from "@/contexts/ScrollContext"
import { Stack } from "expo-router"

export default function Layout() {
    return <ScrollProvider>
        <Stack screenOptions={{ headerShown: false }} />
    </ScrollProvider>
}
