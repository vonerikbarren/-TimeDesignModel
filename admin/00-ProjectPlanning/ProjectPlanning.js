const ProjectPlanning = {
  Admin: {},

  ProjectPlan: [

    // Template
    item00: {
      itemName: "",
      itemPriority: '',
      itemGoal : {
        Goal01: '',
        Goal02: '',
      },
      itemDetails: [
        '',
      ],
    },

    // item01: Time Reality
    item00: {

      // Project_Headers
      ProjectName: "",
      ProjectPriority: '',

      // Project_GoalList
      Project_GoalList : {
        Goal00: [[false],"Create Philosophy Behind The Time Reality"],
        Goal01: [[false],"Create 3D BluePrint"],
        Goal02: [[false],"Create 2D BluePrint"],
        Goal03: [[false], "Gather all necessary assets"],
        Goal04: [[false], "Gather all necessary resources for project"],
        Goal05: [[false], "Create GoalAccomplish_Loop.js", 'sibling file to this file.'],
        Goal06: [[false], "Test Loop & Project Structure and Look for bugs"],
        Goal07: [[false], "Create TimeBudget for Project"],
        Goal08: [[false], "Begin Building CodeTemplateModels (CTMs) for work."],
        Goal09: [[false], "Begin Building Application"],
        Goal10: [[false], "Periodically Check live applicaition."],
      },

      ProjectGoals_ObjectiveLevel: [

        // Goal #1 - Create Philosophy Behind the Time Reality
        {
          Goal00: "Create Philosophy Behind the Time Reality",
          ObjectivesList: [
            [[false], "Purpose of TimeReality Component", 'Short Notes here'],
            [[false], "Aspects of Time", 'Short Notes here'],
          ],
        },

        // Goal #1 - Create 3D Blueprint
        {
          Goal01: "Create 3D BluePrint. We are going to need to a 3D layout of the Reality",
          ObjectivesList: [
            [[false], "New Concepts Project on iPad", 'NameLayers first and import assets'],
            [[false], "Report Asset Test Failures", 'Pngs, text, textures, and meshes'],
          ],
        },

        // Goal #2 - Create 2D BluePrint
        {
          Goal02: "Create 2D BluePrint. We are going to need to a 32D layout of the TimeReality",
          ObjectivesList: [
            [[false], "New Concepts Project on iPad", 'NameLayers first and import assets'],
            [[false], "Report Asset Test Failures", 'Pngs, text, textures, and meshes'],
          ],
        },

        // Goal #3 - Gather all necessary assets 
        {
          Goal03: "Gather all necessary assets",
          ObjectivesList: [

            // Logic Assets
            [[false], "THREE/examples/css2D_label.html", 'Learn & Implement'],
            [[false], "THREE/examples/css3d_periodictable.html", 'Learn & Implement'],
            [[false], "THREE/examples/css3d_youtube.html", 'Learn & Implement'],

            // Design Assets
            [[false], "3D Clock Assets", 'List Items in Task Level'],
            [[false], "Cogs", 'Pngs, text, textures, and meshes'],
          ],
        },

      ],




    },
  ],
}