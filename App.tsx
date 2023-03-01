import {
  StyleSheet, 
  Text,
  View, 
  SafeAreaView,
  KeyboardAvoidingView, 
  Image,
  Pressable,
  } from 'react-native'
import React from 'react'
import { Input } from '@rneui/themed';

const App = () => {
    return (
      <SafeAreaView style = {{flex:1, backgroundColor: "black", padding:10, alignItems: "center"}}>
        <KeyboardAvoidingView>
          <View style={{alignItems:"center"}}>
            <Image style={{ height: 50, width: 150, marginTop:20 }}
              source={{
                uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
              }}
              />
          </View>

          <View style= {{width:300, marginTop:45}}>
            <Input
            
            inputContainerStyle={{borderBottomWidth:0}}
            placeholder="Kullanıcı Adı"
            placeholderTextColor= "white"
            style={{
              width:300, 
              padding:10, 
              borderRadius:15, 
              color:"white", 
              backgroundColor:"gray"
              }} 
              />

            <Input
            secureTextEntry={true}
            inputContainerStyle={{borderBottomWidth:0}}
            placeholder="Şifre"
            placeholderTextColor= "white"
            style={{
              width:300, 
              padding:10, 
              borderRadius:15, 
              color:"white", 
              backgroundColor:"gray"
              }} 
              />
          </View>

        <Pressable 
        style={{
          width:300, 
          marginLeft:"auto", 
          marginRight:"auto", 
          justifyContent:"center", 
          alignItems:"center", 
          borderColor: "white", 
          borderWidth:3, 
          borderRadius:15
          }}
          >
            
          <Text style={{textAlign: "center", fontSize:15, fontWeight:"400", color:"white"}} > Sign In </Text>

        </Pressable>
      
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
}

export default App