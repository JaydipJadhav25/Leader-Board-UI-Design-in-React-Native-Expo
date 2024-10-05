import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

// Define your interface
export interface DataInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const MyComponent = () => {
  // Set your state with the correct type for the data
  const [data, setData] = useState<DataInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data and update the state
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json: DataInterface[]) => {
        setData(json);  // Set the fetched data
        setLoading(false);  // Stop the loading spinner
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      {/* Use FlatList to render the fetched data */}
      <FlatList
      
        data={data}
        keyExtractor={item => item.id.toString()}  // Use 'id' as a unique key
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
            <Text>Completed: {item.completed ? 'Yes' : 'No'}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MyComponent;
