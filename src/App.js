import React, { useEffect, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Grid } from '@react-three/drei';
import { Color } from 'three';
import { FlowFieldParticles } from './components/FlowFieldParticles';

const World = () => {
  const { nodes, materials } = useGLTF('/c.glb');
  const cameraRef = useRef();
  const scene = useThree(state => state.scene);
  
  useEffect(() => {
    scene.background = new Color("#123456");
    
    if (cameraRef.current) {
      cameraRef.current.object.position.set(3, 1, 0);
      cameraRef.current.target.set(0, 0, 0);
      cameraRef.current.update();
    }
  }, [scene]);

  return (
    <>
      <FlowFieldParticles
        name='Pug'
        interactive={true}
        childMeshVisible={true}
        size={0.3}
        disturbIntensity={0.2}
        shape="circle"
      >
      
     
      <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_1.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019Window_Material1} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_2.geometry} material={materials.cCalliperBadge_Front_LSG1} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_3.geometry} material={materials.cCalliperBody_Front_LSG1} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_4.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019Carbon1_Material1} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_5.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019_Wheel1A_3D_3_d9d615} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_6.geometry} material={materials.Ford_MustangShelbyGT500RewardRecycled_2019CalliperGloss_Materia} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_7.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019BadgeA_Material1} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_8.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019Base_Material1} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_9.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019Carbon1M_Material1} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_10.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019Coloured_Material1} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_11.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019EngineA_Material1} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_12.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019Grille1A_Material1} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_13.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019Grille2A_Material1} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_14.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019Grille3A_Material1} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_15.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019Grille4A_Material1} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_16.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019Grille5A_Material1} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_17.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019Grille6A_Material1} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_18.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019InteriorA_Material1} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_19.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019LightA_Material1} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_20.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019ManufacturerP_1dce74} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_21.geometry} material={materials.material} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_22.geometry} material={materials.orange_glass} />
            <mesh geometry={nodes.fWindow_Geo_lodA_Window_Geo_lodA_Ford_MustangShelbyGT500Reward_23.geometry} material={materials.red_glass} />
        
          <primitive object={nodes._rootJoint} />
          <mesh geometry={nodes.fPaint_Geo_lodA_Paint_Geo_lodA_Ford_MustangShelbyGT500Rewa.geometry} material={materials.fFord_MustangShelbyGT500RewardRecycled_2019Paint_Material1} position={[0, 0.144, 0]} rotation={[0.001, 0, 0]} />
     
     
      </FlowFieldParticles>
      <Grid
        visible={true}
        cellSize={0.0}
        sectionSize={0.2}
        cellThickness={2}
        cellColor={"black"}
        sectionColor={"#f3a000"}
        followCamera={false}
        fadeDistance={30}
        fadeStrength={5}
        infiniteGrid
      />
      <OrbitControls ref={cameraRef} />
      <ambientLight />
      <pointLight intensity={20} position={[0,80,0]} />
      <spotLight/>
    </>
  );
};

function App() {
  return (
    <Canvas gl={{ antialias: false }} style={{width: '100vw' , height: '100vh'}} position={[0,2,0]}>
      <World />
    </Canvas>
  );
}

export default App;