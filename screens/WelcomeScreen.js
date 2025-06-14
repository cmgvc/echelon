import { View, Text, TouchableOpacity } from 'react-native';
import { welcomeStyles } from '../styles/welcomeStyles';
import { Video } from 'expo-av';

export default function WelcomeScreen({ navigation }) {

    return (
      <View style={{ flex: 1, backgroundColor: '#0a0a0a' }}>
      <View style={welcomeStyles.container}>
        <Video
          source={require('../assets/welcomeVideo2.mp4')}
          style={welcomeStyles.video}
          isLooping
          shouldPlay
          resizeMode="cover"
          isMuted={true}
          rate={0.8}
        />
        <View style={welcomeStyles.overlay} />
        <Text style={[welcomeStyles.title, { fontFamily: 'EchelonFont' }]}>
          ĒCHELON
        </Text>
        <Text style={welcomeStyles.subtitle}>
          Personalized fitness meets your rhythm.
        </Text>
        <TouchableOpacity
        activeOpacity={0.8}
          style={welcomeStyles.button}
          onPress={() => navigation.navigate('Auth')}
        >
          <Text style={welcomeStyles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
}
