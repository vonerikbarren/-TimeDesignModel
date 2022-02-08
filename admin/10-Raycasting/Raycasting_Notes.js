const Raycasting_Notes = {
  AdminNotes: {

  }, 

  ToC: {
    item00: "Introduction",
    item01: "Creating the Raycaster",
    item02: "Casting a Ray",
    item03: "Result of an intersection",
    item04: "Testing on each frame",
    item05: "Using the raycaster with the mouse",
    item06: "Hovering",
    item07: "Mouse Enter and mouse leave events",
    item08: "Mouse click Event",
  },

  Raycasting: {

    Chapter00: {
      Title: "Introduction",
      Details: [
        'A raycaster can cast or shoot a ray in a specific direction and test what objects intersect with it.',

        'This technique can be used to detect if there is a wall in front of the player, test if the alser gun hit something, test if something is currently under the mouse to simulate mouse events, and many other things.'
      ],
      
    }

    Chapter01: {
      Title: "Creating the Raycaster",
      Details: {

        Directions: [
          "Remember to have Raycasting Templates opened with this so its easier to follow."
        ],

        Header_A1: [
          "Instantiation of a Raycaster",
          'Here we are tying the THREE.Raycaster into the raycaster var',
        ],

        Header_A2: [
          "Setting the beginning and the end location of the ray",
          'To change the position and direction where ray will be cast, we can use the `.set(...)` method',
          {
            firstParameter: 'position',
            secondParameter: 'direction',
          },

          'Both are Vector3, but the `direction`, has to be normalized. A normalized vector has a length of 1. Dont worry, you dont have to do the mathematics by yourself, and you can call the `normalize()` method on the vetor'
        ],


        Header_A3: [
          'To cast a ray and get the objects that intersect we can use two methods:',
          {
            method01: ["intersectObject(...)", '(For a single object)'],
            method02: ["intersectObjects(...)", '(For multiple objects)']
          },

          'If this were to run and look at the logs, ill see that `intersectObject(...)` returned an aray of one item (object2), and `intersectObjects(...)` returned an array of three items (probably the 3 spheres)',

          "# Result of an intersection",
          'The result of an intersection is always an array, even if you are testing only one object. That is because a ray can go through the same object multiple times. Imagine a donut. The ray will go throught he first part of the ring, then the middle hole, then again the second part of the ring.',
          '\n',
          'Each item of that returned array containers very useful information:',
          {
            returnIndex01: {
              itemName: "distance",
              description: 'The distance between the orgin of the ray and the collision point.'
            },

            returnIndex02: {
              itemName: "face",
              description: 'What face of the geometry was hit by the ray',
            },

            returnIndex03: {
              itemName: "faceIndex",
              description: 'the index of that face'
            },

            returnIndex04: {
              itemName: "object",
              description: 'What object is concerned by the collision',
            },

            returnIndex05: {
              itemName: "point",
              description: 'a Vector3 of the exact position in 3D space of the collision.',
            },

            returnIndex06: {
              itemName: "uv",
              description: 'the UV coordinates in that geometry',
            },
          },

          'Its up to me to use that data. If I want to test if there is a wall in front of the player, you can test the `distance`. If I am going to change the objects color, you can update the `objects` material. If I want to show an explosion on the impact point, I can create this explosion at the `point` position',
        ],


        Header_B1: [
          Title: "Testing on each frame (during an animation)",
          Steps: {
            step01: 'Instantiate the raycaster',
            step02: 'create tick function / animate function',
            step03: 'cast the ray',
            step04: 'create a arrayVar that holds each object',
            step05: 'use the `intersectsObjects()` method on the arrVar',
            step06: 'console.log()',
          },

          Notes: [
            'Yet again, we really dont need to normalize the `rayDirection` because its length is already `1`. But its goodpractice to keep the `normalize()` in case we change the direction.',
            "\n",

            'We can now update the material of the `object` property for each item of the intersects array: ',

          ],
        ],
      },

      Header_B2: {
        Title: "Updating the color when the objects interact with the ray",

        Notes: [
          'Unluckily, they all go blue but never go back red. There are many ways to turn the objects that didnt intersect back to red. What we can do is turn all the spheres red and then turn the ones that intersect blue.',
        ],
      }
    },
  }
}