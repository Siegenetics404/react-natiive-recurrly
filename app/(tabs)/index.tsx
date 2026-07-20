import "@/global.css"
import { Text, View } from "react-native";
import {Link} from "expo-router";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
    return (
        <SafeAreaView className="flex-1  bg-background p-5">
            <Text className="text-5xl font-sans-extrabold text-primary">
                Home
            </Text>

            <Link href="/Onboarding" className="mt-4 rounded font-sans-bold bg-primary text-white p-4">
            Go to Onboarding
            </Link>
            <Link href="/(auth)/signIn" className="mt-4 rounded font-sans-bold bg-primary text-white p-4">
                Go to Sign In
            </Link>
            <Link href="/(auth)/signUp" className="mt-4 rounded font-sans-bold bg-primary text-white p-4">
                Go to Sign Up
            </Link>

            <Link href="/subscriptions/spotify">
                Spotify Subscriptions
            </Link>
            <Link href={{
                pathname: "/subscriptions/[id]",
                params: { id: "claude"},
            }}>
                Claude Max Subscription
            </Link>
        </SafeAreaView>
    );
}