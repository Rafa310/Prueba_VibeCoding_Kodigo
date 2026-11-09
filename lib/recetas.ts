export type Receta = {
  slug: string;
  nombre: string;
  categoria: "Desayuno" | "Almuerzo" | "Cena";
  minutos: number;
  porciones: number;
  emoji: string;
  descripcion: string;
  ingredientes: string[];
  pasos: string[];
};

export const recetas: Receta[] = [
  {
    slug: "tostadas-con-aguacate", nombre: "Tostadas con aguacate", categoria: "Desayuno", minutos: 10, porciones: 2, emoji: "🥑",
    descripcion: "Un desayuno fresco, rápido y lleno de sabor.",
    ingredientes: ["4 rebanadas de pan", "1 aguacate maduro", "1 tomate", "Jugo de medio limón", "Sal y pimienta"],
    pasos: ["Tuesta el pan hasta que esté dorado.", "Machaca el aguacate con limón, sal y pimienta.", "Corta el tomate en rodajas.", "Unta el aguacate sobre el pan y añade el tomate."]
  },
  {
    slug: "pasta-con-tomate", nombre: "Pasta con tomate", categoria: "Almuerzo", minutos: 25, porciones: 3, emoji: "🍝",
    descripcion: "Una pasta casera fácil para cualquier día.",
    ingredientes: ["300 g de pasta", "3 tomates", "2 dientes de ajo", "2 cucharadas de aceite de oliva", "Sal y orégano"],
    pasos: ["Cocina la pasta según las instrucciones del empaque.", "Pica los tomates y el ajo.", "Saltea el ajo y agrega el tomate hasta formar una salsa.", "Mezcla con la pasta y añade orégano."]
  },
  {
    slug: "ensalada-de-pollo", nombre: "Ensalada de pollo", categoria: "Almuerzo", minutos: 30, porciones: 2, emoji: "🥗",
    descripcion: "Vegetales crujientes acompañados de pollo.",
    ingredientes: ["1 pechuga de pollo", "2 tazas de lechuga", "1 zanahoria", "1 pepino", "Aceite de oliva", "Sal y limón"],
    pasos: ["Cocina bien el pollo en una sartén y córtalo en tiras.", "Lava los vegetales y córtalos.", "Mezcla todo en un recipiente.", "Aliña con aceite, limón y sal."]
  },
  {
    slug: "omelette-de-queso", nombre: "Omelette de queso", categoria: "Desayuno", minutos: 12, porciones: 1, emoji: "🍳",
    descripcion: "Huevos suaves con un relleno de queso.",
    ingredientes: ["2 huevos", "40 g de queso", "1 cucharadita de aceite", "Sal y pimienta"],
    pasos: ["Bate los huevos con sal y pimienta.", "Calienta el aceite a fuego medio.", "Vierte los huevos y deja que cuajen.", "Agrega queso, dobla y cocina hasta que se derrita."]
  },
  {
    slug: "sandwich-de-pavo", nombre: "Sándwich de pavo", categoria: "Cena", minutos: 10, porciones: 1, emoji: "🥪",
    descripcion: "Una cena práctica con ingredientes sencillos.",
    ingredientes: ["2 rebanadas de pan", "2 lonchas de pavo cocido", "1 hoja de lechuga", "2 rodajas de tomate", "1 cucharada de yogur natural"],
    pasos: ["Lava la lechuga y el tomate.", "Unta el yogur sobre el pan.", "Coloca el pavo, la lechuga y el tomate.", "Cierra el sándwich y sirve."]
  },
  {
    slug: "arroz-con-vegetales", nombre: "Arroz con vegetales", categoria: "Cena", minutos: 30, porciones: 3, emoji: "🍚",
    descripcion: "Arroz colorido con verduras salteadas.",
    ingredientes: ["1 taza de arroz", "2 tazas de agua", "1 zanahoria", "Media taza de guisantes", "1 cucharada de aceite", "Sal"],
    pasos: ["Lava el arroz y cocina con el agua y una pizca de sal.", "Pica la zanahoria en cubos pequeños.", "Saltea zanahoria y guisantes hasta que estén tiernos.", "Incorpora el arroz cocido y mezcla."]
  },
  {
    slug: "yogur-con-frutas", nombre: "Yogur con frutas", categoria: "Desayuno", minutos: 5, porciones: 1, emoji: "🍓",
    descripcion: "Una combinación fresca para empezar el día.",
    ingredientes: ["1 taza de yogur natural", "1 banana", "5 fresas", "2 cucharadas de avena"],
    pasos: ["Lava las fresas y córtalas.", "Corta la banana en rodajas.", "Sirve el yogur en un tazón.", "Agrega la fruta y la avena."]
  },
  {
    slug: "sopa-de-verduras", nombre: "Sopa de verduras", categoria: "Cena", minutos: 35, porciones: 4, emoji: "🍲",
    descripcion: "Una sopa reconfortante para cerrar el día.",
    ingredientes: ["1 papa", "2 zanahorias", "1 calabacín", "1 litro de agua o caldo", "Sal y perejil"],
    pasos: ["Lava, pela y corta las verduras.", "Calienta el agua o caldo en una olla.", "Agrega las verduras y cocina hasta que estén tiernas.", "Ajusta la sal y termina con perejil."]
  }
];

export function buscarReceta(slug: string): Receta | undefined {
  return recetas.find((receta) => receta.slug === slug);
}
