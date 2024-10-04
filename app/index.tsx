import { useState } from "react";
import { Button, FlatList, Image, Modal, ScrollView, Text, View } from "react-native";
import {ReactNativeModal} from "react-native-modal";


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

      
      <ReactNativeModal
     
     isVisible={visiable}

     animationIn={"jello"}
     animationOut={"lightSpeedIn"}
     
      >
       
       <View
        style={{
          width : "100%",
          height : "100%",
          backgroundColor : "#233142"
        }}
        >


          {/* top box */}
      <View 
        style={{
          // flex : 2,
          width : "100%",
          height : 300,
          backgroundColor : "#132743",
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

       <ScrollView
       horizontal
       showsHorizontalScrollIndicator ={false}
       style={{
        flex :1 ,
        // width : "100%",
        flexDirection : "row",
        
      
       }}>

      {/* <FlatList
      data={[{
        id : 1 ,
        name : "soham"
      },{
        id : 2,
        name :"shubhan"
      },{
        id :3,
        name : "vishal"
      },
      {
        id : 1 ,
        name : "soham"
      },{
        id : 2,
        name :"shubhan"
      },{
        id :3,
        name : "vishal"
      },
      {
        id : 1 ,
        name : "soham"
      },{
        id : 2,
        name :"shubhan"
      },{
        id :3,
        name : "vishal"
      },
      {
        id : 1 ,
        name : "soham"
      },{
        id : 2,
        name :"shubhan"
      },{
        id :3,
        name : "vishal"
      },
      {
        id : 1 ,
        name : "soham"
      },{
        id : 2,
        name :"shubhan"
      },{
        id :3,
        name : "vishal"
      }
    
    ]
    }


      // ListHeaderComponent={

      //   <Text
      //   style={{
      //     color : "white",
      //     fontSize : 30,
      //     fontWeight : 500,
      //     textAlign : "center",
      //     margin :20
      //   }}
      //   >Leader Board</Text>
      // }

      renderItem={(e) =>{
        console.log("data : " , e)
        
         return(
         
                                 
      //    <View 
      //   style={{
      //     // flex : 2,
      //     width : "100%",
      //     height : 300,
      //     backgroundColor : "orange",
      //     // borderEndEndRadius : 50 
      //     borderBottomRightRadius : 30,
      //     borderBottomLeftRadius : 30,
      //     gap : 20,
  
        
      //   }}
  
      //  >
        

      // <Text
      // style={{
      //   color : "white",
      //   fontSize : 30,
      //   fontWeight : 500,
      //   textAlign : "center",
      //   margin :20
      // }}
      // >Leader Board</Text>

      //  <View style={{
      //   flex :1 ,
      //   // width : "100%",
      //   flexDirection : "row",
      
      //  }}>
 
  

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
      >{e.item.name}</Text>
 
               
 <View 
         style ={{
          width : 40,
          height  : 40,
          backgroundColor : "yellow",
         borderRadius : 50,
        // bottom :-35 
        top : 25,       
        justifyContent : "center",
        alignItems : "center"
       }}
         >
       <Text style={{fontWeight  :800 , fontSize : 40}}>{e.item.id}</Text>
         </View>

        
              </View>
            



              //  </View>
              //  </View>
        
         )




      }}

      horizontal

     indicatorStyle="default"

     contentContainerStyle={{
      // backgroundColor : "blue"
      // marginRight : 90
      // width :900,
      // height : 200,
         justifyContent : "center",
        alignItems : "flex-start"
    }}
     

      /> */}

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
          },
          {
            id :4,
            name : "aditya"
          },
          {
            id :5,
            name : "jaydip"
          },
          {
            id :6,
            name : "rahul"
          }].map((e) =>{
            return(
              <View
              style={{
                width : "25%",
                height : "70%",
                backgroundColor : "#385170",
                borderRadius : 20,
                borderWidth : 2,
                borderColor : "white",
                // margin : 30
                marginLeft : 20,
                justifyContent : "center",
                alignItems : "center",
                
              }}
              >
            
              {/* <View
              style={{
                width : "70%",
                height : "50%",
                backgroundColor : "red",
                borderRadius : 20,
                marginTop :10

              }}
              /> */}

              <Image
              source={require("@/assets/images/logo.png")}
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
        top : 25   ,
        justifyContent : "center",
        alignItems : "center"    
       }}
         >
     <Text style={{fontWeight : 700 , fontSize : 40}}>
      {
        e.id
      }
     </Text>
         </View>

        
              </View>
            )
          })
        }

        
       </ScrollView>



       </View>
      {/* <Button title="back" onPress={()=> {setvisiable(false)}}/> */}


      <ScrollView>

          {/* <View 
          style={{
            marginTop : 10,
            width : "100%",
            height : 60,
            backgroundColor : "orange",
            flexDirection : "row",
            justifyContent : "center",
            alignItems :"center"
          }}
          >
            <Text 
            style={{
              fontWeight : 800,
              fontSize : 20,
              marginLeft : 10
            }}
            >1.</Text>
           
           



           <View>
           <View
               style={{
                width : 40,
                height : 40,
                backgroundColor : "red",
                borderRadius : 50,
                marginLeft : 10

               }}
               />
             
           </View>
           <Text 
           style={{
            fontWeight : 600,
            fontSize : 20,
            marginLeft : 6
           }}
           >
              Jaydip Jadhav
              </Text>  
         
         <View
         style={{
          width : "50%",
          height : "100%",
          // backgroundColor : "blue",
            justifyContent : "center",
            alignItems : "flex-end"

         }}
         >
         <Text 
           style={{
            fontWeight : 600,
            fontSize : 20,
            // marginLeft : 80
            // alignItems : "flex-end",
            // justifyContent : "flex-end"
           }}
           >
            72693
              </Text>  

         </View>

          </View>
      */}

      {

                 [{
                  id : 1 ,
                  name : "soham"
                },{
                  id : 2,
                  name :"shubh"
                },{
                  id :3,
                  name : "vishal"
                },
                {
                  id :4,
                  name : "aditya"
                },
                {
                  id :5,
                  name : "jaydip"
                },
                {
                  id :6,
                  name : "rahul"
                }].map((data)=>{
                  return(
                    <View 
                    style={{
                      marginTop : 10,
                      width : "100%",
                      height : 60,
                      // backgroundColor : "orange",
                      flexDirection : "row",
                      justifyContent : "center",
                      alignItems :"center",
                //       borderWidth : 2,
                // borderColor : "white",
                // shadowRadius : 2,
                //          shadowColor : "black"
                    }}
                    >
                      <Text 
                      style={{
                        fontWeight : 800,
                        fontSize : 20,
                        marginLeft : 10,
                        color : "white"
                      }}
                      >{
                        data.id
                      }.</Text>
                     
                     
          
          
          
                     <View>
{/*                       
                     <View
                         style={{
                          width : 40,
                          height : 40,
                          backgroundColor : "red",
                          borderRadius : 50,
                          marginLeft : 10
          
                         }}
                         /> */}

                         <Image 
                         source={require("@/assets/images/logo.png")}
                           style={{
                            width : 40,
                            height : 40,
                            backgroundColor : "red",
                            borderRadius : 50,
                            marginLeft : 10
            
                           }}
                         />
                       
                     </View>
                     <Text 
                     style={{
                      fontWeight : 600,
                      fontSize : 20,
                      marginLeft : 6,
                      color : "white"
                     }}
                     >
                        {
                          data.name
                        }
                        </Text>  
                   
                   <View
                   style={{
                    width : "50%",
                    height : "100%",
                    // backgroundColor : "blue",
                      justifyContent : "center",
                      alignItems : "flex-end"
          
                   }}
                   >
                   <Text 
                     style={{
                      fontWeight : 600,
                      fontSize : 20,
                      // marginLeft : 80
                      // alignItems : "flex-end",
                      // justifyContent : "flex-end"
                      color : "yellow"
                     }}
                     >
                      72693
                        </Text>  
          
                   </View>
          
                    </View>
                  )
                })



      }
      </ScrollView>

        
          
       <Button title="back" onPress={() =>setvisiable(!visiable)}/>
        </View> 

       

       {/* backview */}
{/* 
       <View
     
       >

       </View> */}




      </ReactNativeModal>

     
    </View>
  );
}
