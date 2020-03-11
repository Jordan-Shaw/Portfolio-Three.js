import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import './App.css';
import * as THREE from 'three';

class App extends Component {

  state = {
  }

  componentDidMount() {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor("#e5e5e5")

    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = this.mount.clientWidth / this.mount.clientHeight;

      camera.updateProjectionMatrix();
    })

    const makeCubeInstance = (geometry, colour, x, y) => {
      const material = new THREE.MeshPhongMaterial({ color: colour });

      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      cube.position.x = x;
      cube.position.y = y

      return cube;
    }

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    const cubes = [
      makeCubeInstance(geometry, 0xFFDFD3, 0, 2),
      makeCubeInstance(geometry, 0x957DAD, 0, 0),
      makeCubeInstance(geometry, 0xFEC8D8, 0, -2)
    ]

    let light = new THREE.PointLight(0xFFFFFF, 1, 250)
    light.position.set(0, 0, 25);
    scene.add(light);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      cubes.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      })

      renderer.render(scene, camera);
    }

    console.log(this.camera)

    animate();
  }



  render() {

    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div ref={ref => (this.mount = ref)} />
      </div>
    );
  }



}


export default App;
