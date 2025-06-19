import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import { defaultStyles } from '@/constants/Styles';
import { Link } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import * as Haptics from 'expo-haptics';

const categories = [
  {
    name: 'Tiny Homes',
    icon: 'home',
  },
  {
    name: 'Cabins',
    icon: 'house-siding',
  },
  {
    name: 'Trending',
    icon: 'local-fire-department',
  },
  {
    name: 'Play',
    icon: 'videogame-asset',
  },
  {
    name: 'City',
    icon: 'apartment',
  },
  {
    name: 'Beachfront',
    icon: 'beach-access',
  },
  {
    name: 'Countryside',
    icon: 'nature-people',
  },
];

interface Props {
  onCategoryChanged: (category: string) => void
}

const ExploreHeader = ({ onCategoryChanged }: Props) => {
  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectCategory = (index: number) => {
    const selected = itemsRef.current[index];
    setActiveIndex(index);
  

    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true })      
    })
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCategoryChanged(categories[index].name);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'ff00ff', }}>
      <View style={defaultStyles.searchContainer}>
        <View style={defaultStyles.actionRow}>
          <Link href={'/(modals)/booking'} asChild>
            <TouchableOpacity style={defaultStyles.searchBtn}>
              <Ionicons name='search' size={24}/>
              <View>
                <Text style={{fontFamily: 'mon-sb'}}>Where to?</Text>
                <Text style={{fontFamily: 'mon', color: Colors.grey }}>Anywhere * Any week</Text>
              </View>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={defaultStyles.filterBtn}>
            <Ionicons name='options-outline' size={24} />
          </TouchableOpacity>
        </View>
        <ScrollView 
        ref={scrollRef}
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          gap: 28,
          paddingHorizontal: 16,
        }}>
          { categories.map((item, index) => (
            <TouchableOpacity 
            onPress={() => selectCategory(index)}
            key={index}
            ref={(el) => itemsRef.current[index] = el}
            style={activeIndex === index ? defaultStyles.categoriesBtnActive : defaultStyles.categoriesBtn}
            >
              <MaterialIcons name={item.icon as any} size={24} color={activeIndex === index ? '#000' : Colors.grey}/>
              <Text style={activeIndex === index ? defaultStyles.categoryTextActive : defaultStyles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default ExploreHeader