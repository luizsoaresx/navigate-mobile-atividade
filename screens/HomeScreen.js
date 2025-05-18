import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>Para ver o resultado, vá para a tela de Resultados.</Text>
      <Button 
        color="#1C1C1C"
        title="Incrementar"
        onPress={incrementarContador}
      />
      
      <View style={styles.spacer} />
      
      <Button
        color="#03A62C"
        title="Ver Resultado"
        onPress={() => navigation.navigate('Result', { contador })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  instruction: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: 'gray',  
  },
  spacer: {
    marginBottom: 20, 
  },
});
