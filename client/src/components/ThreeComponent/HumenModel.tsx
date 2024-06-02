import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const HumanModel: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 씬 생성
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

    // 로더를 통해 모델 로드
    const loader = new GLTFLoader();
    let model: THREE.Object3D;

    loader.load(
      'path/to/your/model.glb', // 모델 파일 경로
      (gltf) => {
        model = gltf.scene;
        scene.add(model);
        model.position.set(0, -1, 0); // 위치 조정
        camera.position.z = 5;
      },
      undefined,
      (error) => {
        console.error('An error happened', error);
      },
    );

    // 애니메이션 함수
    const animate = function () {
      requestAnimationFrame(animate);
      if (model) {
        model.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };

    animate();

    // 컴포넌트 언마운트 시 리소스 정리
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      if (model) scene.remove(model);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
};

export default HumanModel;
