import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    KeyboardAvoidingView,
    ScrollView,
    TouchableHighlight,
    Image,
    Text,
    View
} from 'react-native'
import styles from '../HomeStack/styles'

function HomeStack() {
    const navigation = useNavigation();
    const [text, setText] = useState('');
    return (

        <KeyboardAvoidingView
            style={styles.container}>


            <ScrollView style={styles.formContainer}>
                <TouchableHighlight style={styles.boton}
                    underlayColor="#rgba(50, 50, 50, 0.85)"
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Login')}>
                    <View style={styles.containerView}>
                        <Image source={require('../../assets/images/inventario.png')} style={styles.image} />
                        <Text style={styles.TextTitle}>Inventario</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.boton}
                    underlayColor="#rgba(50, 50, 50, 0.85)"
                    activeOpacity={0.8}
                    onPress={() =>console.log("Hola mundo")}>
                     <View style={styles.containerView}>
                        <Image source={require('../../assets/images/mercancia.png')} style={styles.image} />
                        <Text style={styles.TextTitle}>Registro de mercancia</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.boton}
                    underlayColor="#rgba(50, 50, 50, 0.85)"
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Login')}>
                  <View style={styles.containerView}>
                        <Image source={require('../../assets/images/facturacion.png')} style={styles.image} />
                        <Text style={styles.TextTitle}>Facturacion </Text>
                    </View>
                </TouchableHighlight>
               
                <TouchableHighlight style={styles.boton}
                    underlayColor="#rgba(50, 50, 50, 0.85)"
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Login')}>
                   <View style={styles.containerView}>
                        <Image source={require('../../assets/images/codigoQr.png')} style={styles.image} />
                        <Text style={styles.TextTitle}>Codigo QR</Text>
                    </View>
                    </TouchableHighlight>
            </ScrollView>




        </KeyboardAvoidingView>
    )
}

export default HomeStack;