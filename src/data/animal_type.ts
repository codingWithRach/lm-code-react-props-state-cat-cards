const animalTypes = ["Cat", "Dog"] as const;
export type AnimalType = typeof animalTypes[number];
