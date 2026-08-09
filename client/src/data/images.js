// Auto-imports every image under src/assets/<category>/ via Vite's import.meta.glob,
// so dropping a new file into one of these folders makes it available here with no code changes.
const modules = import.meta.glob("../assets/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

// Hand-written captions keyed by filename — used as both gallery titles and <img alt>.
// Anything not listed here falls back to a generic category-based caption.
const captions = {
  "Hero_servo_02.jpg": "Engineer bench-testing an AC servo motor with diagnostic equipment",
  "servo_01.jpg": "Technician wiring the feedback connections on an open servo motor",
  "servo_03.jpg": "Servo motors and drives staged on a workbench for repair",
  "servo_04.jpg": "Precision CNC machining with coolant spray on a servo motor housing",
  "servo_04.webp": "Precision-rebuilt AC servo motor ready for dispatch",
  "servo_05.png": "Compact AC servo motor, front product view",
  "servo_06.jpg": "Legacy servo motor unit retained for reference and comparison",
  "servo_07.jpg": "AC servo motor with integrated feedback connector",
  "servo_08.jpg": "Close-up of a servo motor rotor with copper winding",

  "Hero_motor_repairing_rewinding_02.jpg": "Engineer inspecting a freshly rewound motor stator",
  "motor_repairing_rewinding_01.jpg": "Insulation sleeving applied to a new stator winding",
  "motor_repairing_rewinding_03.jpg": "Technician hand-winding copper coils into a stator",
  "motor_repairing_rewinding_04.jpg": "Stator rewinding in progress on the workshop bench",

  "Hero_industrial_motor_repair_01.jpg": "Engineer inspecting industrial motors on the plant floor",
  "industrial_motor_repair_02.jpg": "Technician reworking an industrial motor component",
  "industrial_motor_repair_04.jpg": "Field technicians servicing an industrial motor on-site",
  "industrial_motor_repair_05.jpg": "Close-up inspection of a motor rotor and windings",
  "industrial_motor_repair_06.jpg": "Large industrial motor stator rewind in progress",
  "industrial_motor_repair_07.jpg": "Industrial motors awaiting inspection and repair",
  "industrial_motor_repair_08.jpg": "Technician hand-winding copper coils into a motor stator",
  "industrial_motor_repair_09.jpeg": "Stator winding inspection on the workshop bench",
  "industrial_motor_repair_010.jpg": "Cutaway diagram of an industrial motor's internal components",
  "industrial_motor_repair_011.jpg": "Exploded view of an industrial motor assembly",
  "industrial_motor_repair_012.jpg": "Close-up of stator windings during rewinding",
  "industrial_motor_repair_013.jpg": "Rewound motor stator staged on the workshop bench",
  "industrial_motor_repair_014.jpg": "Engineer servicing an industrial motor drive unit",

  "Hero_spindle_02.jpg": "Technician handling a precision spindle rotor and shaft",
  "spindle_01.jpg": "CNC spindle shaft disassembly and inspection",
  "spindle_03.jpg": "Close-up of a spindle motor winding and bearing assembly",
  "spindle_04.jpg": "CNC spindle motor secured on the workshop bench for testing",

  "Hero_coil_02.jpg": "Copper coil being wound into a motor stator by hand",
  "coil_01.jpg": "Completed coil rewind on an industrial motor housing",
  "coil_03.jpg": "Close-up detail of a hand-tied copper coil bundle",
  "coil_04.jpg": "Technician adjusting coil windings inside a motor housing",

  "Hero_industrial_transformer_01.jpg": "Engineer performing insulation resistance testing on a transformer",
  "industrial_transformer_02.jpg": "Transformer core and coil assembly being serviced",
  "industrial_transformer_03.jpg": "Engineers servicing a substation power transformer",
  "industrial_transformer_04.jpg": "Field crew servicing a utility transformer",
  "new_hero_industrial_transformer_05.jpg": "Substation power transformer with high-voltage bushings",
  "industrial_transformer_06.jpg": "Outdoor substation transformer bank",
  "industrial_transformer_07.jpg": "Oil-filled substation transformer unit",
};

function buildCategory(folder, label) {
  const files = Object.entries(modules)
    .filter(([path]) => path.includes(`/assets/${folder}/`))
    .sort(([a], [b]) => a.localeCompare(b));

  const all = files.map(([path, src]) => {
    const filename = path.split("/").pop();
    return {
      src,
      alt: captions[filename] ?? `${label} — Servomates Industrial workshop photograph`,
      isPreferredHero: /^new_hero[_-]/i.test(filename),
      isHero: /^hero[_-]/i.test(filename),
    };
  });

  return {
    label,
    all,
    hero: all.find((img) => img.isPreferredHero) ?? all.find((img) => img.isHero) ?? all[0] ?? null,
  };
}

export const images = {
  servoMotor: buildCategory("servo_motor", "Servo Motors"),
  motorRewinding: buildCategory("motor_repairing_rewinding", "Motor Rewinding"),
  industrialMotorRepair: buildCategory("industrial_motor_repair", "Industrial Motor Repair"),
  spindleMotorRepair: buildCategory("spindle_motor_repair", "Spindle Motor Repair"),
  coilRewinding: buildCategory("coil_rewinding", "Coil Rewinding"),
  transformerRepair: buildCategory("industrial_transformer_repair", "Transformer Repair"),
};

// Maps a service's slug (data/services.js) to its image category above.
// Services with no key here (preventive-maintenance, emergency-breakdown-services)
// have no source photos and keep their existing icon-based visuals.
export const slugToImageCategory = {
  "servo-motor-repair": "servoMotor",
  "motor-rewinding": "motorRewinding",
  "industrial-motor-repair": "industrialMotorRepair",
  "spindle-motor-repair": "spindleMotorRepair",
  "coil-rewinding": "coilRewinding",
  "industrial-transformer-repair": "transformerRepair",
};

export function getImageCategoryForSlug(slug) {
  const key = slugToImageCategory[slug];
  return key ? images[key] : null;
}

// Cycles through a category's images by position, so repeated calls across a page
// (card thumbnail, hero, gallery) don't have to all land on the same photo.
export function getImageAt(categoryKey, index) {
  const category = images[categoryKey];
  if (!category || category.all.length === 0) return null;
  return category.all[index % category.all.length];
}
