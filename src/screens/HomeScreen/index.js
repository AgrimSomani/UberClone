import React,{useState,useRef,useEffect} from 'react';
import {  ScrollView, Text, View,Image,FlatList,TextInput,Pressable } from 'react-native'
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../../colors';
import {filterData,carsAround} from '../../../data'
import FoodCard from '../../components/FoodCard';
import MapView, {PROVIDER_GOOGLE,} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';



const HomeScreen = () => {
 
    const map = useRef()

    const [latLong,setLatLong] = useState({})


    useEffect(()=>{
        getGeoLocation();
    })

    const getGeoLocation = () => {
        const config = {
          enableHighAccuracy: true,
          timeout: 2000,
          maximumAge: 3600000,
        };
      
        Geolocation.getCurrentPosition(
          info => setLatLong({lat:info.coords.latitude, long:info.coords.longitude}),
          error => console.log("ERROR", error),
          config,
        );
      };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialCommunityIcons
                    name = 'menu'
                    color={colors.white}
                    size={40}
                />
            </View>
            <ScrollView>
                <View style= {styles.topTextContainer}>
                    <Text style={styles.topMainText}>Destress your commute</Text>
                    <Text style={styles.topSideText}>Read a book. Take a nap. Stare out the</Text>
                    <Text style={styles.topSideText}>window</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Ride with Uber</Text>
                    </Pressable>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../../assets/uberCar.jpg')} style={styles.image} resizeMode='contain'/>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={filterData}
                        renderItem={({item}) => <FoodCard name={item.name} source={item.image}/>}
                        contentContainerStyle={{flexGrow: 1, justifyContent: 'space-evenly'}}
                    />
                </View>
                <View style={styles.textInputContainer}>
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder='Where to?'
                            placeholderTextColor='black'
                            style={styles.locationText}
                        />
                        <View style={styles.timeButton}>
                            <MaterialCommunityIcons 
                                name='clock' 
                                size = {16} 
                                color={colors.grey1}
                            />
                            <Text style={{fontSize:11,color:'black',textAlign:'center'}}>Now</Text>
                            <MaterialCommunityIcons 
                                name='chevron-down' 
                                size = {16} 
                                color={colors.grey1}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.pastLocationContainer}>
                    <View style={styles.pastLocation}>
                        <View style={styles.mapAndLocation}>
                            <View style={styles.mapIconContainer}>
                                <FontAwesome
                                    name='map-marker'
                                    size={18}
                                    color='black'
                                />
                            </View>
                            <View>
                                <Text style={{color:'black'}}>32 Olivia Rd</Text>
                                <Text style={{fontSize:10}}>Kiptosen, Boksburg</Text>
                            </View>
                        </View>
                        <MaterialCommunityIcons 
                            name='chevron-right' 
                            size = {20} 
                            color={colors.grey1}
                        />
                    </View>
                    <View style={styles.pastLocation}>
                        <View style={styles.mapAndLocation}>
                            <View style={styles.mapIconContainer}>
                                <FontAwesome
                                    name='map-marker'
                                    size={18}
                                    color='black'
                                />
                            </View>
                            <View>
                                <Text style={{color:'black'}}>Hughes Industrial Park </Text>
                                <Text style={{fontSize:10}}>Kiptosen, Boksburg</Text>
                            </View>
                        </View>
                        <MaterialCommunityIcons 
                            name='chevron-right' 
                            size = {20} 
                            color={colors.grey1}
                        />
                    </View>
                </View>
                <View style={{padding:10}}>
                    <Text style={{color:'black'}}>Around You</Text>
                </View>
                <View style={{height:300,width:'100%',padding:10}}>
                <MapView
                    style={{height:'100%',width:'100%'}}
                    provider = {PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    ref={map}
                    initialRegion=
                    {{
                        latitude:-26.207487,
                        longitude:28.236226,
                        latitudeDelta: 0.8,
                        longitudeDelta: 0.8,
                    }}
                >
                    {carsAround.map((item,index) => 
                        <MapView.Marker coordinate={item} key={index.toString()}>
                            <Image 
                                source={require('../../../assets/carMarker.jpg')}
                            />
                        </MapView.Marker>)
                    }
                </MapView>
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

