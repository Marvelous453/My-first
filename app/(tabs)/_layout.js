import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image,} from 'react-native';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  return (
    <View style={styles.container}>
    <Image source={{ uri: 'https://img.icons8.com/?size=100&id=4001&format=png&color=000000'}} style={{ height: 20, width: 20, marginLeft: 10}}/>
    <View style={{ paddingTop: 20}}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 20, color: 'black'}}>Welcome</Text>
      <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 20, color: 'gray', marginBottom: 20}}>By creating an account, you can start a new one with Quizzly.</Text>
      </View>

      
      <View style={{  flexDirection: 'row', alignItems: 'center', borderColor: 'gray', borderWidth:1, borderRadius: 5, marginHorizontal: 10,  marginBottom: 10, padding: 10, height: 50, backgroundColor: 'white',}}>
      <Image source={{ uri: 'https://img.icons8.com/?size=100&id=34105&format=png&color=000000'}}
      style={{ height: 25, width: 25}}/>
        <TextInput style={{ fontSize: 15, fontWeight: '500', color: 'gray', marginLeft: 5 }}placeholder="Enter your Name"
          value={name}
          onChangeText={setName} />
      </View>

      {/* Email Input */}
      <View style={{  flexDirection: 'row', alignItems: 'center', borderColor: 'gray', borderWidth:1, borderRadius: 5, marginHorizontal: 10, padding: 10, marginBottom: 10,  height: 50, backgroundColor: 'white'}}>
       <Image source={{ uri: 'https://img.icons8.com/?size=100&id=84866&format=png&color=000000'}}
      style={{ height: 20, width: 20, marginLeft: 2}}/>
        <TextInput style={{ fontSize: 15, fontWeight: '500', color: 'gray', marginLeft: 5}} placeholder="Enter your Email" 
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      
      <View style= {{  flexDirection: 'row', alignItems: 'center', borderColor: 'gray', borderWidth:1, borderRadius: 5, marginHorizontal: 10, padding: 10, marginBottom: 10,  height: 50, backgroundColor: 'white'}}>
       <Image source={{ uri: 'https://img.icons8.com/?size=100&id=82859&format=png&color=000000'}}
      style={{ height: 20, width: 20}}/>
        <TextInput style={{ fontSize: 15, fontWeight: '500', color: 'gray', marginLeft: 5}}
          placeholder="Enter your Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}/>
          <Image source={{ uri: 'https://img.icons8.com/?size=100&id=59814&format=png&color=000000'}}
            style={{ height: 20, width: 20, margin: 60 }}/>
      </View>
      
      <View style= {{  flexDirection: 'row', alignItems: 'center', borderColor: 'gray', borderWidth:1, borderRadius: 5, padding: 10,marginHorizontal: 10,  marginBottom: 10,  height: 50, backgroundColor: 'white'}}>
        <Image source={{ uri: 'https://img.icons8.com/?size=100&id=82859&format=png&color=000000'}}
      style={{ height: 20, width: 20}}/>
        <TextInput style={{ fontSize: 15, fontWeight: '500', color: 'gray', marginLeft: 5}}
          placeholder ="Enter your Confirm Password"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
          <Image source={{ uri: 'https://img.icons8.com/?size=100&id=59814&format=png&color=000000'}}
            style={{ height: 20, width: 20, margin: 60}}/>
      </View>

      <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 10, padding: 15, margin: 10, alignItems: 'center',}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white'}}>Create Account</Text>
      </TouchableOpacity>

      <View>
        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 20}}> Name: {name}</Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 20}}> Email: {email}</Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 20}}> Password: {password}</Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 20}}> ConfirmPassword: {confirmPassword}</Text>
      </View>


      <View style={{ flexDirection:'row', justifyContent: 'center', gap: 30, paddingTop: 15}}>
      <Image source={{ uri: 'https://img.icons8.com/?size=100&id=85752&format=png&color=000000'}}
      style={{ height: 40, width: 40}} 
      />
      <Image source={{ uri: 'https://img.icons8.com/?size=100&id=118490&format=png&color=000000'}}
      style={{ height: 40, width: 40}}
      />
      <Image source={{ uri: 'https://img.icons8.com/?size=100&id=85868&format=png&color=000000'}}
      style={{ height: 40, width: 40,}}
      />
      </View>

      <Text style={{ fontSize: 15, fontWeight: '500', textAlign: 'center', padding: 15}}>
        Already use Quizzly? <Text style={{ fontSize: 18, fontWeight: '700', color: 'black'}}>Log in</Text>
      </Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white',
  },
});
