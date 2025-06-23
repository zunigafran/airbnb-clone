import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
import listingsData from '@/assets/data/air-bnb-listings.json'

const Page = () => {
  const [category, setCategory] = useState('Cabins');

  const items = useMemo(() => listingsData as any, []);

  const onDataChanged = (category: string) => {
    setCategory(category);
  }
  return (
    <View style={{ flex: 1 }}>
        <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged}/>
        }}
        />
        <Listings listings={items} category={category}/>
    </View>
  );
};

export default Page