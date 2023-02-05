// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';

// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from './Images/heyAllilogo.jpg'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user_id')
        // value previously stored
        console.log(value)
        navigation.navigate(
            value === null ? 'login' : 'home'
          )
      
    } catch(e) {
      // error reading value
    }
  }
  
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
    //   Check if user_id is set or not
    //   If not then send for Authentication
    //   else send to Home Screen
    //   AsyncStorage.getItem('user_id').then((value) =>
    //     navigation.replace(
    //       value === null ? 'Auth' : 'DrawerNavigationRoutes'
    //     ),
    //   );


    //  getData()

    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(user)
    navigation.navigate("home")

    // ...  
  } else {
    // User is signed out
    // ...
    navigation.navigate("login")

  }
})
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={{ borderRadius:100,width:100,height:100}}
      />
      <Text style={{marginTop:30,fontSize:40,fontWeight:'bold',color:'white',fontFamily:'san'}}>Hey Alli</Text>
      <Text style={{marginTop:30,fontSize:20,color:'white'}}>THE WORLD'S MOST POWERFULL AI</Text>

      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#569ffb',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});