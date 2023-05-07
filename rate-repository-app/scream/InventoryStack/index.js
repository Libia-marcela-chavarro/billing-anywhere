import React, {useState} from 'react'
import { ImageBackground, KeyboardAvoidingView, TouchableHighlight, View, TextInput, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
function InventoryStack() {
    const navigation = useNavigation();
    const [text, setText] = useState('');
    return (

        <KeyboardAvoidingView>

            <ImageBackground style={styles.container}
                source={require('../../assets/images/ImageFondo.png')}
                blurRadius={16}
            >
                <View style={styles.formContainer}>
                    <TextInput placeholder="Correo" placeholderTextColor='#FFE5A5' style={styles.input} />
                    <TextInput placeholder="Contraseña" placeholderTextColor='#FFE5A5' style={styles.input} />
                    <TouchableOpacity>
                        <Text style={styles.TextLink}>¿Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                    <TouchableHighlight style={styles.boton}
                        underlayColor="#rgba(50, 50, 50, 0.85)"
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.texto}>iniciar sesión</Text>
                    </TouchableHighlight>
                </View>
            </ImageBackground>



        </KeyboardAvoidingView>
    )
}

export default InventoryStack