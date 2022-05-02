import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

function HomeScreen({ navigation }) {
  return (
    <>
      <ScrollView>

        <View>
          <Card style={styles.card}>
            <Card.Content >
              <Title>Nombre del parque</Title>
              <Paragraph>HORARIO: 8:00 - 18:00</Paragraph>
              <Paragraph>DIRECCION: Calle ejemplo</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions style={styles.buttonSection}>
              <Button color='#000' style={styles.button} onPress={() => navigation.navigate('ParkScreen')} >Más Información</Button>
            </Card.Actions>
          </Card>
        </View>

        <View>
          <Card style={styles.card}>
            <Card.Content >
              <Title>Nombre del parque</Title>
              <Paragraph>HORARIO: 8:00 - 18:00</Paragraph>
              <Paragraph>DIRECCION: Calle ejemplo</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions style={styles.buttonSection}>
              <Button color='#000' style={styles.button} onPress={() => navigation.navigate('ParkScreen')} >Más Información</Button>
            </Card.Actions>
          </Card>
        </View>

      </ ScrollView>
    </>
  );
}

function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Here goes Login screen/profile screen!</Text>
    </View>
  );
}

function ParkScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Here goes Park screen!</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Parques' }} />
          <Stack.Screen name="ParkScreen" component={ParkScreen} options={{ title: 'Nombre del Parque' }} />
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 25,
  },
  buttonSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#a9daf6',
  }
});