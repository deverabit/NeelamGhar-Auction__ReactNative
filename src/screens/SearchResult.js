import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const SearchResults = ({ route }) => {
  const { searchText } = route.params;

  useEffect(() => {
    // Perform search functionality using the `searchText` value
    // For example, fetch search results from an API or perform any other search logic

    // This is just a placeholder example
    console.log('Search Text:', searchText);
  }, [searchText]);

  return (
    <View>
      <Text>Search Results Screen</Text>
      {/* Display the search results */}
    </View>
  );
};

export default SearchResults;
