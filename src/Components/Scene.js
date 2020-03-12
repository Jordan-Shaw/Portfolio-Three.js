import React, { Component } from 'react'
import * as THREE from 'three';


export default class Scene extends Component {

  componentDidMount() {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);




    let renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor("#e5e5e5")
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);



    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = this.mount.clientWidth / this.mount.clientHeight;

      camera.updateProjectionMatrix();
    })

    const makeCubeInstance = (geometry, colour, x, y, z) => {
      const material = new THREE.MeshPhongMaterial({ color: colour });

      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      cube.position.x = x;
      cube.position.y = y
      cube.position.z = z

      return cube;
    }

    const boxWidth = 0.5;
    const boxHeight = 0.5;
    const boxDepth = 0.5;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    const cubes = [
      makeCubeInstance(geometry, 0xFFDFD3, -1, -1, 0),
      makeCubeInstance(geometry, 0x957DAD, 0, -1, 0),
      makeCubeInstance(geometry, 0xFEC8D8, 1, -1, 0)
    ]

    let light = new THREE.PointLight(0xFFFFFF, 1, 250)
    light.position.set(0, 0, 25);
    scene.add(light);

    camera.position.z = 5;

    function animate(time) {
      const refactoredTime = time *= 0.001;
      cubes.forEach((cube, ndx) => {
        console.log(ndx)
        const speed = 1 + ndx * 0.1;
        const rot = refactoredTime * speed;

        cube.rotation.x = rot;
        cube.rotation.y = rot;
      })

      renderer.render(scene, camera);
      requestAnimationFrame(animate);

    }
    requestAnimationFrame(animate);

    // console.log(this.camera)

    // animate();
  }

  render() {
    return (
      <div>
        <div ref={ref => (this.mount = ref)} className="scene" />
      </div>
    )
  }
}
