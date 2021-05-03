import React from 'react';
import { 
      Text, 
      Image, 
      StyleSheet,
      SafeAreaView, // Ja assegura que nada ficara escondido na tela.
      TouchableOpacity,
      Dimensions,
      View,
    } 
    from 'react-native';
import { Feather } from '@expo/vector-icons';

import wateringImage from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {
  return(
    <SafeAreaView style={styles.container} >
      <View style={styles.wrapper} >
        <Text style={styles.title}  >
          Gerencie {'\n'}
          suas plantas de{'\n'} 
          forma fácil
        </Text>
        <Image 
          source={wateringImage} 
          style={styles.image}  
          resizeMode='contain'
        />
        <Text style={styles.subTitle}  >
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você
          sempre que precisar
        </Text>
        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.8} 
        >
          <Text style={styles.buttonText}>
            <Feather 
              name="chevron-right" 
              style={styles.buttonIcon}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
  buttonIcon: {
    fontSize: 32,
    color: colors.white,
  }
});