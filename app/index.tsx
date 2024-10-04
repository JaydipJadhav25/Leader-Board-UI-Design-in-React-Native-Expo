import { useState } from "react";
import { Button, Modal, Text, View } from "react-native";

export default function Index() {
  const[visiable , setvisiable] = useState(false);


   console.log("visiable : : " , visiable);

  return (
    <View
    style={{
      flex  :1,
      justifyContent : "center",
      alignItems : "center"
    }}
    >
      <Button title="welcome" onPress={()=> {setvisiable(true)}}/>

      
      <Modal
     
      visible={visiable}
      animationType="slide"
      >
       
       <View
        style={{
          width : "100%",
          height : "100%",
          backgroundColor : "gray"
        }}
        >


          {/* top box */}
      <View 
        style={{
          // flex : 2,
          width : "100%",
          height : 300,
          backgroundColor : "orange",
          // borderEndEndRadius : 50 
          borderBottomRightRadius : 30,
          borderBottomLeftRadius : 30,
          gap : 20,
  
        
        }}
  
       >
        

      <Text
      style={{
        color : "white",
        fontSize : 30,
        fontWeight : 500,
        textAlign : "center",
        margin :20
      }}
      >Leader Board</Text>

       <View style={{
        flex :1 ,
        // width : "100%",
        flexDirection : "row",
      
       }}>
       {
          [{
            id : 1 ,
            name : "soham"
          },{
            id : 2,
            name :"shubhan"
          },{
            id :3,
            name : "vishal"
          }].map((e) =>{
            return(
              <View
              style={{
                width : "25%",
                height : "70%",
                backgroundColor : "black",
                borderRadius : 20,
                // margin : 30
                marginLeft : 20,
                justifyContent : "center",
                alignItems : "center",
                
              }}
              >
            
              <View
              style={{
                width : "70%",
                height : "50%",
                backgroundColor : "red",
                borderRadius : 20,
                marginTop :10

              }}
              />

              
             
     <Text
      style={{
        color : "white",
        fontSize : 20,
        fontWeight : 500,
        // textAlign : "center",
        // margin :20
        marginTop : 10
      }}
      >{e.name}</Text>
 
               
 <View 
         style ={{
          width : 40,
          height  : 40,
          backgroundColor : "yellow",
         borderRadius : 50,
        // bottom :-35 
        top : 25       
       }}
         >

         </View>

        
              </View>
            )
          })
        }

        
       </View>



       </View>
      <Button title="back" onPress={()=> {setvisiable(false)}}/>

        
          
        </View> 

       

       {/* backview */}

       <View
       style={{

       }}
       >

       </View>


      </Modal>

     
    </View>
  );
}
