const Blender_KeyboardShortcuts = {
  Numpad: {

    ID_Class: 'NPC = NumpadCode',
    // Template
    ShortcutID: 'NPC00',
    ShorcutName: "NumPad#",
    KeyboardInput: "NUMPAD_#",
    Function: '',
    Notes: [

    ],

    // Switch Between Perspective View vs Orthographic View
    ShortcutID: 'NPC05',
    ShorcutName: "NumPad#5",
    KeyboardInput: "NUMPAD_#5",
    Function: 'Switch Between Perspective View vs Orthographic View',
    Notes: [

    ],


    // Axis X, Y, and Z
    ShortcutID: ['NPC01', 'NPC03', 'NPC07'],
    ShorcutName: ["NumPad#1", "Numpad#3", "NumPad#7"],
    KeyboardInput: ["NumPad#1", "Numpad#3", "NumPad#7"],
    Function: 'x, y, z - axis view points,
    Notes: [

    ],

    // Camera View Point / Perspective
    ShortcutID: 'NPC00',
    ShorcutName: "NumPad#0",
    KeyboardInput: "NUMPAD_#0",
    Function: 'Camera View Point / Perspective',
    Notes: [

    ],


    // To focus the camera on an object
    ShortcutID: 'NPC0(.)',
    ShorcutName: "NumPad#(.)",
    KeyboardInput: "Select with Left Mouse, then NUMPAD_#(.)",
    Function: '',
    Notes: [

    ],
  },

  Selecting: {

    ID_Class: 'SEL = Selection',


    // Template
    ShortcutID: 'SEL00',
    ShorcutName: "SEL_",
    UserInput: "SEL_",
    Function: '',
    Notes: [],

    // Selecting
    ShortcutID: 'SEL01',
    ShorcutName: "SEL_Item",
    UserInput: "SEL + Left Mouse",
    AdditionalInputs: {
      SelectMultiple: ["SEL_Multiple", 'Shift + Left Click'],
      SelectAll: ["SEL_ALL", 'Key="A"'],
      SelectWithRectangle: ["SEL_Rect", 'Key="B"'],
    },
    Function: '',
    Notes: [],
  },


  ModeChange: {


    ID_Class: 'MODE = Mode',

    // Template
    ShortcutID: 'CRSI00',
    ShorcutName: "CRSI_",
    UserInput: "",
    Function: '',
    Notes: [],

    // Mode Menu
    ShortcutID: 'MODE_00',
    ShorcutName: "MODE_MENU",
    UserInput: "Ctrl + Tab",
    Function: 'Shows the Mode Menu',
    Notes: [

      // To change which mode I am in. 
      {
        ModeTypes: {
          Mode04: 'ObjectMode',
          Mode02: 'Sculpt Mode',
          Mode06: 'Edit Mode',
          Mode07: 'WeightPaint',
          Mode08: 'Vertex Paint',
          Mode09: 'TexturePaint',
        },
      }
  
    ],

    // Template
    ShortcutID: 'MODE_01',
    ShorcutName: "MODE_EDIT",
    UserInput: "TAB",
    Function: 'Puts user into edit mode',
    AdditionalInputs: {
      Input01: ["1", "Vertices Highlight"],
      Input02: ["2", "Edges Highlight"],
      Input03: ["3", ]
    }
    Notes: [],




  },


  ObjectMode_Shortcuts: {
    ID_Class: 'CRSI = CreationSimulation',

    // Template
    ShortcutID: 'CRSI00',
    ShorcutName: "CRSI_",
    UserInput: "",
    Function: '',
    Notes: [],


    // Adding an object 
    ShortcutID: 'CRSI_01',
    ShorcutName: "CRSI_Create",
    UserInput: "Shift + A",
    Function: 'Opens up a menu to drop more objects.',
    Notes: [],

    // Deleting an object 
    ShortcutID: 'CRSI_02',
    ShorcutName: "CRSI_Delete",
    UserInput: "X",
    Function: 'Prompt for deletion of selection',
    Notes: [],

    // Hiding a single object
    ShortcutID: 'CRSI_03',
    ShorcutName: "CRSI_HidingSingleObject",
    UserInput: "H",
    Function: 'Hiding a single object',
    Notes: [],

    // Hiding all objects
    ShortcutID: 'CRSI_04',
    ShorcutName: "CRSI_HidingMultipleObjects",
    UserInput: "Shift + H",
    Function: 'Hiding all objects',
    Notes: [],


    // # Transforming objects
    // { Position, Rotation, and Scale }

    // Position Change
    ShortcutID: 'CRSI_05',
    ShorcutName: "CRSI_Position",
    UserInput: "G",
    Function: 'Makes user able to move object',
    Notes: [],

    // Rotation Change
    ShortcutID: 'CRSI_06',
    ShorcutName: "CRSI_Rotation",
    UserInput: "R",
    Function: 'Makes user able to rotate object',
    Notes: [],

    // Scale Change
    ShortcutID: 'CRSI_07',
    ShorcutName: "CRSI_Scale",
    UserInput: "S",
    Function: 'Makes user able to scale object',
    Notes: [],

  },




}