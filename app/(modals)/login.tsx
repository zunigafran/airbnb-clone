import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser'
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import { useOAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';

enum Strategy {
  Google = 'oauth_google',
  Apple = 'oauth_apple',
  Facebook = 'oauth_facebook'
}

const Login = () => {
useWarmUpBrowser();
const router = useRouter();

const {startOAuthFlow: googleAuth} = useOAuth({strategy: 'oauth_google'});
const {startOAuthFlow: appleAuth} = useOAuth({strategy: 'oauth_apple'});
const {startOAuthFlow: facebookAuth} = useOAuth({strategy: 'oauth_facebook'});

const onSelectAuth = async (strategy: Strategy) => {
  const selectedAuth = {
    [Strategy.Google]: googleAuth,
    [Strategy.Apple]: appleAuth,
    [Strategy.Facebook]: facebookAuth,    
  }[strategy];
  try {
    const { createdSessionId, setActive} = await selectedAuth();
    console.log("🚀 ~ file: login.tsx:31 ~ onSelectedAuth ~ createdSessionId:", createdSessionId)

    if (createdSessionId) {
      setActive!({ session: createdSessionId})
      router.back();
    }
  } catch (err) {
    console.error('OAuth error: ',err)
  }
}

  return (
    <View style={styles.container}>
      <TextInput autoCapitalize='none' placeholder='Email' style={[defaultStyles.inputField, { marginBottom: 32}]}/>
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>

      <View style={defaultStyles.seperatorView}>
        <View
          style={{
            flex: 1,
            borderBottomColor: '#000',
            borderBottomWidth: StyleSheet.hairlineWidth
          }}/>
          <Text style={defaultStyles.seperator}>or</Text>
          <View
          style={{
            flex: 1,
            borderBottomColor: '#000',
            borderBottomWidth: StyleSheet.hairlineWidth
          }}/>
        </View>

      <View style={{ gap: 20 }}>
        <TouchableOpacity style={defaultStyles.btnOutline}>
          <Ionicons name="call-outline" style={defaultStyles.btnIcon} size={24}/>
          <Text style={defaultStyles.btnOutlineText}>Continue with Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={defaultStyles.btnOutline} onPress={() => onSelectAuth(Strategy.Apple)}>
          <Ionicons name="logo-apple" style={defaultStyles.btnIcon} size={24}/>
          <Text style={defaultStyles.btnOutlineText}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={defaultStyles.btnOutline} onPress={() => onSelectAuth(Strategy.Google)}>
          <Ionicons name="logo-google" style={defaultStyles.btnIcon} size={24}/>
          <Text style={defaultStyles.btnOutlineText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={defaultStyles.btnOutline} onPress={() => onSelectAuth(Strategy.Facebook)}>
          <Ionicons name="logo-facebook" style={defaultStyles.btnIcon} size={24}/>
          <Text style={defaultStyles.btnOutlineText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
      
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
});
export default Login