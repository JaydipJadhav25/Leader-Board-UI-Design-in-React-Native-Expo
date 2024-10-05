import { View, Text , ActivityIndicator, ScrollView, FlatList, Switch, Alert, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function data2() {

    const[data , setData] = useState("");
    const[loading , setloading] = useState(false);
    const [Enable , setEnable]  = useState(false);
  
    // Toggle function
    const toggle = (state : any)=>{
      setEnable(state);
    //   alert();
    }

    const alert = ()=>{

        Alert.alert(
          "GeeksforGeeks",
          "How are you!",
          [
            {
              text: "Cancel",
            },
            {
              text: "OK",
            }
          ]
        );
      }
  

    async function fetchdata(){
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setData(res.data);
        setloading(false);
        console.log("res:::::::" , res.data);
    }

    useEffect(()=>{
        setloading(true);
      fetchdata();
    },[])

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" shouldRasterizeIOS/>;
      }
  return (
    <View style={{
        flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    }}>

<Switch
        trackColor={{ false: "#43f746", true: "#63dff2" }}
        thumbColor={Enable ? "#faf68c" : "#e243f7"}
        onValueChange={toggle}
        value={Enable}
      />
 
 <Button title={"Click me"} onPress={alert}/>


   {
    Enable ?      <FlatList
    data={data}
    keyExtractor={item => item.id.toString()}  // Use 'id' as a unique key
    renderItem={(data) => <Text>{data.item.title}</Text>}
    />  :  null 
   }
    </View>
  )
}