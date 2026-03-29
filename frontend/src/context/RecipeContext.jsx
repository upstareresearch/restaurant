import { createContext, use, useEffect, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const initialData = JSON.parse(localStorage.getItem("recipes")) || [
    {
      id: 1,
      category: "breakfast",
      chef: "Emily Johnson",
      desc: "A healthy and quick breakfast option to start your day.",
      image:
        "https://img.freepik.com/free-photo/oatmeal-porridge-with-raspberries-blueberries-almonds-bowl-wooden-table_123827-32361.jpg?ga=GA1.1.761869688.1749317979&semt=ais_hybrid&w=740",
      ingredients: "Oats Milk Honey Banana",
      instructions: "Mix oats with milk, add honey and top with banana slices.",
      title: "Oatmeal Delight",
    },
    {
      id: 2,
      category: "breakfast",
      chef: "Liam Smith",
      desc: "Crispy and golden brown pancakes with a touch of vanilla.",
      image:
        "https://shortgirltallorder.com/wp-content/uploads/2020/10/Chai-Vanilla-Pancakes-1-720x960.jpg",
      ingredients: "Flour Eggs Milk Sugar Vanilla",
      instructions:
        "Mix ingredients, cook on pan till golden, serve with syrup.",
      title: "Vanilla Pancakes",
    },
    {
      id: 3,
      category: "lunch",
      chef: "Olivia Williams",
      desc: "A hearty Italian pizza loaded with cheese and veggies.",
      image:
        "https://www.orchidsandsweettea.com/wp-content/uploads/2019/05/Veggie-Pizza-2-of-5-e1691215701129.jpg",
      ingredients: "Pizza base Tomato sauce Cheese Veggies",
      instructions: "Spread sauce on base add toppings bake till cheese melts.",
      title: "Veggie Pizza",
    },
    {
      id: 4,
      category: "lunch",
      chef: "Noah Brown",
      desc: "Spicy and flavorful chicken curry, perfect for lunch.",
      image:
        "https://www.foodandwine.com/thmb/f4uf4WXHz-waXLB_oqG-U1p4Y7A=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg",
      ingredients: "Chicken Onion Tomato Spices",
      instructions: "Cook chicken with onions tomatoes and spices till done.",
      title: "Spicy Chicken Curry",
    },
    {
      id: 5,
      category: "dinner",
      chef: "Ava Davis",
      desc: "A light and refreshing grilled salmon recipe.",
      image:
        "https://www.feastingathome.com/wp-content/uploads/2022/08/Grilled-Salmon-10-1024x1536.jpg",
      ingredients: "Salmon Lemon Olive oil Herbs",
      instructions: "Marinate salmon grill till cooked serve with lemon.",
      title: "Grilled Salmon",
    },
    {
      id: 6,
      category: "dinner",
      chef: "William Miller",
      desc: "Creamy and delicious pasta Alfredo perfect for dinner.",
      image:
        "https://www.licious.in/blog/wp-content/uploads/2020/12/Penne-Alfredo-600x600.jpg",
      ingredients: "Pasta Cream Garlic Parmesan",
      instructions: "Cookpasta prepare Alfredo sauce mix and serve hot.",
      title: "Pasta Alfredo",
    },
    {
      id: 7,
      category: "dessert",
      chef: "Sophia Wilson",
      desc: "Rich and creamy chocolate cake for sweet cravings.",
      image:
        "https://www.hersheyland.com/content/dam/hersheyland/en-us/recipes/recipe-images/2-hersheys-perfectly-chocolate-chocolate-cake-recipe-hero.jpg?im=Resize=(1920)",
      ingredients: "Flour Cocoa Sugar Eggs Butter",
      instructions: "Prepare batter bake in oven cool and serve.",
      title: "Chocolate Cake",
    },
    {
      id: 8,
      category: "dessert",
      chef: "James Moore",
      desc: "A classic vanilla ice cream treat for dessert lovers.",
      image:
        "https://www.theroastedroot.net/wp-content/uploads/2023/06/dairy-free-vanilla-ice-cream-8-600x900.jpg",
      ingredients: "Milk Cream Sugar Vanilla extract",
      instructions:
        "Mix ingredients churn in ice cream maker freeze and enjoy.",
      title: "Vanilla Ice Cream",
    },
    {
      id: 9,
      category: "drink",
      chef: "Isabella Taylor",
      desc: "A refreshing glass of homemade lemonade.",
      image:
        "https://sweetsandthankyou.com/wp-content/uploads/2024/05/Lemonade19-3.jpg",
      ingredients: "Lemon Sugar Water Mint",
      instructions: "Squeeze lemons mix with water and sugar add mint leaves.",
      title: "Classic Lemonade",
    },
    {
      id: 10,
      category: "drink",
      chef: "Benjamin Anderson",
      desc: "A creamy and delightful mango milkshake.",
      image:
        "https://tastyoven.com/wp-content/uploads/2022/06/mango-shake-3.jpeg",
      ingredients: "Mango Milk Sugar Ice cubes",
      instructions: "Blend all ingredients until smooth serve chilled.",
      title: "Mango Milkshake",
    },
  ];
  const [data, setData] = useState(initialData);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(data));
  }, [data]);

  return (
    <recipecontext.Provider value={{ data, setData }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;