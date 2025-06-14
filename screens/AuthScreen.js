import { View, Text, TouchableOpacity } from 'react-native';
import { authStyles } from '../styles/authStyles';
import { Video } from 'expo-av';

export default function AuthScreen({ navigation }) {


  return (
    <View style={{ flex: 1, backgroundColor: '#0a0a0a' }}>
    <View style={authStyles.container}>
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
    {/* <Text style={[authStyles.title, { fontFamily: 'EchelonFont' }]}>
        ĒCHELON
      </Text>
      <Text style={authStyles.subtitle}>
        Personalized fitness meets your rhythm.
      </Text> */}
    <TouchableOpacity
        style={authStyles.buttonSignIn}
        onPress={() => navigation.navigate('CycleSetup')}
        >
        <Text style={authStyles.buttonTextSignIn}>Sign in</Text>
    </TouchableOpacity> 
    <TouchableOpacity
        style={authStyles.buttonCreateAccount}
        onPress={() => navigation.navigate('CycleSetup')}
        >
        <Text style={authStyles.buttonTextCreateAccount}>Create account</Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={authStyles.buttonSkip}
        onPress={() => navigation.navigate('Welcome')}
        >
        <Text style={authStyles.buttonTextSkip}>Skip account setup</Text>
    </TouchableOpacity>
    </View>
    </View>

  );
}
