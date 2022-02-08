/**
 * Raycaster
 * |- Refer back to the raycasting notes and match the section to the notes
 * |- either by header or by line number. 
 */

// Header_A.1
const raycaster = new THREE.Raycaster()

// Header_A.2
const rayOrigin = new THREE.Vector3(- 3, 0, 0)
const rayDirection = new THREE.Vector3(10, 0, 0)
rayDirection.normalize()

raycaster.set(rayOrigin, rayDirection)


// Header_A.3 - Casting a Ray
const intersect = raycaster.intersectObject(object2)
console.log(object2)

const intersects = raycaster.intersectObjects([
  object1, object2, object3
])
console.log(intersects)