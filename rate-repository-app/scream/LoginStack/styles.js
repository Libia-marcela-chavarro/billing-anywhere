import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    KeyboardAvoidingView: {
        flex: 1
    },
    container: {

        width: '100%',
        height: '114%',


    },
    formContainer: {
       
        paddingTop: '60%',
        paddingLeft: '2%',
        paddingRight: '2%',
        marginTop: '30%',
        margin: '5%',

    },
    
    input: {
        height: '13%',
        backgroundColor: 'rgba(50, 50, 50, 0.85)',
        borderWidth: 1,
        borderColor: 'rgba(155, 155, 155, 0.85)',
        borderRadius: 5,
        padding: '2%',
        marginBottom: '3%',
    },
    TextLink: {
        color: '#FFDA03',
        textDecorationLine: 'underline',
        marginLeft: '50%'
    },
    boton: {
        width: '55%',
        marginLeft: '22%',
        marginTop: '10%',
        backgroundColor: '#FFBD19',
        padding: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#DC9D00',
    },
    texto: {
        color: '#FFE5A5',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default styles;