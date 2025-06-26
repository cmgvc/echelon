import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, TextInput } from 'react-native';
import { authStyles } from '../styles/authStyles';
import { Video } from 'expo-av';

export default function AuthScreen({ navigation }) {
    const [showAuthButtons, setShowAuthButtons] = React.useState(true);
    const [showSignInButtons, setShowSignInButtons] = React.useState(false);
    const [showCreateAccountButtons, setShowCreateAccountButtons] = React.useState(false);
    const initialOpacity = useRef(new Animated.Value(1)).current;
    const formOpacity = useRef(new Animated.Value(0)).current;
    const emailInput = useRef(null);
    const passwordInput = useRef(null);

    const fadeToForm = () => {
        Animated.parallel([
            Animated.timing(initialOpacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
            }),
            Animated.timing(formOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
            }),
        ]).start(() => setShowAuthButtons(false));
    };

    const fadeBack = () => {
        Animated.parallel([
            Animated.timing(formOpacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
            }),
            Animated.timing(initialOpacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
            }),
        ]).start(() => setShowAuthButtons(true));
    };

    // const handleSignIn = () => {
    //     if (emailInput )
    // }

    return (
    <View style={{ flex: 1, backgroundColor: '#0a0a0a' }}>
        <Video
        source={require('../assets/authVideo.mp4')}
        style={authStyles.video}
        isLooping
        shouldPlay
        resizeMode="cover"
        isMuted={true}
        rate={0.5}
        />
        <View style={authStyles.overlay} />

        <View style={authStyles.container}>
        <Animated.View style={{ opacity: initialOpacity, width: '100%', height: '100%', position: 'absolute'}}>
            {showAuthButtons && (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                style={authStyles.buttonSignIn}
                onPress={() => {
                    fadeToForm();
                    setShowSignInButtons(true);
                }}
                >
                <Text style={authStyles.buttonTextSignIn}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={authStyles.buttonCreateAccount}
                onPress={() => {
                    fadeToForm();
                    setShowCreateAccountButtons(true);
                }}
                >
                <Text style={authStyles.buttonTextCreateAccount}>Create account</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={authStyles.buttonSkip}
                onPress={() => navigation.navigate('Dashboard')}
                >
                <Text style={authStyles.buttonTextSkip}>Skip account setup</Text>
                </TouchableOpacity>
            </View>
            )}
        </Animated.View>
        <Animated.View style={{ opacity: formOpacity, width: '95%', height: '100%' }}>
            {!showAuthButtons && showSignInButtons && (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', position: 'absolute', justifyContent: 'center', width: '100%', top: 250 }}>
                <Text style={authStyles.title}>SIGN IN</Text>
                <TextInput 
                    placeholder="Email" 
                    placeholderTextColor="rgb(255, 255, 255)"
                    style={authStyles.input}
                    onChangeText={(text) => (emailInput.current = text)}
                />
                <TextInput 
                    placeholder="Password" 
                    placeholderTextColor="rgb(255, 255, 255)"
                    secureTextEntry
                    style={authStyles.input}
                    onChangeText={(text) => (passwordInput.current = text)}
                />
                <TouchableOpacity
                    style={authStyles.buttonForgotPassword}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={authStyles.buttonTextForgotPassword}>Forgot password</Text>
                </TouchableOpacity>
                </View>

                <View style={{ position: 'absolute', bottom: 50, width: '100%' }}>
                <TouchableOpacity
                    style={authStyles.buttonContinue}
                    onPress={() => handleSignIn()}
                >
                    <Text style={authStyles.buttonTextSignIn}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={authStyles.buttonBack}
                    onPress={() => {
                    fadeBack();
                    setShowSignInButtons(false);
                    }}
                >
                    <Text style={authStyles.buttonTextSkip}>Back</Text>
                </TouchableOpacity>
                </View>
            </View>
            )}
            {!showAuthButtons && showCreateAccountButtons && (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', position: 'absolute', justifyContent: 'center', width: '100%', top: 250 }}>
                <Text style={authStyles.title}>CREATE ACCOUNT</Text>
                <TextInput 
                    placeholder="Email" 
                    placeholderTextColor="rgb(255, 255, 255)"
                    style={authStyles.input}
                />
                <TextInput 
                    placeholder="Password" 
                    placeholderTextColor="rgb(255, 255, 255)"
                    secureTextEntry
                    style={authStyles.input}
                />
                <TouchableOpacity
                    style={authStyles.buttonForgotPassword}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={authStyles.buttonTextForgotPassword}>Forgot password</Text>
                </TouchableOpacity>
                </View>

                <View style={{ position: 'absolute', bottom: 50, width: '100%' }}>
                <TouchableOpacity
                    style={authStyles.buttonContinue}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={authStyles.buttonTextSignIn}>Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={authStyles.buttonBack}
                    onPress={() => {
                    fadeBack();
                    setShowCreateAccountButtons(false);
                    }}
                >
                    <Text style={authStyles.buttonTextSkip}>Back</Text>
                </TouchableOpacity>
                </View>
            </View>
            )}
        </Animated.View>
        </View>
    </View>
    );
}
