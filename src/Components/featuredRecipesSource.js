const recipes = [
  {
    lable: "Banana smoothie",
    image:
      "https://edamam-product-images.s3.amazonaws.com/web-img/e4f/e4f7146cb6c0806e4287a9c8a69ed64b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIGZGvGYxlxd2Rb5WG9FWRPslXmnKkA0AGX1sVUOrEI6lAiEA9mS%2B6TJKplfHDEw4OV7wvE5%2B%2Fp2l9H8Zs1jDGzvsGWgq1QQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDAkK9bh9d2aL0Mt7HCqpBEDsbvOHL6CVHTzTGdYRq6JzxEk%2BVA6rlGoct7FH50DfVJGhPVb4Dz0ab1AVu2QXWAo9jccZ3vMULGJylID0SwIVK%2BrXcZsSY00YO0qbD87SoAaCqv4gA6o9IX4PxHsJi31xsVV%2FQIaLetcQAjoGbBHLg%2Fsbg0mMB0tZPjF4zXU3NJvujezWUrSb5yD4FIb%2BVwWrDzUD9Tehcla2y5s1q9iT7XU2ghJaWYoksf5qQWwehhE6PlQW%2BLXBQvxMx29ZiNgHbsKh7S8YzKCjI88t02KBzugofjKodeYSeHK0qmFJWZiltzrJrngIfJs%2FehSxx9XAZPX6yy1rJV2fy5QHza2pTVIm%2Fd6SkK%2BOsDALu4Gm%2FhofvZDNOvIGp3mPH4USor2JrGVH5RSSL76tqj9CaoiG4GyKLPtCl3hMS20OZXJrYlEEXVYbRNtNyqgQ3H5WD0tyJicC6148paLS8qdBcb0VBQkT%2B2wVEtLMlQ6TgKtGXMjS62znc4ELDLl7CYE0WB98pzONwmzgUXRh9eN6pRj6NvJLc1fce1BaX8CW%2Fxa9u9VF38tflWtRqFx6eS5VQRkpwkcM1juezmRAhKGoUwI7r%2BoZeGXMhk9kEX02fVpQDJ%2B5WbiGP2YVTVdcYSIdT1dT2KQva4JEzUEfSJYZjJn%2BYQbgDsKMJ9HlzPLUS%2B8%2FGCJ1vshjtGN4BJL1F3yuJeLRacBqzgtWnzig%2FuFm%2FtkFxFQedTMfMQowtYzFmwY6qQF5IhPLLlnV8NF4REZwFlPalkYK%2B3aGPofOrz%2FI8rF63JPu3w%2BhFb0W6ltf4UW0Qz7GB0gGLyg4utM2KyH8IgNgCKQSrWEYhGcHZ8tTKJCOUaeMaiBLD08Gv2T%2FCEZtARa9IO3dVrFkKzrFq7Ay%2BBMZLTlotDtatg0QuoiMEoOVJgKxlp17rEtjEJIrq9MA3VssCcAz6sjSUdSqDgEu9NommgxMyXEERT01&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221113T205505Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKNNOS2YE%2F20221113%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8f418a448c6479c26060af78e76e91d66cab11c22729a65dcfd0c00fc64967cd",
    ingedients: [
      {
        text: "500ml unsweetened almond milk",
        quantity: 500,
        measure: "milliliter",
        food: "unsweetened almond milk",
        weight: 507.21034052764503,
        foodCategory: "Vegan products",
        foodId: "food_aa8o4pkbhgkey4btmg1daaclqmww",
        image:
          "https://www.edamam.com/food-img/b26/b267bf598feaabd7349fddda7a481f00.jpg",
      },
      {
        text: "2 tbsp almond butter",
        quantity: 2,
        measure: "tablespoon",
        food: "almond butter",
        weight: 32,
        foodCategory: "plant-based protein",
        foodId: "food_ae9575obgo01yta6szkvqab50hhl",
        image:
          "https://www.edamam.com/food-img/5dd/5ddf70b59f27c03902b5d5a3c4574b37.png",
      },
      {
        text: "6 prunes",
        quantity: 6,
        measure: "<unit>",
        food: "prunes",
        weight: 57,
        foodCategory: "fruit",
        foodId: "food_by36al7bk75fmua8mvur5a750hjo",
        image:
          "https://www.edamam.com/food-img/2a7/2a710f21b2bd16ebb3a8fe047775f3cc.jpg",
      },
      {
        text: "1 tsp cinnamon",
        quantity: 1,
        measure: "teaspoon",
        food: "cinnamon",
        weight: 2.6,
        foodCategory: "Condiments and sauces",
        foodId: "food_atjxtznauw5zabaixm24xa787onz",
        image:
          "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg",
      },
      {
        text: "1 small ripe banana",
        quantity: 1,
        measure: "<unit>",
        food: "banana",
        weight: 101,
        foodCategory: "fruit",
        foodId: "food_bjsfxtcaidvmhaa3afrbna43q3hu",
        image:
          "https://www.edamam.com/food-img/9f6/9f6181163a25c96022ee3fc66d9ebb11.jpg",
      },
    ],
    key: "101712c104270b058b3759ae341c97e7",
  },
  {
    lable: "Spicy corn & chickpea burgers",
    image:
      "https://edamam-product-images.s3.amazonaws.com/web-img/20f/20f1f3909266c3fbb8a1ca5834a22f65-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCID8807dP0hRqFgl0wMhM3eeIPVT0H8yFwB72tEJwaUK9AiAbHAdByAYeSvHEcnMVcxzcsA1DP4T7%2FzthuXOPRyb4firVBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMLvo0qzkDtSUxlBd%2FKqkEGGeHAyWL4Cf%2BESDpO%2FcPtCRdGuVIFvfwExb9olZTQhg7aBOz2%2FqbVLu2W74cAZUI6ZwW36MumeJ60jz7Hdj7emoyltbo7zw6lcb%2Bm1GVxiEJc8wLUongGsiCdqbhgVl9Yrd5PxoiyoxyRbNs6%2FQx9veyWEOcnHH38WP7aUCxsmpFdCwWkJ%2BRmPnBlkI%2B6dxa8mb4OaPUrxgvCZUGvkoPLVdcNUbYJBCwdGleY5PbshsP%2Bov9jsoFIFpPWjKKlb%2F4E2NrEBevwfhvrs6phrIWiI%2BH1bYhFTPxtnN78cWezqOAkdAhU9TygJS57iU7DEnJf4vdo%2FMQPRyEk9RraY%2BMFxe2a%2FoR0RtqJCAHQm2Dc0D3tPissffQDJHG86pPwNSE1wIPm7dHpnXorH9d0TTG4JGwFTJrjBkRgbmCwHHU8%2Fr%2F6%2BSgz7ehkwcU0QnxTV7Ifbs4FPltl%2FrOQ%2FwI6QuLpdK4tZcnis4K9iJeLXLHz5ra49deu2a8Lymjh1etDV%2FSynZhM4RK9o%2B7%2FyyD8ZaakIOvVVu94jsmIlbhsERCW9sxZYAv90DGX4f6CPYDzmZNgzim9ueLCLRorMPkJxwnfkuaB3WoOCGRfEnjqtVERD%2F%2BrD1CxXwIER%2F82r4ZMR%2F2%2BXvZpMO14KgJmAlo76C%2BfoweEU0RLx5YsSlVW2OvvYtdVZ%2Fqzz%2BkbQeqzi88qHy5CzGn3I0O%2BuWaeS%2FeKG7i1E3QL3q1TCHZtzCuh8WbBjqqASNpLGm1zC6foic2fSeK6lzV7ScMwXcSvsVCOC3fGskCF4YFchjqHvhlPqSQQyCrjxg7d0HkuxpFed1%2F6SfLBuvrte6keTvuh0RV%2B7YdQwC001pDjETmTPdEvp9it4ddoqMEU6s0jkRRxRaFvEZ0TTRjaW%2BibF%2Fkipp6IWWhHU1q%2BbodH2eunBKwbahaH%2B4wfcdeEyAXxEYuoppeffN9NHPoCFuuOmnMejQx&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221113T205518Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK6Q3BCWI%2F20221113%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2b7514742a4fc98eb3319421fd46ab9018d940d02db9407b35bcbeb425815c4b",
    ingedients: [
      {
        text: "800 g sweet potatoes",
        quantity: 800,
        measure: "gram",
        food: "sweet potatoes",
        weight: 800,
        foodCategory: "vegetables",
        foodId: "food_bg68yf2b3dlfusawgs590bjloxfd",
        image:
          "https://www.edamam.com/food-img/b66/b660e3d37b4ea9d58cb98e8ea73933b6.jpg",
      },
      {
        text: "2 teaspoons smoked paprika",
        quantity: 2,
        measure: "teaspoon",
        food: "smoked paprika",
        weight: 4.6,
        foodCategory: "Condiments and sauces",
        foodId: "food_a9dpcnjb883g67b3lq82ca0421ql",
        image:
          "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg",
      },
      {
        text: "olive oil",
        quantity: 0,
        measure: null,
        food: "olive oil",
        weight: 28.947429999994608,
        foodCategory: "Oils",
        foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
        image:
          "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
      },
      {
        text: "1 x 400 g tin of chickpeas",
        quantity: 400,
        measure: "gram",
        food: "chickpeas",
        weight: 400,
        foodCategory: "plant-based protein",
        foodId: "food_baux5rqbkto336asd7w3lbbi1koo",
        image:
          "https://www.edamam.com/food-img/520/520c62055515f730b8947e0e445fd2be.jpg",
      },
      {
        text: "1 x 340 g tin of sweetcorn",
        quantity: 340,
        measure: "gram",
        food: "sweetcorn",
        weight: 340,
        foodCategory: "vegetables",
        foodId: "food_b4wvre6b14mmkpaa22d8ybup8q51",
        image:
          "https://www.edamam.com/food-img/eb5/eb5e11afb9f697720b2de2e0e0e27d8d.jpg",
      },
      {
        text: "½ a bunch of fresh coriander",
        quantity: 0.5,
        measure: "bunch",
        food: "fresh coriander",
        weight: 20,
        foodCategory: "vegetables",
        foodId: "food_alhzhuwb4lc7jnb5s6f02by60bzp",
        image:
          "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg",
      },
      {
        text: "½ teaspoon ground coriander",
        quantity: 0.5,
        measure: "teaspoon",
        food: "coriander",
        weight: 0.9,
        foodCategory: "Condiments and sauces",
        foodId: "food_afpcy6rb44nx6gbfff63ga2cqksw",
        image:
          "https://www.edamam.com/food-img/a90/a901cee0b9028841d258f5d07b5924e7.jpg",
      },
      {
        text: "½ teaspoon ground cumin",
        quantity: 0.5,
        measure: "teaspoon",
        food: "cumin",
        weight: 1.05,
        foodCategory: "Condiments and sauces",
        foodId: "food_a8jjbx4biqndasapojdb5by3e92e",
        image:
          "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg",
      },
      {
        text: "3 heaped tablespoons plain flour , plus extra for dusting",
        quantity: 3,
        measure: "tablespoon",
        food: "flour",
        weight: 23.437499999603745,
        foodCategory: "grains",
        foodId: "food_ahebfs0a985an4aubqaebbipra58",
        image:
          "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg",
      },
      {
        text: "1 lemon",
        quantity: 1,
        measure: "<unit>",
        food: "lemon",
        weight: 58,
        foodCategory: "fruit",
        foodId: "food_a6uzc62astrxcgbtzyq59b6fncrr",
        image:
          "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg",
      },
      {
        text: "1 small round lettuce",
        quantity: 1,
        measure: "<unit>",
        food: "lettuce",
        weight: 5,
        foodCategory: "vegetables",
        foodId: "food_bf5fxtkbc9alwoajuvsi7amonr5w",
        image:
          "https://www.edamam.com/food-img/719/71996625d0cb47e197093ecd52c97dc2.jpg",
      },
      {
        text: "2 large ripe tomatoes",
        quantity: 2,
        measure: "<unit>",
        food: "tomatoes",
        weight: 307.5,
        foodCategory: "vegetables",
        foodId: "food_a6k79rrahp8fe2b26zussa3wtkqh",
        image:
          "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg",
      },
      {
        text: "tomato ketchup",
        quantity: 0,
        measure: null,
        food: "tomato ketchup",
        weight: 0,
        foodCategory: "condiments and sauces",
        foodId: "food_au7jthtab0n3era9uue8pauakroe",
        image:
          "https://www.edamam.com/food-img/257/257207c446011b849001ae596390341c.jpeg",
      },
      {
        text: "4 wholemeal burger buns",
        quantity: 4,
        measure: "<unit>",
        food: "burger buns",
        weight: 168,
        foodCategory: "bread, rolls and tortillas",
        foodId: "food_biei7e8ap2juekb162j79bu40fsu",
        image:
          "https://www.edamam.com/food-img/dbe/dbe3d135d1336ed19703d359e33d58dd.jpg",
      },
      {
        text: "extra virgin olive oil",
        quantity: 0,
        measure: null,
        food: "extra virgin olive oil",
        weight: 28.947429999994608,
        foodCategory: "Oils",
        foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
        image:
          "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
      },
    ],
    key: "39e75dec728c9fdf1e69ee362e2579ba",
  },
  {
    lable: "Avocado hummus",
    image:
      "https://edamam-product-images.s3.amazonaws.com/web-img/d82/d82550a92e97e2204861121d98ac9a17-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCID8807dP0hRqFgl0wMhM3eeIPVT0H8yFwB72tEJwaUK9AiAbHAdByAYeSvHEcnMVcxzcsA1DP4T7%2FzthuXOPRyb4firVBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMLvo0qzkDtSUxlBd%2FKqkEGGeHAyWL4Cf%2BESDpO%2FcPtCRdGuVIFvfwExb9olZTQhg7aBOz2%2FqbVLu2W74cAZUI6ZwW36MumeJ60jz7Hdj7emoyltbo7zw6lcb%2Bm1GVxiEJc8wLUongGsiCdqbhgVl9Yrd5PxoiyoxyRbNs6%2FQx9veyWEOcnHH38WP7aUCxsmpFdCwWkJ%2BRmPnBlkI%2B6dxa8mb4OaPUrxgvCZUGvkoPLVdcNUbYJBCwdGleY5PbshsP%2Bov9jsoFIFpPWjKKlb%2F4E2NrEBevwfhvrs6phrIWiI%2BH1bYhFTPxtnN78cWezqOAkdAhU9TygJS57iU7DEnJf4vdo%2FMQPRyEk9RraY%2BMFxe2a%2FoR0RtqJCAHQm2Dc0D3tPissffQDJHG86pPwNSE1wIPm7dHpnXorH9d0TTG4JGwFTJrjBkRgbmCwHHU8%2Fr%2F6%2BSgz7ehkwcU0QnxTV7Ifbs4FPltl%2FrOQ%2FwI6QuLpdK4tZcnis4K9iJeLXLHz5ra49deu2a8Lymjh1etDV%2FSynZhM4RK9o%2B7%2FyyD8ZaakIOvVVu94jsmIlbhsERCW9sxZYAv90DGX4f6CPYDzmZNgzim9ueLCLRorMPkJxwnfkuaB3WoOCGRfEnjqtVERD%2F%2BrD1CxXwIER%2F82r4ZMR%2F2%2BXvZpMO14KgJmAlo76C%2BfoweEU0RLx5YsSlVW2OvvYtdVZ%2Fqzz%2BkbQeqzi88qHy5CzGn3I0O%2BuWaeS%2FeKG7i1E3QL3q1TCHZtzCuh8WbBjqqASNpLGm1zC6foic2fSeK6lzV7ScMwXcSvsVCOC3fGskCF4YFchjqHvhlPqSQQyCrjxg7d0HkuxpFed1%2F6SfLBuvrte6keTvuh0RV%2B7YdQwC001pDjETmTPdEvp9it4ddoqMEU6s0jkRRxRaFvEZ0TTRjaW%2BibF%2Fkipp6IWWhHU1q%2BbodH2eunBKwbahaH%2B4wfcdeEyAXxEYuoppeffN9NHPoCFuuOmnMejQx&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221113T205549Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK6Q3BCWI%2F20221113%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=70fede64fa9e3f60fe0ce98bcb70e915421c3ebf8029b3171b32cd7ec8529c03",
    ingedients: [
      {
        text: "1 ripe avocado, cut in half, skin and stone removed",
        quantity: 1,
        measure: "<unit>",
        food: "avocado",
        weight: 201,
        foodCategory: "fruit",
        foodId: "food_b0yuze4b1g3afpanijno5abtiu28",
        image:
          "https://www.edamam.com/food-img/984/984a707ea8e9c6bf5f6498970a9e6d9d.jpg",
      },
      {
        text: "1 x 400g/14oz can chickpeas, drained and rinsed",
        quantity: 400,
        measure: "gram",
        food: "can chickpeas",
        weight: 400,
        foodCategory: "plant-based protein",
        foodId: "food_a63lcoybzox4krbbrj8eba9g8cz5",
        image:
          "https://www.edamam.com/food-img/603/603965a58e6a5d127a522ffb44289d24.jpg",
      },
      {
        text: "1 garlic clove, peeled, finely chopped",
        quantity: 1,
        measure: "clove",
        food: "garlic",
        weight: 3,
        foodCategory: "vegetables",
        foodId: "food_avtcmx6bgjv1jvay6s6stan8dnyp",
        image:
          "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg",
      },
      {
        text: "1-2 lemons, juice only",
        quantity: 1.5,
        measure: "<unit>",
        food: "lemons",
        weight: 87,
        foodCategory: "fruit",
        foodId: "food_a6uzc62astrxcgbtzyq59b6fncrr",
        image:
          "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg",
      },
      {
        text: "½ tsp tabasco",
        quantity: 0.5,
        measure: "teaspoon",
        food: "tabasco",
        weight: 2.35,
        foodCategory: "canned soup",
        foodId: "food_abu9ntfby2jdmxa2dhtlgbub8dlu",
        image:
          "https://www.edamam.com/food-img/240/24061557b395943062ee4f50ef0d3c2f.jpg",
      },
      {
        text: "½ tsp ground cumin",
        quantity: 0.5,
        measure: "teaspoon",
        food: "cumin",
        weight: 1.05,
        foodCategory: "Condiments and sauces",
        foodId: "food_a8jjbx4biqndasapojdb5by3e92e",
        image:
          "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg",
      },
      {
        text: "Sea salt, to taste",
        quantity: 0,
        measure: null,
        food: "Sea salt",
        weight: 5.8224,
        foodCategory: "Condiments and sauces",
        foodId: "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
        image:
          "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
      },
      {
        text: "6 ready-made pitta breads, to serve",
        quantity: 6,
        measure: "<unit>",
        food: "pitta breads",
        weight: 276,
        foodCategory: "bread, rolls and tortillas",
        foodId: "food_bwqktveb77b6uxbrpvxgcb63ucm7",
        image:
          "https://www.edamam.com/food-img/b8c/b8c2794a59279b7e0553c27e0769fbaf.jpg",
      },
    ],
    key: "faac46355dc0f22dc03071386e7acb4f",
  },
  {
    lable: "Broccoli Rabe With Garlic",
    image:
      "https://edamam-product-images.s3.amazonaws.com/web-img/2ac/2ac981d8f66075fd75a980f983841bc3-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCID8807dP0hRqFgl0wMhM3eeIPVT0H8yFwB72tEJwaUK9AiAbHAdByAYeSvHEcnMVcxzcsA1DP4T7%2FzthuXOPRyb4firVBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMLvo0qzkDtSUxlBd%2FKqkEGGeHAyWL4Cf%2BESDpO%2FcPtCRdGuVIFvfwExb9olZTQhg7aBOz2%2FqbVLu2W74cAZUI6ZwW36MumeJ60jz7Hdj7emoyltbo7zw6lcb%2Bm1GVxiEJc8wLUongGsiCdqbhgVl9Yrd5PxoiyoxyRbNs6%2FQx9veyWEOcnHH38WP7aUCxsmpFdCwWkJ%2BRmPnBlkI%2B6dxa8mb4OaPUrxgvCZUGvkoPLVdcNUbYJBCwdGleY5PbshsP%2Bov9jsoFIFpPWjKKlb%2F4E2NrEBevwfhvrs6phrIWiI%2BH1bYhFTPxtnN78cWezqOAkdAhU9TygJS57iU7DEnJf4vdo%2FMQPRyEk9RraY%2BMFxe2a%2FoR0RtqJCAHQm2Dc0D3tPissffQDJHG86pPwNSE1wIPm7dHpnXorH9d0TTG4JGwFTJrjBkRgbmCwHHU8%2Fr%2F6%2BSgz7ehkwcU0QnxTV7Ifbs4FPltl%2FrOQ%2FwI6QuLpdK4tZcnis4K9iJeLXLHz5ra49deu2a8Lymjh1etDV%2FSynZhM4RK9o%2B7%2FyyD8ZaakIOvVVu94jsmIlbhsERCW9sxZYAv90DGX4f6CPYDzmZNgzim9ueLCLRorMPkJxwnfkuaB3WoOCGRfEnjqtVERD%2F%2BrD1CxXwIER%2F82r4ZMR%2F2%2BXvZpMO14KgJmAlo76C%2BfoweEU0RLx5YsSlVW2OvvYtdVZ%2Fqzz%2BkbQeqzi88qHy5CzGn3I0O%2BuWaeS%2FeKG7i1E3QL3q1TCHZtzCuh8WbBjqqASNpLGm1zC6foic2fSeK6lzV7ScMwXcSvsVCOC3fGskCF4YFchjqHvhlPqSQQyCrjxg7d0HkuxpFed1%2F6SfLBuvrte6keTvuh0RV%2B7YdQwC001pDjETmTPdEvp9it4ddoqMEU6s0jkRRxRaFvEZ0TTRjaW%2BibF%2Fkipp6IWWhHU1q%2BbodH2eunBKwbahaH%2B4wfcdeEyAXxEYuoppeffN9NHPoCFuuOmnMejQx&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221113T205701Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK6Q3BCWI%2F20221113%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f0b0688a7e4408fe9b3b0146b028e69c0f6e42637263163c96b03c7264daae4b",
    ingedients: [
      {
        text: "1 bunch broccoli rabe, trim off tough stems on bottom",
        quantity: 1,
        measure: "bunch",
        food: "broccoli rabe",
        weight: 453,
        foodCategory: "vegetables",
        foodId: "food_blhjqxuagcrdf7bzsuuezbz813xc",
        image:
          "https://www.edamam.com/food-img/52a/52a2e62a7e6ca0963d1cab1f7cbc06f1.jpg",
      },
      {
        text: "2 tablespoons olive oil",
        quantity: 2,
        measure: "tablespoon",
        food: "olive oil",
        weight: 27,
        foodCategory: "Oils",
        foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
        image:
          "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
      },
      {
        text: "10 garlic cloves",
        quantity: 10,
        measure: "clove",
        food: "garlic",
        weight: 30,
        foodCategory: "vegetables",
        foodId: "food_avtcmx6bgjv1jvay6s6stan8dnyp",
        image:
          "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg",
      },
      {
        text: "¼ teaspoon celtic sea salt",
        quantity: 0.25,
        measure: "teaspoon",
        food: "sea salt",
        weight: 1.2135416667282188,
        foodCategory: "Condiments and sauces",
        foodId: "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
        image:
          "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
      },
      {
        text: "¼ teaspoon ground black pepper",
        quantity: 0.25,
        measure: "teaspoon",
        food: "black pepper",
        weight: 0.575,
        foodCategory: "Condiments and sauces",
        foodId: "food_b6ywzluaaxv02wad7s1r9ag4py89",
        image:
          "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg",
      },
    ],
    key: "824d5a75f05560cda479aa1deb464e7e",
  },
  {
    lable: "Broccoli-Rice Pilaf recipes",
    image:
      "https://edamam-product-images.s3.amazonaws.com/web-img/a1f/a1fa4de9031320eb10c270ab937e7ad5-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCID8807dP0hRqFgl0wMhM3eeIPVT0H8yFwB72tEJwaUK9AiAbHAdByAYeSvHEcnMVcxzcsA1DP4T7%2FzthuXOPRyb4firVBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDE4NzAxNzE1MDk4NiIMLvo0qzkDtSUxlBd%2FKqkEGGeHAyWL4Cf%2BESDpO%2FcPtCRdGuVIFvfwExb9olZTQhg7aBOz2%2FqbVLu2W74cAZUI6ZwW36MumeJ60jz7Hdj7emoyltbo7zw6lcb%2Bm1GVxiEJc8wLUongGsiCdqbhgVl9Yrd5PxoiyoxyRbNs6%2FQx9veyWEOcnHH38WP7aUCxsmpFdCwWkJ%2BRmPnBlkI%2B6dxa8mb4OaPUrxgvCZUGvkoPLVdcNUbYJBCwdGleY5PbshsP%2Bov9jsoFIFpPWjKKlb%2F4E2NrEBevwfhvrs6phrIWiI%2BH1bYhFTPxtnN78cWezqOAkdAhU9TygJS57iU7DEnJf4vdo%2FMQPRyEk9RraY%2BMFxe2a%2FoR0RtqJCAHQm2Dc0D3tPissffQDJHG86pPwNSE1wIPm7dHpnXorH9d0TTG4JGwFTJrjBkRgbmCwHHU8%2Fr%2F6%2BSgz7ehkwcU0QnxTV7Ifbs4FPltl%2FrOQ%2FwI6QuLpdK4tZcnis4K9iJeLXLHz5ra49deu2a8Lymjh1etDV%2FSynZhM4RK9o%2B7%2FyyD8ZaakIOvVVu94jsmIlbhsERCW9sxZYAv90DGX4f6CPYDzmZNgzim9ueLCLRorMPkJxwnfkuaB3WoOCGRfEnjqtVERD%2F%2BrD1CxXwIER%2F82r4ZMR%2F2%2BXvZpMO14KgJmAlo76C%2BfoweEU0RLx5YsSlVW2OvvYtdVZ%2Fqzz%2BkbQeqzi88qHy5CzGn3I0O%2BuWaeS%2FeKG7i1E3QL3q1TCHZtzCuh8WbBjqqASNpLGm1zC6foic2fSeK6lzV7ScMwXcSvsVCOC3fGskCF4YFchjqHvhlPqSQQyCrjxg7d0HkuxpFed1%2F6SfLBuvrte6keTvuh0RV%2B7YdQwC001pDjETmTPdEvp9it4ddoqMEU6s0jkRRxRaFvEZ0TTRjaW%2BibF%2Fkipp6IWWhHU1q%2BbodH2eunBKwbahaH%2B4wfcdeEyAXxEYuoppeffN9NHPoCFuuOmnMejQx&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221113T205701Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFK6Q3BCWI%2F20221113%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=38b7a27b1967c2785015a6d541cb195d47aeefb15229a48031264637820788c9",
    ingedients: [
      {
        text: "1 tbsp. olive oil",
        quantity: 1,
        measure: "tablespoon",
        food: "olive oil",
        weight: 13.5,
        foodCategory: "Oils",
        foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
        image:
          "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
      },
      {
        text: "1 onion",
        quantity: 1,
        measure: "<unit>",
        food: "onion",
        weight: 125,
        foodCategory: "vegetables",
        foodId: "food_bmrvi4ob4binw9a5m7l07amlfcoy",
        image:
          "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg",
      },
      {
        text: "kosher salt",
        quantity: 0,
        measure: null,
        food: "kosher salt",
        weight: 5.667,
        foodCategory: "Condiments and sauces",
        foodId: "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
        image:
          "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
      },
      {
        text: "pepper",
        quantity: 0,
        measure: null,
        food: "pepper",
        weight: 2.8335,
        foodCategory: "Condiments and sauces",
        foodId: "food_b6ywzluaaxv02wad7s1r9ag4py89",
        image:
          "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg",
      },
      {
        text: "1 clove garlic",
        quantity: 1,
        measure: "clove",
        food: "garlic",
        weight: 3,
        foodCategory: "vegetables",
        foodId: "food_avtcmx6bgjv1jvay6s6stan8dnyp",
        image:
          "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg",
      },
      {
        text: "1 c. long-grain white rice",
        quantity: 1,
        measure: "cup",
        food: "rice",
        weight: 195,
        foodCategory: "grains",
        foodId: "food_bpumdjzb5rtqaeabb0kbgbcgr4t9",
        image:
          "https://www.edamam.com/food-img/0fc/0fc9fa8a3e0276198d75b2e259068f8a.jpg",
      },
      {
        text: "1 bunch broccoli crowns (florets only)",
        quantity: 1,
        measure: "bunch",
        food: "broccoli",
        weight: 608,
        foodCategory: "vegetables",
        foodId: "food_aahw0jha9f8337ajbopx9aec6z7i",
        image:
          "https://www.edamam.com/food-img/3e4/3e47317a3dd54dc911b9c44122285df1.jpg",
      },
    ],
    key: "1418ea7586616609a1036f99ad8cabbd",
  },
  {
    lable: "Spicy Garlic Broccoli Rabe",
    image:
      "https://edamam-product-images.s3.amazonaws.com/web-img/23d/23da2f4376d30d0a144e8247c8476452-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIGZGvGYxlxd2Rb5WG9FWRPslXmnKkA0AGX1sVUOrEI6lAiEA9mS%2B6TJKplfHDEw4OV7wvE5%2B%2Fp2l9H8Zs1jDGzvsGWgq1QQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDAkK9bh9d2aL0Mt7HCqpBEDsbvOHL6CVHTzTGdYRq6JzxEk%2BVA6rlGoct7FH50DfVJGhPVb4Dz0ab1AVu2QXWAo9jccZ3vMULGJylID0SwIVK%2BrXcZsSY00YO0qbD87SoAaCqv4gA6o9IX4PxHsJi31xsVV%2FQIaLetcQAjoGbBHLg%2Fsbg0mMB0tZPjF4zXU3NJvujezWUrSb5yD4FIb%2BVwWrDzUD9Tehcla2y5s1q9iT7XU2ghJaWYoksf5qQWwehhE6PlQW%2BLXBQvxMx29ZiNgHbsKh7S8YzKCjI88t02KBzugofjKodeYSeHK0qmFJWZiltzrJrngIfJs%2FehSxx9XAZPX6yy1rJV2fy5QHza2pTVIm%2Fd6SkK%2BOsDALu4Gm%2FhofvZDNOvIGp3mPH4USor2JrGVH5RSSL76tqj9CaoiG4GyKLPtCl3hMS20OZXJrYlEEXVYbRNtNyqgQ3H5WD0tyJicC6148paLS8qdBcb0VBQkT%2B2wVEtLMlQ6TgKtGXMjS62znc4ELDLl7CYE0WB98pzONwmzgUXRh9eN6pRj6NvJLc1fce1BaX8CW%2Fxa9u9VF38tflWtRqFx6eS5VQRkpwkcM1juezmRAhKGoUwI7r%2BoZeGXMhk9kEX02fVpQDJ%2B5WbiGP2YVTVdcYSIdT1dT2KQva4JEzUEfSJYZjJn%2BYQbgDsKMJ9HlzPLUS%2B8%2FGCJ1vshjtGN4BJL1F3yuJeLRacBqzgtWnzig%2FuFm%2FtkFxFQedTMfMQowtYzFmwY6qQF5IhPLLlnV8NF4REZwFlPalkYK%2B3aGPofOrz%2FI8rF63JPu3w%2BhFb0W6ltf4UW0Qz7GB0gGLyg4utM2KyH8IgNgCKQSrWEYhGcHZ8tTKJCOUaeMaiBLD08Gv2T%2FCEZtARa9IO3dVrFkKzrFq7Ay%2BBMZLTlotDtatg0QuoiMEoOVJgKxlp17rEtjEJIrq9MA3VssCcAz6sjSUdSqDgEu9NommgxMyXEERT01&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221113T205733Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKNNOS2YE%2F20221113%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4017c78f35b66710efb24c9617a2f200485ed522e4637838e3704ad511d2f4ce",
    ingedients: [
      {
        text: "1½ lb. broccoli rabe",
        quantity: 1.5,
        measure: "pound",
        food: "broccoli rabe",
        weight: 680.388555,
        foodCategory: "vegetables",
        foodId: "food_blhjqxuagcrdf7bzsuuezbz813xc",
        image:
          "https://www.edamam.com/food-img/52a/52a2e62a7e6ca0963d1cab1f7cbc06f1.jpg",
      },
      {
        text: "2 tbsp. extra-virgin olive oil",
        quantity: 2,
        measure: "tablespoon",
        food: "extra-virgin olive oil",
        weight: 27,
        foodCategory: "Oils",
        foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
        image:
          "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
      },
      {
        text: "3 clove garlic",
        quantity: 3,
        measure: "clove",
        food: "garlic",
        weight: 9,
        foodCategory: "vegetables",
        foodId: "food_avtcmx6bgjv1jvay6s6stan8dnyp",
        image:
          "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg",
      },
      {
        text: "½ tsp. crushed hot red pepper flakes",
        quantity: 0.5,
        measure: "teaspoon",
        food: "hot red pepper flakes",
        weight: 0.38541666668621544,
        foodCategory: "vegetables",
        foodId: "food_bispmxiaijcuxcagex14mbhk2o48",
        image:
          "https://www.edamam.com/food-img/6cb/6cb8e4510251a322178f6e191b3a7b1b.jpeg",
      },
    ],
    key: "2afd3b0afa2ddfb5c4fdd41560354810",
  },
  {
    lable: "Tahini Roasted Broccoli",
    image:
      "https://edamam-product-images.s3.amazonaws.com/web-img/685/6855d139bdc76d6dcbe8a99e5ca39123-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIGZGvGYxlxd2Rb5WG9FWRPslXmnKkA0AGX1sVUOrEI6lAiEA9mS%2B6TJKplfHDEw4OV7wvE5%2B%2Fp2l9H8Zs1jDGzvsGWgq1QQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDAkK9bh9d2aL0Mt7HCqpBEDsbvOHL6CVHTzTGdYRq6JzxEk%2BVA6rlGoct7FH50DfVJGhPVb4Dz0ab1AVu2QXWAo9jccZ3vMULGJylID0SwIVK%2BrXcZsSY00YO0qbD87SoAaCqv4gA6o9IX4PxHsJi31xsVV%2FQIaLetcQAjoGbBHLg%2Fsbg0mMB0tZPjF4zXU3NJvujezWUrSb5yD4FIb%2BVwWrDzUD9Tehcla2y5s1q9iT7XU2ghJaWYoksf5qQWwehhE6PlQW%2BLXBQvxMx29ZiNgHbsKh7S8YzKCjI88t02KBzugofjKodeYSeHK0qmFJWZiltzrJrngIfJs%2FehSxx9XAZPX6yy1rJV2fy5QHza2pTVIm%2Fd6SkK%2BOsDALu4Gm%2FhofvZDNOvIGp3mPH4USor2JrGVH5RSSL76tqj9CaoiG4GyKLPtCl3hMS20OZXJrYlEEXVYbRNtNyqgQ3H5WD0tyJicC6148paLS8qdBcb0VBQkT%2B2wVEtLMlQ6TgKtGXMjS62znc4ELDLl7CYE0WB98pzONwmzgUXRh9eN6pRj6NvJLc1fce1BaX8CW%2Fxa9u9VF38tflWtRqFx6eS5VQRkpwkcM1juezmRAhKGoUwI7r%2BoZeGXMhk9kEX02fVpQDJ%2B5WbiGP2YVTVdcYSIdT1dT2KQva4JEzUEfSJYZjJn%2BYQbgDsKMJ9HlzPLUS%2B8%2FGCJ1vshjtGN4BJL1F3yuJeLRacBqzgtWnzig%2FuFm%2FtkFxFQedTMfMQowtYzFmwY6qQF5IhPLLlnV8NF4REZwFlPalkYK%2B3aGPofOrz%2FI8rF63JPu3w%2BhFb0W6ltf4UW0Qz7GB0gGLyg4utM2KyH8IgNgCKQSrWEYhGcHZ8tTKJCOUaeMaiBLD08Gv2T%2FCEZtARa9IO3dVrFkKzrFq7Ay%2BBMZLTlotDtatg0QuoiMEoOVJgKxlp17rEtjEJIrq9MA3VssCcAz6sjSUdSqDgEu9NommgxMyXEERT01&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221113T205759Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKNNOS2YE%2F20221113%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2706fbe4b59fc08385d6f8cba4133cc9f3deaf77c0afd409da59c802aecafe5c",
    ingedients: [
      {
        text: "2 tablespoons tahini, well stirred",
        quantity: 2,
        measure: "tablespoon",
        food: "tahini",
        weight: 30,
        foodCategory: "plant-based protein",
        foodId: "food_aa88tarawf1yl0bu5w3csaucrnx2",
        image:
          "https://www.edamam.com/food-img/eed/eed4bb62c2763575b73a8f05963073fb.jpg",
      },
      {
        text: "3 tablespoons fresh lemon juice, plus more to serve",
        quantity: 3,
        measure: "tablespoon",
        food: "lemon juice",
        weight: 45.7499999992266,
        foodCategory: "100% juice",
        foodId: "food_bglm6vxahuauteb0n6ynfbg9eryu",
        image:
          "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg",
      },
      {
        text: "2 large cloves garlic, minced",
        quantity: 2,
        measure: "clove",
        food: "garlic",
        weight: 10,
        foodCategory: "vegetables",
        foodId: "food_avtcmx6bgjv1jvay6s6stan8dnyp",
        image:
          "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg",
      },
      {
        text: "1/2 teaspoon kosher salt",
        quantity: 0.5,
        measure: "teaspoon",
        food: "kosher salt",
        weight: 2.4270833334564377,
        foodCategory: "Condiments and sauces",
        foodId: "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
        image:
          "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
      },
      {
        text: "Several grinds black pepper",
        quantity: 5,
        measure: "<unit>",
        food: "black pepper",
        weight: 1.5,
        foodCategory: "Condiments and sauces",
        foodId: "food_b6ywzluaaxv02wad7s1r9ag4py89",
        image:
          "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg",
      },
      {
        text: "2 tablespoons olive oil",
        quantity: 2,
        measure: "tablespoon",
        food: "olive oil",
        weight: 27,
        foodCategory: "Oils",
        foodId: "food_b1d1icuad3iktrbqby0hiagafaz7",
        image:
          "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
      },
      {
        text: "4 cups broccoli, cut into 1 1/2-inch florets",
        quantity: 4,
        measure: "cup",
        food: "broccoli",
        weight: 364,
        foodCategory: "vegetables",
        foodId: "food_aahw0jha9f8337ajbopx9aec6z7i",
        image:
          "https://www.edamam.com/food-img/3e4/3e47317a3dd54dc911b9c44122285df1.jpg",
      },
    ],
    key: "c2f2f7874763724b76c097fcb674bdcc",
  },
];
export default recipes;
