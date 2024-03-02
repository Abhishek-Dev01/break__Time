import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const onChangeSearch = (query) => setSearchQuery(query);
  
    return (
        <View style={styles.container}>
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={24} color="#bfbfbf" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            placeholderTextColor="#bfbfbf"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <TouchableOpacity style={styles.clearIconContainer} onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={24} color="#bfbfbf" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
export default SearchBar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 20,
      },
      searchBarContainer: {
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 50,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    
        elevation: 6,
      },
      searchBar: {
        flex: 1,
        height: 40,
        marginHorizontal: 10,
        color: '#333333',
      },
      searchIcon: {
        marginRight: 5,
      },
      clearIconContainer: {
        marginRight: 5,
      },
  });
  