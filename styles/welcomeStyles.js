import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 50,
    color: '#F9F4F2',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 19,
    fontFamily: 'EchelonFont',
    color: '#6c757d',
    color: 'rgba(255, 255, 255, 0.71)',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 75,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingVertical: 14,
    paddingHorizontal: 100,
    borderColor: 'rgba(255, 255, 255, 0.57)',
    borderRadius: 0,
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
    backgroundColor: 'rgba(10, 10, 10, 0.75)',
  },
});
