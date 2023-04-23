import React from 'react'
import { TextInput, Text, TouchableOpacity, View } from 'react-native'

const Login = () => {

    return <View style={{  
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00b3b0',
        paddingHorizontal: 20
        }}
        >
        <Text style={{ marginTop: 50, fontSize: 30 }}>Isso aqui é uma imagem</Text>
        
        <TextInput style={{ width: '100%', backgroundColor: '#fff', padding: 15, borderRadius: 10, marginVertical: 15 }} placeholder="Prontuário"/>
        <TextInput style={{ width: '100%', backgroundColor: '#fff', padding: 15, borderRadius: 10 }}  placeholder="Senha"/>

        <TouchableOpacity  style={{
             backgroundColor: 'lightgray', 
             width: '100%',
              padding: 25,
              marginTop: 20,
              borderWidth: 3, 
              borderColor: '#005493',
              borderRadius: 10 
              }} 
              onPress={() => console.log('funcionou')}
               >
            <Text style={{ color: '#fff', textAlign: 'center' }}>Login</Text>
        </TouchableOpacity>
    </View>
}

export default Login
