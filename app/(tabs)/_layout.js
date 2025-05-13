import React from "react";
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
const App = () => {
    const firstdata = [
    {
        id:1,
        picture :"https://img.freepik.com/free-photo/handsome-man-using-modern-smartphone-outdoors_23-2149073851.jpg?t=st=1746371660~exp=1746375260~hmac=e72cc37a2eaed24800e6f3ba4935e0eb6ed862a28328cc4967212175c1e57363&w=740",
        username :"Your story"
    },{
        id:2,
        picture :"https://img.freepik.com/free-photo/african-american-man-white-jacket_1303-14684.jpg?t=st=1746378666~exp=1746382266~hmac=9d4eefacdd6f408fe1f96a50761dc96e9c8c1fbfd03c128c0ef7722a987ef449&w=740",
        username :"Temiloluwa_002" 
    },{
        id:3,
        picture :"https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg?t=st=1746378783~exp=1746382383~hmac=30af6e544cb41f1d2c11efa4c6495f0c3bca769ea1ebb923c920c77d24ceb4ba&w=996",
        username :"Olawuzzy55"
    },{
        id:4,
        picture :"https://img.freepik.com/free-photo/confident-young-afro-american-sporty-man-wearing-headband-wristband-phone-arm-band-with-headphones-looking-with-hand_141793-98827.jpg?t=st=1746378832~exp=1746382432~hmac=b2251957d58043940babbde61d5cd8a7f207bebc0fa92b683b2e307381508940&w=900",
        username :"Surrex"
    },{
        id:5,
        picture: "https://img.freepik.com/free-photo/black-man-city_1157-18144.jpg?t=st=1746378911~exp=1746382511~hmac=7ea409273641c241f2fe556a8b6fa9e3e1d7779eeec578daee3b6888509abb6d&w=740",
        username :"iams_hola"
    }
];
    const newsdata = [
        {
            id : 1,
            name:"Osama",
            extensiion:"Asake, lonely at the top",
            profilepic:"https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-6/494690792_1235838524575011_3585831729687406853_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEyiT2XgbLIHFs-WhAzS5fS7_-gwGR-wmfv_6DAZH7CZ3jGc4ugK4Ai2gSDof3j5My6RqJluPxswivgOLYn6WZ6&_nc_ohc=i_DfGvk8XJ4Q7kNvwHd0y0C&_nc_oc=AdkaNo73cqnULf84_mLfJSOlwM0UVSFgjbGPzG4qwhNpH3bZMOk8oI2dnXP1gaBYwrw&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&_nc_gid=2-Xdq9G8woIzYjdg_VjE5A&oh=00_AfGn4d4UtWgY0ori0hwpLn1UsVu3S8_E25KO5m-NmY2quw&oe=681D8176",
            post:"https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-6/494690792_1235838524575011_3585831729687406853_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEyiT2XgbLIHFs-WhAzS5fS7_-gwGR-wmfv_6DAZH7CZ3jGc4ugK4Ai2gSDof3j5My6RqJluPxswivgOLYn6WZ6&_nc_ohc=i_DfGvk8XJ4Q7kNvwHd0y0C&_nc_oc=AdkaNo73cqnULf84_mLfJSOlwM0UVSFgjbGPzG4qwhNpH3bZMOk8oI2dnXP1gaBYwrw&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&_nc_gid=2-Xdq9G8woIzYjdg_VjE5A&oh=00_AfGn4d4UtWgY0ori0hwpLn1UsVu3S8_E25KO5m-NmY2quw&oe=681D8176",
            like:"https://img.icons8.com/?size=100&id=24816&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            share:"https://img.icons8.com/?size=100&id=11504&format=png&color=000000",
            whatapp:"https://img.icons8.com/?size=100&id=16712&format=png&color=000000",
            sharenum:"15M views",
            likenum:"👍😆❤44k",
            commentnum:"1k comments",
            sendnum:"80 shares",
            description:"Come and buy from me o 😂😂😂😂😆",
            action : "share new post.",
            time:"1m ago .",
             option:"https://img.icons8.com/?size=100&id=EqvOO04QCqSP&format=png&color=000000"
        },{
            id : 2,
            name:"shyla jen",
            extensiion:"make a new post",
            profilepic:"https://img.freepik.com/free-photo/stylish-afroamerican-lady-studio-shot_23-2148440601.jpg?t=st=1746380330~exp=1746383930~hmac=c306abb47d345b5f33bc5f5952a5640cbae83023a4223f6280cb51cd3f3a84e8&w=740",
            post:"https://scontent.flos5-3.fna.fbcdn.net/v/t39.30808-6/486838229_629828196612828_8338966657187897293_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGDeAabJ8FhE8nM1QtqNBafygFUac89CajKAVRpzz0JqG3G5dBqktd8BsizZdf-44_C0vBbzIQvU6Glv--zcXgW&_nc_ohc=EcsTqTvubW4Q7kNvwFCaF25&_nc_oc=AdmDQ2ZiMh-bM9aEgiqqc8iRwqFXsTHqEueIF2EjeNMLjOUbV5kfzyoGRsxzSdA9J2Q&_nc_zt=23&_nc_ht=scontent.flos5-3.fna&_nc_gid=a4PfT2u0bHiaddZcMkTnig&oh=00_AfEOOekg3OyyzVM5StyK11HHdUCfCJFdZpnyUnomFipuXA&oe=681D736C",
            like:"https://img.icons8.com/?size=100&id=24816&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            share:"https://img.icons8.com/?size=100&id=11504&format=png&color=000000",
            sharenum:"1M views",
            likenum:"👍🏽❤2k",
            commentnum:"113 comments",
            sendnum:"50 shares",
            whatapp:"https://img.icons8.com/?size=100&id=16712&format=png&color=000000",
            description:"Dm for your yummy cake we deliver nation wide",
            action : "Make a new post",
            time:"35m ago.",
             option:"https://img.icons8.com/?size=100&id=EqvOO04QCqSP&format=png&color=000000"
        },{
            id : 3,
            name:"Good_ness",
            
            profilepic:"https://img.freepik.com/free-vector/all-right-emoji-illustration_23-2151345565.jpg?t=st=1746380535~exp=1746384135~hmac=70e2364baa8f233095335ab3e60c19108b82f64fa82cbf93793e0558543f7352&w=740",
            post:"https://scontent.flos5-1.fna.fbcdn.net/v/t39.30808-6/475163289_122217087026195255_8427318992944273253_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFp7QyZkz3wiaq2YcVbixD8kPLApdL9x4-Q8sCl0v3Hj1cRXO0k58pu7sP5ZMfmecD34WUXsqehXDUKbwM7ke5K&_nc_ohc=iW3vywk82QEQ7kNvwFoFyyF&_nc_oc=Adknx7pTSRkPMAEvRl8r0BBlfW6fgw3MmzH7dgPs7l8I9Wz0LnFrI7S7sLkGJfngomk&_nc_zt=23&_nc_ht=scontent.flos5-1.fna&_nc_gid=EonINH00U5znMYk_HWvZDg&oh=00_AfHoTg0rJBIViXmlZ9iO8CDJ2reOX7cy0nU7XN3y_XgogA&oe=681D75DE",
            like:"https://img.icons8.com/?size=100&id=24816&format=png",
            comment:"https://img.icons8.com/?size=100&id=143&format=png&color=1A1A1A",
            share:"https://img.icons8.com/?size=100&id=11504&format=png&color=000000",
            sharenum:"135k views",
            likenum:"👍😆134",
            commentnum:"120 comments",
            sendnum:"30 shares",
            description:"Am single, abeg single live don tire me😂😂😂😂 ",
            whatapp:"https://img.icons8.com/?size=100&id=16712&format=png&color=000000",
            time :"1h .",
            option:"https://img.icons8.com/?size=100&id=EqvOO04QCqSP&format=png&color=000000"
        },
    ];
    return(
        <View style = {designing.page}>
           <View style = {{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'blue'}}> Facebook</Text>
          <View style ={{ flexDirection:'ROW', marginVertical: 10, }}>
           <Image source ={{ uri: 'https://img.icons8.com/?size=100&id=59864&format=png&color=000000'}}
           style={{ height: 30, width: 30, marginRight: 20}}
           />
          
          <Image source={{ uri: "https://img.icons8.com/?size=100&id=7695&format=png&color=000000"}}
          style={{ height: 30, width: 30, marginRight:20 }}
          />

<Image source={{ uri: "https://img.icons8.com/?size=100&id=61637&format=png&color=000000"}}
style={{ height: 30, width: 30, marginRight:20 }}
/>
</View>
           </View>
           <View>
            <View style = {{flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingTop:"70"}}>
            <Image source = {{ uri: "https://img.freepik.com/free-photo/handsome-man-using-modern-smartphone-outdoors_23-2149073851.jpg?t=st=1746371660~exp=1746375260~hmac=e72cc37a2eaed24800e6f3ba4935e0eb6ed862a28328cc4967212175c1e57363&w=740"}} 
            style={{ height:50, width: 50, borderRadius: 30, marginLeft: 20}}
            />
                <Text style = {{fontSize:"20", fontWeight:"bold", marginRight: 70}}>What's on your mind?</Text>
               <Image source ={{ uri: "https://img.icons8.com/?size=100&id=1vNMGfe3pMAQ&format=png&color=000000"}}
               style ={{ height: 30, width: 25, marginRight: 35,}}
               />
            </View>
            <View style ={{ flexDirection: 'row', paddingTop: 10}}>
            <Text style = {{ fontSize:20, fontWeight: 'bold',  color: 'blue',}}> Stories</Text>
           
            </View>
           </View>
            <ScrollView>
                {/* story */}
               
            <View> 
                < View style = {designing.box}>
                <FlatList
                data={firstdata}
               horizontal={true}
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={{ flexGrow: 1 }}
                renderItem = {({item}) => {
                    return(
                        <View><TouchableOpacity>
                        <View>
                                <View style = {{ paddingTop:20}}>
                                 
                          <Image source = {{ uri: item.picture}}
                          style = {{ height: 150, width: 90, marginLeft: 10}} />
                            <Image source = {{ uri: item.picture}}
                          style = {{ height: 30, width: 30, marginLeft: 10,  borderRadius: 20, marginleft: 15,position: 'absolute'}} />
                          

                            </View>
                             </View></TouchableOpacity>
                             </View>
                    )
                } }/></View> </View>
            <View>
            </View>


            {/* Newsfeed */}
            <View style = {{marginTop:"20"}}>
                <FlatList
                data={newsdata}
                renderItem={({item}) =>{
                    return(
                        <View style = {designing.newsfeed}>
                            <View style = {{justifyContent:"space-between", flexDirection:"row", alignItems:"center"}}>
                            <View style = {{flexDirection:"row", alignItems:"center"}}>
                           <TouchableOpacity>
                           <Image source ={{ uri : item.profilepic}} 
                           style = {{ height: 60, width: 60, borderRadius: 30}}
                           />
                           </TouchableOpacity>
                           <View> <Text style = {{fontWeight:"500"}}>{item.name} <Text style = {{fontSize:"12", opacity:0.5}}>{item.action}</Text></Text>
                            <Text style = {{fontSize:"12", opacity:"0.5"}}><Text style = {{opacity:0.5}}>{item.time}</Text>{item.extensiion}</Text></View>
                            </View>
                            <View>
                              <TouchableOpacity>
                              <Image source ={{ uri: item.option}} 
                              style= {{ height: 30, width: 30}}
                              />
                              </TouchableOpacity>
                            </View>
                            </View>
                            <View style = {{marginVertical:"5"}}>
                            <Text>{item.description}</Text>
                            </View>
                           
                           <Image source = {{ uri: item.post}}
                           style = {{ height: 300, width: 400}}
                            />
                            <View style = {{flexDirection:"row",marginVertical:"10", justifyContent:"space-between"}}>
                              {/* like */}
                               <View style = {{alignItems:"center"}}>
                                 <Text style = {{alignSelf:"center",marginHorizontal:"5"}}>{item.likenum}</Text>
                                 <View style = {{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"15"}}>
                                    <Image
                                source={{uri: item.like}}
                                style = {{height:"22", width:"22", margin:"5"}}
                                />
                                <Text>Like</Text>
                                </View>
                                </View>
                               {/* comment */}
                              <View style = {{alignItems:"center"}}>
                                <Text style = {{alignSelf:"center", marginHorizontal:"5"}}>{item.commentnum}</Text>
                                 <View style = {{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"15"}}>
                                     <Image
                                source={{uri: item.comment}}
                                style = {{height:"20", width:"20", margin:"5"}}
                                />
                                <Text>Comment</Text>
                                </View>
                                </View>
                                {/* send */}
                              <View style = {{alignItems:"center"}}>  
                                <Text style = {{alignSelf:"center",marginHorizontal:"5"}}>{item.sendnum}</Text>
                             <View style = {{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"15"}}>
                                 <Image
                                source={{uri: item.whatapp}}
                                style = {{height:"20", width:"20", margin:"5"}}
                                />
                                <Text>Send</Text>
                                </View>
                                </View>
                                {/* share */}
                                 <View style = {{alignItems:"center"}}>
                                    <Text style = {{alignSelf:"center",marginHorizontal:"5"}}>{item.sharenum}</Text> 
                                    <View style = {{flexDirection:"row", alignItems:"center", justifyContent:"center", marginTop:"15"}}>
                                        <Image
                                source={{uri: item.share}}
                                style = {{height:"22", width:"22", margin:"5"}}
                                />
                                <Text>Share</Text>
                                </View> </View>
                            </View>
                           </View>
                    )
                }}  /></View>
            </ScrollView>
        </View>
    )
}
export default App;
const designing =  StyleSheet.create({
    page:{
       backgroundColor:"#FFFAFA",
        flex: 1,
        paddingTop:"40",
        paddingHorizontal:"15"
    },
    box:{
        height:"40",
        width:"160",
        backgroundColor:"white",
        marginHorizontal:"20"
    },
    newsfeed:{
        height:"570",
        backgroundColor:"white",
        marginVertical:"10",
    },
    text:{
        position:"absolute",
        top:"130",
        fontSize:"12",
        fontWeight:"600",
        color:"black",   
    }
})
