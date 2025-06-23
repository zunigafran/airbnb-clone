import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Share } from 'react-native';
import listingsData from '../../assets/data/air-bnb-listings.json';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import Animated, {
  SlideInDown,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated';
import { defaultStyles } from '@/constants/Styles';

const IMG_HEIGHT = 300;
const { width, height } = Dimensions.get('window');

const Page = () => {
  const { id } = useLocalSearchParams<{id: string}>();
  const listing = (listingsData as any[]).find((item) => item.id === id);
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75],
          ),
        },
      {
        scale: interpolate(scrollOffset.value, [-IMG_HEIGHT, 0, IMG_HEIGHT], [2,1,1])
      },
      ],
    };
  });

  return (
    <View style={defaultStyles.container}>
      <Animated.ScrollView ref={scrollRef} contentContainerStyle={{ paddingBottom: 100}}
      scrollEventThrottle={16}
      >
        <Animated.Image source={{ uri: listing.xl_picture_url}} style={[defaultStyles.pageImage, imageAnimatedStyle]}/>
        <View style={defaultStyles.infoContainer}>
          <Text style={defaultStyles.name}>{listing.name}</Text>
          <Text style={defaultStyles.location}>
            {listing.room_type} in {listing.smart_location}
          </Text>
          <Text style={defaultStyles.rooms}>
            {listing.guests_included} guest • {listing.bedrooms} bedrooms • {listing.beds} beds • 
            {listing.bathrooms} bathrooms 
          </Text>
          <View style={{ flexDirection: 'row', gap: 4 }}>
            <Ionicons name='star' size={16}/>
            <Text style={defaultStyles.ratings}>
              {listing.review_scores_rating / 20} • {listing.number_of_reviews} reviews
            </Text>
          </View>
          <View style={defaultStyles.divider}/>

          <View style={defaultStyles.hostView}>
            <Image source={{ uri: listing.host_picture_url}} style={defaultStyles.host} />
            <View>
              <Text style={{ fontWeight: '500', fontSize: 16 }}>Hosted by {listing.host_name}</Text>
              <Text>Host since {listing.host_since}</Text>
            </View>
          </View>
          <View style={defaultStyles.divider}/>
          <Text style={defaultStyles.description}>{listing.description}</Text>
        </View>
      </Animated.ScrollView>
      <Animated.View style={defaultStyles.footer} entering={SlideInDown.delay(200)}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
          <TouchableOpacity style={defaultStyles.footerText}>
            <Text style={defaultStyles.footerPrice}>€{listing.price}</Text><Text>• per night</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[defaultStyles.btn, {paddingHorizontal: 20}]}>
            <Text style={defaultStyles.btnText}>Reserve</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  )
}

export default Page