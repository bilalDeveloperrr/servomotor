import { images } from "./images";

const categoryKeys = [
  "servoMotor",
  "motorRewinding",
  "industrialMotorRepair",
  "spindleMotorRepair",
  "coilRewinding",
  "transformerRepair",
];

export const galleryCategories = ["All", ...categoryKeys.map((key) => images[key].label)];

export const galleryItems = categoryKeys.flatMap((key) => {
  const category = images[key];
  return category.all.map((image) => ({
    title: image.alt,
    image,
    category: category.label,
    filterTags: [category.label],
  }));
});
