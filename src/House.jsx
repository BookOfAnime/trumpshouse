import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function House(props) {
  const { nodes, materials } = useGLTF('/FinalHouse.glb')

  const telegram = useRef()

  const handleClick = () => {
    window.open('https://your-link.com', '_blank')
  }

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bitcoin.geometry}
        material={materials.base_material}
        position={[-0.684, -0.596, -0.213]}
        rotation={[Math.PI / 2, 0.606, 0]}
        scale={0.593}
      />
      <group position={[0, 0.203, -0.878]} rotation={[-1.391, 0.228, -2.973]} scale={0.104}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[93.437, 97.903, 18.617]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={319.199}>
            <group position={[-0.441, -0.006, 0.612]} scale={1.63}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BORED_APE_YACHT_CLUB_brush_UnlitHull081_0.geometry}
                material={materials['brush_UnlitHull.081']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.BORED_APE_YACHT_CLUB_brush_Wire064_0.geometry}
                material={materials['brush_Wire.064']}
              />
            </group>
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh.geometry}
        material={materials['base_material.003']}
        position={[-1.829, -0.612, 0.55]}
        rotation={[Math.PI / 2, 0, -2.137]}
        scale={1.77}
      />
      <group position={[0.386, -0.679, -0.338]} rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Etherium.geometry}
          material={materials['default']}
          position={[-1363.619, -936.655, 236.463]}
        />
      </group>
      <group ref={telegram} rotation={[-Math.PI / 2, 0, 0]} scale={0.188} onClick={handleClick}>
        <group position={[0, 1, -12]} scale={0.843}>
          <group position={[3.348, -8.053, 8.839]} rotation={[0, 0, -1.508]} scale={0.607}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0002.geometry}
              material={materials.glossy_telegram}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_0002_1.geometry}
              material={materials['glossy_putih.008']}
            />
          </group>
        </group>
      </group>
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.003']}
      />
      <group position={[0.04, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials.chao}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_2.geometry}
          material={materials['chao.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Painted plaster']}
        position={[0.034, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Material.003']}
        position={[0, -0.352, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials.Fabric}
        position={[-0.696, -0.821, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.Fabric}
        position={[-0.693, -0.821, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.Fabric}
        position={[-0.853, -0.781, 0]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials.Fabric}
        position={[-0.897, -0.775, 0.015]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials.Fabric}
        position={[-0.7, -0.825, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials.Fabric}
        position={[-0.697, -0.809, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials.Fabric}
        position={[-0.7, -0.825, -0.343]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials.Fabric}
        position={[-0.696, -0.821, -0.685]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials.Fabric}
        position={[-0.481, -0.767, -0.343]}
        rotation={[0, 0, -0.283]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials.Fabric}
        position={[-0.697, -0.929, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials.Wood}
        position={[-0.723, -0.837, 0.813]}
        scale={0.163}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials['Wood.001']}
        position={[-0.537, -0.908, -0.809]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Wood.001']}
        position={[-0.537, -0.908, -0.809]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials['Wood.001']}
        position={[-0.537, -0.908, -0.809]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials['Wood.001']}
        position={[-0.537, -0.908, -0.809]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials['Wood.001']}
        position={[-0.537, -0.908, -0.809]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials['Wood.001']}
        position={[-0.537, -0.908, -0.809]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials['Wood.001']}
        position={[-0.537, -0.908, -0.809]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials['Material.001']}
        position={[-0.813, -0.922, -0.727]}
        scale={0.078}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials['Material.001']}
        position={[-0.787, 0.088, -0.727]}
        scale={0.078}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.001']}
        position={[-0.812, 0.115, -0.727]}
        scale={0.034}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert003.geometry}
        material={materials['Material.002']}
        position={[-0.754, 0.119, -0.727]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials['abajur 2']}
        position={[-0.389, 0.057, -0.727]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials['abajur 2']}
        position={[-0.389, 0.057, -0.727]}
        scale={0.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials['abajur 2']}
        position={[-0.389, 0.178, -0.727]}
        scale={0.976}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials['Red carpet']}
        position={[0.259, -1, -0.02]}
        scale={1.215}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials['Red carpet.003']}
        position={[0.259, -1.002, -0.02]}
        scale={1.215}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials['Red carpet.002']}
        position={[0.259, -0.999, -0.02]}
        scale={1.215}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials['Red carpet.001']}
        position={[0.259, -0.998, -0.02]}
        scale={1.215}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials.Sand}
        position={[-0.855, -1.082, 0.36]}
        scale={6.913}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials['Painted plaster']}
        position={[0.074, 0, 0.108]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials['Material.003']}
        position={[1.79, 0, -0.269]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={materials['Painted plaster']}
        position={[-1.824, -0.259, -1.966]}
        rotation={[0, 0.935, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={materials['Wood.004']}
        position={[-0.771, -0.678, -1.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube042.geometry}
        material={materials['Wood.003']}
        position={[-0.771, -0.624, -1.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043.geometry}
        material={materials['Wood.004']}
        position={[-0.771, -0.619, -1.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials['Wood.002']}
        position={[-0.906, -0.199, -1.37]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.698}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials['Material.011']}
        position={[-0.906, -0.199, -1.37]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.698}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016.geometry}
        material={materials['abajur.002']}
        position={[-0.696, -0.448, -1.676]}
        scale={1.079}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials['abajur.001']}
        position={[-0.696, -0.523, -1.676]}
        scale={0.078}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017.geometry}
        material={materials['Material.012']}
        position={[-0.696, -0.531, -1.676]}
        scale={0.016}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={materials['Material.013']}
        position={[-0.624, -0.785, -1.452]}
        scale={0.803}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube045.geometry}
        material={materials['Wood.001']}
        position={[-0.466, -0.983, -1.554]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['photo_2024-06-09_104109'].geometry}
        material={materials['photo_2024-06-09 10.41.09']}
        position={[-1.014, -0.115, -0.006]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0.geometry}
        material={materials.Material_0}
        position={[-0.832, -0.26, -1.435]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.479}
      />
      <group position={[0.574, -0.739, 0.303]} rotation={[0.899, 0.125, -1.437]} scale={0.044}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials['Material.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_1.geometry}
          material={materials['Material_0.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0003.geometry}
        material={materials['Material_0.002']}
        position={[0.546, -0.64, 0.957]}
        rotation={[0, -1.552, 0]}
        scale={18.793}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials['Material.015']}
        position={[-7.767, 1.178, 3.747]}
        rotation={[1.571, 0, -1.571]}
        scale={1.232}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials.Material}
        position={[-0.724, 0.282, 0.833]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.142}
      />
      <group position={[-0.548, -0.869, -0.86]} rotation={[-1.839, Math.PI / 2, 0]} scale={-1}>
        <group position={[-0.033, 0.025, -0.013]} rotation={[-0.004, 0.058, 0.008]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_1.geometry}
            material={materials['book cover']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_2.geometry}
            material={materials['stacked paper']}
          />
        </group>
        <group position={[0.006, 0.006, -0.022]} rotation={[-0.004, -0.032, 0.003]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027_1.geometry}
            material={materials['book cover']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027_2.geometry}
            material={materials['stacked paper']}
          />
        </group>
        <group position={[-0.007, 0.066, -0.016]} rotation={[-0.003, -0.044, 0.008]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030.geometry}
            material={materials['book cover']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube030_1.geometry}
            material={materials['stacked paper']}
          />
        </group>
        <group position={[-0.021, 0.048, -0.013]} rotation={[-0.003, -0.115, 0.008]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032.geometry}
            material={materials['book cover']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube032_1.geometry}
            material={materials['stacked paper']}
          />
        </group>
      </group>
      <group position={[-0.628, -0.95, 0.684]} rotation={[0, -1.571, 0]} scale={0.58}>
        <group position={[0.013, 0.118, 0.005]} rotation={[1.569, 0.068, -1.571]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_1.geometry}
            material={materials['book cover.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_2.geometry}
            material={materials['stacked paper.001']}
          />
        </group>
        <group position={[0.077, 0.12, 0]} rotation={[1.571, 0.183, -1.571]} scale={1.045}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials['book cover.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_2.geometry}
            material={materials['stacked paper.001']}
          />
        </group>
        <group position={[0.095, 0.122, -0.005]} rotation={[1.566, 0.186, -1.57]} scale={1.045}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_1.geometry}
            material={materials['book cover.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_2.geometry}
            material={materials['stacked paper.001']}
          />
        </group>
        <group position={[0.116, 0.104, -0.009]} rotation={[1.572, 0.212, -1.571]} scale={1.045}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_1.geometry}
            material={materials['book cover.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_2.geometry}
            material={materials['stacked paper.001']}
          />
        </group>
        <group position={[0.054, 0.123, -0.004]} rotation={[1.571, 0.18, -1.569]} scale={1.045}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_1.geometry}
            material={materials['book cover.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_2.geometry}
            material={materials['stacked paper.001']}
          />
        </group>
        <group position={[0.037, 0.119, 0.002]} rotation={[1.57, 0.175, -1.569]} scale={1.045}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_1.geometry}
            material={materials['book cover.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_2.geometry}
            material={materials['stacked paper.001']}
          />
        </group>
        <group position={[0.155, 0.116, 0]} rotation={[1.571, 0.425, -1.571]} scale={1.045}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_1.geometry}
            material={materials['book cover.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_2.geometry}
            material={materials['stacked paper.001']}
          />
        </group>
        <group position={[0.206, 0.111, -0.003]} rotation={[1.562, 0.462, -1.567]} scale={1.045}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_1.geometry}
            material={materials['book cover.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009_2.geometry}
            material={materials['stacked paper.001']}
          />
        </group>
        <group position={[0.186, 0.113, -0.004]} rotation={[1.568, 0.461, -1.57]} scale={1.045}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials['book cover.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_2.geometry}
            material={materials['stacked paper.001']}
          />
        </group>
      </group>
      <group position={[-0.746, -0.95, 0.684]} rotation={[0, -1.571, 0]} scale={0.58}>
        <group position={[0.037, 0.119, 0.002]} rotation={[1.57, 0.175, -1.569]} scale={1.045}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube024_1.geometry}
            material={materials['book cover.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube024_2.geometry}
            material={materials['stacked paper.001']}
          />
        </group>
        <group position={[0.054, 0.123, -0.004]} rotation={[1.571, 0.18, -1.569]} scale={1.045}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_1.geometry}
            material={materials['book cover.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_2.geometry}
            material={materials['stacked paper.001']}
          />
        </group>
        <group position={[0.116, 0.104, -0.009]} rotation={[1.572, 0.212, -1.571]} scale={1.045}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026_1.geometry}
            material={materials['book cover.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026_2.geometry}
            material={materials['stacked paper.001']}
          />
        </group>
        <group position={[0.095, 0.122, -0.005]} rotation={[1.566, 0.186, -1.57]} scale={1.045}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={materials['book cover.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022_1.geometry}
            material={materials['stacked paper.001']}
          />
        </group>
        <group position={[0.077, 0.12, 0]} rotation={[1.571, 0.183, -1.571]} scale={1.045}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube013_1.geometry}
            material={materials['book cover.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube013_2.geometry}
            material={materials['stacked paper.001']}
          />
        </group>
        <group position={[0.013, 0.118, 0.005]} rotation={[1.569, 0.068, -1.571]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={materials['book cover.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022_1.geometry}
            material={materials['stacked paper.001']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/FinalHouse.glb')
