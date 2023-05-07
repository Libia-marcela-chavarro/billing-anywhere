import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    container: {

        width: '100%',
        height: '100%',
        backgroundColor: '#131313',

    },
    containerView:{
        flexDirection:'row',
    },
    formContainer: {
        flexDirection:'column',
        margin: '5%',
        width: '90%',
        height: '95%',
       paddingend:'70%'
    
    },
    image: {
        width: 150,
        height: 150
    },
    boton: {
       
        marginLeft: '5%',
        marginTop: '10%',
        backgroundColor: '#FFBD19',
        padding: '1%',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#DC9D00',
    },
    TextTitle:{
        fontSize: 24,
        width:'50%',
        marginTop:'14%',
        textAlign:'center',
        fontWeight:'bold',
        fontFamily:'Georgia',
    },

});

export default styles;