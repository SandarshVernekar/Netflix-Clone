import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {authentication} from '../../common/config';
import {signInWithEmailAndPassword} from "firebase/auth";

const Main = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // navigate to the registration screen
  function handleSignUp() {
    navigation.navigate('Registration');
  }

  // login button click listener function
  function handleSubmit() {
    console.log(formData);
    signInWithEmailAndPassword(authentication,formData.email,formData.password).then((res)=>{
      console.log("successfull");
      navigation.navigate('Home');
    }).catch((error)=>{
      console.log(error)
      Alert.alert(
        'Invalid Credentials',
        'Please enter valid credentials to login!',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    });
  }

  return (
    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <Icon name="chevron-left" size={30} color="white" />
        <Image
          style={styles.headerImage}
          source={require('../../assets/logo-white.png')}
        />
        <Text style={styles.headerText}>Help</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formFeild}>
          <TextInput
            style={styles.formInput}
            placeholder="Email or phone number"
            placeholderTextColor="grey"
            onChangeText={text => {
              setFormData({...formData, email: text});
            }}
          />
        </View>
        <View style={styles.formFeild}>
          <TextInput
            style={styles.formInput}
            placeholder="Password"
            placeholderTextColor="grey"
            onChangeText={text => {
              setFormData({...formData, password: text});
            }}
          />
        </View>

        <Pressable style={styles.formButton} onPress={handleSubmit}>
          <Text style={styles.formButtonText}>SIGN IN</Text>
        </Pressable>
        <Pressable style={styles.recoverBtn} onPress={handleSignUp}>
          <Text style={styles.headerText}>SIGN UP</Text>
        </Pressable>

      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  headerText: {
    color: 'white',
    fontSize: 16,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formFeild: {
    width: '100%',
    height: 50,
    backgroundColor: '#333333',
    borderRadius: 5,
    marginBottom: 10,
    marginVertical: 10,
  },
  formInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: 'grey',
  },
  formButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#e50914',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  formButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recoverBtn: {
    marginVertical: 30,
    fontWeight: 'bold',
  },
  guideText: {
    color: 'grey',
    fontSize: 18,
    textAlign: 'center',
  },
});
