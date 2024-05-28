import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SimpleCube: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 씬(Scene) 생성
    const scene = new THREE.Scene();
    // 카메라 생성
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    // 렌더러 생성
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    mountRef.current?.appendChild(renderer.domElement);

    // 기하체 및 재질 생성 후 메쉬 생성
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // 애니메이션 함수
    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // 컴포넌트 언마운트 시 리소스 정리
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      scene.remove(cube);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
};

export default SimpleCube;
