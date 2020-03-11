import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import * as THREE from 'three';

class App extends Component {

  componentDidMount() {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor("#e5e5e5")

    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;

      camera.updateProjectionMatrix();
    })

    let geometry = new THREE.BoxGeometry();
    let material = new THREE.MeshLambertMaterial({ color: 0x00ff00 })
    let cube = new THREE.Mesh(geometry, material);
    let light = new THREE.PointLight(0xFFFFFF, 1, 500)
    light.position.set(10, 0, 25);
    scene.add(light);

    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animate();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body>
          <div ref={ref => (this.mount = ref)} />
        </body>
      </div>
    );
  }

}


export default App;
