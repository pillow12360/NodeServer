import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const SimpleCubeWithEdges: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 씬(Scene) 생성 - 모든 3D 객체를 포함하는 컨테이너
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xcac7c7); // 배경색을 검정색으로 변경

    // 카메라 생성 - 시야각, 화면 비율, 근접 및 원거리 클리핑 평면 설정
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    // 렌더러 생성 - 3D 씬을 캔버스에 렌더링
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement); // 렌더러 DOM 요소를 리액트 컴포넌트에 추가

    // 구체(Geometry) 생성 - 구체의 형상을 정의
    const geometry = new THREE.SphereGeometry();

    // 재질(Material) 생성 - 구체의 금속 표면을 정의
    const material = new THREE.MeshStandardMaterial({
      color: '#1E90FF', // 구체의 색상 변경 (예: 파란색)
      metalness: 1, // 금속성
      roughness: 0.2, // 거칠기
    });

    // 메쉬(Mesh) 생성 - 형상과 재질을 결합하여 구체 객체 생성
    const cube = new THREE.Mesh(geometry, material);
    // 씬에 구체 객체 추가
    scene.add(cube);

    // 카메라 위치 설정 - 구체를 보기 위해 Z축으로 이동
    camera.position.z = 5;

    // 주변 광원 추가 - 씬 전체에 균일한 조명을 제공
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // 밝기 조절
    scene.add(ambientLight);

    // 여러 방향에서 비추는 포인트 라이트 추가 (여러 크기와 위치)
    const pointLights: THREE.PointLight[] = []; // 타입 명시
    const lightColors = [
      0xffffff, 0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff,
    ];
    for (let i = 0; i < 100; i++) {
      // 광원의 개수를 100개로 늘림
      const intensity = 2 + Math.random() * 2; // 무작위 밝기 (기본 밝기를 2로 설정하고 추가적인 무작위 밝기)
      const color = lightColors[Math.floor(Math.random() * lightColors.length)]; // 무작위 색상
      const pointLight = new THREE.PointLight(color, intensity, 50);
      pointLight.position.set(
        (Math.random() - 0.5) * 100, // 위치 범위를 크게 설정하여 광원이 흩어져 있는 느낌을 줌
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
      );
      pointLights.push(pointLight);
      scene.add(pointLight);
    }

    // 애니메이션 함수 - 매 프레임마다 호출되어 객체를 회전시키고 씬을 렌더링
    const animate = function () {
      requestAnimationFrame(animate); // 다음 프레임을 요청
      cube.rotation.x += 0.01; // 구체를 X축을 기준으로 회전
      cube.rotation.y += 0.01; // 구체를 Y축을 기준으로 회전

      renderer.render(scene, camera); // 씬과 카메라를 이용해 렌더링
    };

    animate(); // 애니메이션 함수 호출로 루프 시작

    // 컴포넌트 언마운트 시 리소스 정리
    return () => {
      mountRef.current?.removeChild(renderer.domElement); // 렌더러 DOM 요소 제거
      scene.remove(cube); // 씬에서 구체 객체 제거
      geometry.dispose(); // 형상 메모리 해제
      material.dispose(); // 재질 메모리 해제
      pointLights.forEach((light) => scene.remove(light)); // 모든 포인트 라이트 제거
    };
  }, []);

  return <div ref={mountRef} />; // 렌더러 DOM 요소를 삽입할 리액트 컴포넌트 반환
};

export default SimpleCubeWithEdges;
