import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Card, Title, Paragraph, Searchbar} from 'react-native-paper';
import { MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import MapView from 'react-native-maps';

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
              <Button color='#000' style={styles.button} onPress={() => navigation.navigate('InfoScreen')} >Más Información</Button>
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
              <Button color='#000' style={styles.button} onPress={() => navigation.navigate('InfoScreen')} >Más Información</Button>
            </Card.Actions>
          </Card>
        </View>

      </ ScrollView>
    </>
  );
};

function ActivityScreen() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
      {label: 'Nadar', value: '1'},
      {label: 'Escalar', value: '2'},
      {label: 'Acampar', value: '3'},
      {label: 'Ciclismo', value: '4'}
    ]);

    return (
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    );

};

function SearchScreen() {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    );
};

function InfoScreen(navigation) {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
};


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ 
              title: 'Lista de Parques',
              headerStyle:{ backgroundColor: '#A7D8F6'},
              tabBarIcon: ({ color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }} />
            <Tab.Screen name="SearchScreen" component={SearchScreen} options={{ 
              title: 'Buscar por Nombre', 
              headerStyle:{ backgroundColor: '#A7D8F6'},
              tabBarIcon: ({ color, size}) => (
                <FontAwesome name="search" size={size} color={color} />
                ),
              }} />
            <Tab.Screen name="ActivityScreen" component={ActivityScreen} options={{ 
              title: 'Buscar por Actividad', 
              headerStyle:{ backgroundColor: '#A7D8F6'},
              tabBarIcon: ({ color, size}) => (
                <FontAwesome5 name="walking" size={size} color={color} />
              ),
              }} />
    </Tab.Navigator>
  )
};

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator>
           <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="InfoScreen" component={InfoScreen} options={{ title: 'Información del Parque', headerStyle:{ backgroundColor: '#A7D8F6'} }} />
          </Stack.Navigator>
        </NavigationContainer>
  );
};

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
  },
  map: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').height)/2,
  },
});