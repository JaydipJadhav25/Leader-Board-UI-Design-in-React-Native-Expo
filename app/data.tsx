// import { View, Text  , StyleSheet, FlatList} from 'react-native'
// import React, { useEffect, useState } from 'react'


// export interface dataInterFace {
//     userId:number
// id: number
// title: string
// completed: boolean
// }



// export default function data() {


//     // const[data ,setData] = useState<[dataInterFace]>([{""}]);
//     const[data ,setData] = useState<[dataInterFace]>("");



//     async function apiCall():Promise<void> {

//         const data  = await fetch("https://jsonplaceholder.typicode.com/todos");
//         const result :dataInterFace =  await data.json();
//         console.log("data : "  , result);
//         setData(result);
        
//     }

//     useEffect(() =>{
//         apiCall();
//     },[])



//   return (
//     <View  
//     style={{
//         backgroundColor : "yellow",
//         flex  :1
//     }}
//     >
//      <FlatList
//      data={data}
//      keyExtractor={item => item.id.toString()}
//      renderItem={(data) => <Text
//      style={{
//         padding : 10
//      }}
//      >{data.item.title}</Text>
//      }
     
//      />

//     </View>
//   )
// }
// // const style = StyleSheet.create({
// //     maincontainer :{
// //         backgroundColor : "red"
// //     }
// // })






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
    return <ActivityIndicator size="large" color="#0000ff" shouldRasterizeIOS/>;
  }

  return (
    <View
    style={{
        flex:1
    }}
    >
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
