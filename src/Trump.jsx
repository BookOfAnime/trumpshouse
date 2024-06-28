
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Trump(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/mrtrumpfinal.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.921}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_65">
                <group name="GLTF_created_0">
                  <group name="avaturn_hair_0_61" />
                  <group name="avaturn_hair_1_62" />
                  <group name="avaturn_look_0_64" />
                  <group name="avaturn_shoes_0_63" />
                  <group name="Body_Mesh_54" />
                  <group name="Eye_Mesh_55" />
                  <group name="EyeAO_Mesh_56" />
                  <group name="Eyelash_Mesh_57" />
                  <group name="Head_Mesh_58" />
                  <group name="Object_11" />
                  <group name="Object_13" />
                  <group name="Object_15" />
                  <group name="Object_17" />
                  <group name="Object_19" />
                  <group name="Object_9" />
                  <group name="Teeth_Mesh_59" />
                  <group name="Tongue_Mesh_60" />
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                </group>
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="Mesh_0013"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0013.geometry}
          material={materials.Material_0}
          position={[2.225, 0.17, -0.217]}
        />
        <group name="Mesh_0029" position={[-0.011, 2.758, 0.024]} scale={0.75}>
          <mesh
            name="Mesh_0029_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0029_1.geometry}
            material={materials.Material_0}
            morphTargetDictionary={nodes.Mesh_0029_1.morphTargetDictionary}
            morphTargetInfluences={nodes.Mesh_0029_1.morphTargetInfluences}
          />
          <mesh
            name="Mesh_0029_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0029_2.geometry}
            material={materials.Body}
            morphTargetDictionary={nodes.Mesh_0029_2.morphTargetDictionary}
            morphTargetInfluences={nodes.Mesh_0029_2.morphTargetInfluences}
          />
          <mesh
            name="Mesh_0029_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0029_3.geometry}
            material={materials.avaturn_shoes_0_material}
            morphTargetDictionary={nodes.Mesh_0029_3.morphTargetDictionary}
            morphTargetInfluences={nodes.Mesh_0029_3.morphTargetInfluences}
          />
          <mesh
            name="Mesh_0029_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0029_4.geometry}
            material={materials.avaturn_look_0_material}
            morphTargetDictionary={nodes.Mesh_0029_4.morphTargetDictionary}
            morphTargetInfluences={nodes.Mesh_0029_4.morphTargetInfluences}
          />
          <mesh
            name="Mesh_0029_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0029_5.geometry}
            material={materials.Eyes}
            morphTargetDictionary={nodes.Mesh_0029_5.morphTargetDictionary}
            morphTargetInfluences={nodes.Mesh_0029_5.morphTargetInfluences}
          />
          <mesh
            name="Mesh_0029_6"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0029_6.geometry}
            material={materials.EyeAO}
            morphTargetDictionary={nodes.Mesh_0029_6.morphTargetDictionary}
            morphTargetInfluences={nodes.Mesh_0029_6.morphTargetInfluences}
          />
          <mesh
            name="Mesh_0029_7"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0029_7.geometry}
            material={materials.Eyelash}
            morphTargetDictionary={nodes.Mesh_0029_7.morphTargetDictionary}
            morphTargetInfluences={nodes.Mesh_0029_7.morphTargetInfluences}
          />
          <mesh
            name="Mesh_0029_8"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0029_8.geometry}
            material={materials.Teeth}
            morphTargetDictionary={nodes.Mesh_0029_8.morphTargetDictionary}
            morphTargetInfluences={nodes.Mesh_0029_8.morphTargetInfluences}
          />
          <mesh
            name="Mesh_0029_9"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0029_9.geometry}
            material={materials.Teeth_0}
            morphTargetDictionary={nodes.Mesh_0029_9.morphTargetDictionary}
            morphTargetInfluences={nodes.Mesh_0029_9.morphTargetInfluences}
          />
        </group>
        <mesh
          name="Mesh_0032"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0032.geometry}
          material={materials.Material_0}
          position={[2.225, 0.17, -0.217]}
        />
        <mesh
          name="Mesh_0039"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0039.geometry}
          material={materials.Material_0}
          position={[2.225, 0.17, -0.217]}
        />
        <mesh
          name="Mesh_0041"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0041.geometry}
          material={materials.Material_0}
          position={[2.225, 0.17, -0.217]}
        />
        <mesh
          name="Mesh_0042"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0042.geometry}
          material={materials.Material_0}
          position={[2.225, 0.17, -0.217]}
        />
        <mesh
          name="Mesh_0044"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0044.geometry}
          material={materials.Material_0}
          position={[2.225, 0.17, -0.217]}
        />
        <mesh
          name="Mesh_0045"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_0045.geometry}
          material={materials.Material_0}
          position={[2.225, 0.17, -0.217]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/mrtrumpfinal.glb')
