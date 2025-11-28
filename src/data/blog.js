// Entradas de blog de ejemplo. Cada entrada contiene id, título,
// descripción corta e imagen. Se muestran en la página de blog.
export const posts = [
  {
    id: 1,
    slug: "consejos-para-elegir-tu-torta",
    title: "Consejos para elegir tu torta",
    excerpt: "Porciones, sabores y decoración: cómo acertar según tu evento.",
    content: `
🍰 Porciones: 120–150 g por persona.
🎂 Sabores: uno base + uno alternativo.
🌤️ Clima: coberturas más estables en calor (ganache/crema vegetal).
🎉 Logística: transporte refrigerado y decoración acorde al tema.
`.trim(),
    img: "/assets/escoger.jpg"
  },
  {
    id: 2,
    slug: "alternativas-sin-gluten-y-veganas",
    title: "Alternativas sin gluten y veganas",
    excerpt: "Opciones inclusivas con gran sabor: rellenos, coberturas y formatos.",
    content: `
🌾 Harinas sin gluten: arroz/maíz/almendra (cuidar contaminación cruzada).
🌱 Sustitutos veganos: cremas vegetales, leche de avena/almendra.
🍓 Sabor natural: frutas y compotas.
🎁 Formatos individuales: cupcakes/vasitos para controlar alérgenos.
`.trim(),
    img: "/assets/alternativas.jpg"
  }
];
