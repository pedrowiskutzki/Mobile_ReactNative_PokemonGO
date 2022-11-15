import { View, TouchableOpacity, Text, TextInput, Image,  StatusBar} from "react-native";
import { styles } from "./styles";
import logoPokemon from '../assets/logoPokemon.png';
import buttonExit from '../assets/buttonExit.png';
import { ImageBackground } from "react-native";

export const Login = () => {
    return (
        <View style={styles.container} >
            <StatusBar
                barStyle="light-content"
                hidden={false}
                backgroundColor="black"
            />
              <ImageBackground 
             source={require('../assets/background.png')} 
             style={styles.imageBackground}
             >   
            <Image source={logoPokemon} style={styles.image} 
            />
            <Text style={styles.title}>CLUBE DE TREINADORES
            </Text>
            <TextInput style={styles.input} placeholder="Nome de usuário" placeholderTextColor="#c4c4c4" />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} placeholderTextColor="#c4c4c4" />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>ENTRAR</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Esqueceu seu nome de usuário?</Text>
            <Text style={styles.text}>Esqueceu sua senha?</Text>
            <Image source={buttonExit} style={styles.iconExit} 
             />
            </ImageBackground>
        </View>
    );
}