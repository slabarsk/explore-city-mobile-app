import { useState, useEffect } from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";

const cities = [
  { id: 1, name: "Istanbul, Turkiye", image: "https://example.com/paris.jpg" },
  { id: 2, name: "Ankara, Turkiye", image: "https://example.com/london.jpg" },
  { id: 3, name: "Izmir, Turkiye", image: "https://example.com/rome.jpg" },
];

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            padding: 10,
            backgroundColor: "#f5f5f5",
            borderRadius: 5,
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{ width: 100, height: 100, marginRight: 10 }}
          />
          <View>
            <Text>{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Homepage;
