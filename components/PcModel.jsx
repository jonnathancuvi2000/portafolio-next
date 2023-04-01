/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 PcModel.gltf --transform
Author: SINNIK (https://sketchfab.com/sinnik)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gaming-pc-with-curved-monitor-ad00f460c13743a8bd1f91c230c7142c
Title: Gaming PC with Curved Monitor
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/PcModel-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.LLIM_Table_Glass} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.LLIM_Table_Wood_1} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.LLIM_Table_Wood_1} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.MonitorPlastic} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.MonitorPlastic} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.buttons} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.casing} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.MonitorPlastic} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.insides_gamingPC} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.LLIM_Table_Wood_1} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.sensors} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.MonitorPlastic} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.wheel} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.casing_Gaming_Keyboard} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.casing_Gaming_Keyboard} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.casing_gamingPC} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.casing_gamingPC} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.MonitorPlastic} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.MonitorPlastic} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.plastic_gamingPC} />
      </group>
    </group>
  )
}

useGLTF.preload('/PcModel-transformed.glb')
