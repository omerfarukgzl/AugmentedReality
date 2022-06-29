import React, {useState} from 'react';
import {View,Text,TouchableOpacity, StyleSheet} from 'react-native';
import {
  ViroARScene,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroNode,
  ViroARSceneNavigator,
  ViroARPlaneSelector,
  ViroQuad
} from '@viro-community/react-viro';


const InitialScene=()=>
{
  const [animationName, setAnimationName] = useState("01");
 
 /* ViroAnimations.registerAnimations({
    rotate:{
      duration:2500,
      properties:{
        rotateY:'+=90'
      }
    }
  })*/
  return(

<ViroARScene>
<ViroAmbientLight color="#ffffff" intensity={200}/>
  <ViroARPlaneSelector
    minHeight={.1}
    minWidth={.1}
    alignment={'Horizontal'}
    
>
<ViroNode position={[0, -1, -1]} dragType="FixedToWorld" >
          <ViroSpotLight
            innerAngle={5}
            outerAngle={25}
            direction={[0,-1,0]}
            position={[0, 5, 0]}
            color="#ffffff"
            castsShadow={true}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={7}
            shadowOpacity={.7}
          />

<Viro3DObject
            source={require('./assets/turkeyman_anim.vrx')}
            resources={[require('./assets/turkeyman_diffuse.jpg'),
                    require('./assets/turkeyman_normal.jpg'),
                    require('./assets/turkeyman_specular.jpg')]}
            position={[0, 0, 0]}
            rotation={[0,-20,0]}
            scale={[.5, .5, .5]}
            type="VRX"
            onClick={()=> {
              setAnimationName("02");
            }}
            animation={{name:animationName, run:true, loop:true,}}
      />
          <ViroQuad
            rotation={[-90, 0, 0]}
            position={[0, -.001, 0]}
            width={2.5} height={2.5}
            arShadowReceiver={true}
          />
          </ViroNode>
  </ViroARPlaneSelector>
  
</ViroARScene>
  )

}

export default () => {
  return (
    <View style={styles.mainView}>

        <ViroARSceneNavigator
        initialScene={{
        scene:InitialScene
        }}   
          style={{flex:1}}
        />
    </View>
  );
};

var styles = StyleSheet.create({
  mainView:{
    flex:1
  },

});
