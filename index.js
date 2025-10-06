// Recipe database
const recipes = {
    "fried rice": {
        ingredients: [
            "2 cups cooked rice",
            "2 tbsp oil",
            "1/2 cup chopped vegetables (carrot, peas, etc.)",
            "2 eggs (optional)",
            "2 tbsp soy sauce",
            "1 tsp salt",
            "1/2 tsp pepper",
            "2 cloves garlic, minced"
        ],
        instructions: [
            "Heat oil in a pan and sauté garlic until fragrant.",
            "Add vegetables and cook for 3-4 minutes.",
            "If using eggs, scramble them in the pan and cook.",
            "Add cooked rice and mix well.",
            "Pour soy sauce, add salt and pepper.",
            "Stir-fry everything for 2-3 minutes and serve hot."
        ]
    },
    "maggi": {
        ingredients: [
            "1 packet Maggi noodles",
            "1.5 cups water",
            "1 tsp oil",
            "Optional veggies (onion, tomato, peas)"
        ],
        instructions: [
            "Boil water in a pan.",
            "Add oil and vegetables if using, cook for 2 minutes.",
            "Add Maggi noodles and tastemaker.",
            "Cook for 2-3 minutes until water is absorbed.",
            "Serve hot."
        ]
    },
    "omelette": {
        ingredients: [
            "2 eggs",
            "Salt to taste",
            "1 chopped onion",
            "Chopped coriander",
            "1 chopped green chili",
            "1 tsp oil"
        ],
        instructions: [
            "Beat the eggs in a bowl.",
            "Add onion, coriander, chili, and salt.",
            "Heat oil in a pan, pour the egg mixture.",
            "Cook until both sides are golden.",
            "Serve hot with toast or chutney."
        ]
    },
    "pasta": {
        ingredients: [
            "2 cups pasta",
            "1 tbsp olive oil",
            "1/2 cup chopped onion",
            "1 cup pasta sauce",
            "Salt and pepper to taste",
            "Grated cheese (optional)"
        ],
        instructions: [
            "Boil pasta according to package instructions.",
            "Heat oil, sauté onion until golden.",
            "Add pasta sauce, salt, and pepper.",
            "Add boiled pasta and mix well.",
            "Top with cheese and serve hot."
        ]
    },
    "poha": {
        ingredients: [
            "1.5 cups poha (flattened rice)",
            "1 chopped onion",
            "1 green chili",
            "1/2 tsp mustard seeds",
            "Curry leaves",
            "Salt to taste",
            "Turmeric powder",
            "Lemon juice",
            "Coriander for garnish"
        ],
        instructions: [
            "Wash poha and drain water.",
            "Heat oil, add mustard seeds, curry leaves, green chili.",
            "Add onion and cook until translucent.",
            "Add turmeric and salt.",
            "Add poha and mix gently.",
            "Cook for 2-3 minutes. Add lemon juice and garnish with coriander."
        ]
    },
    "paneer butter masala": {
        ingredients: [
            "200g paneer",
            "2 tbsp butter",
            "1 cup tomato puree",
            "1/2 cup cream",
            "1 onion, finely chopped",
            "1 tsp ginger garlic paste",
            "Spices: garam masala, red chili, turmeric, salt"
        ],
        instructions: [
            "Heat butter in a pan, sauté onions and ginger garlic paste.",
            "Add tomato puree and spices. Cook until oil separates.",
            "Add cream and paneer cubes. Mix gently.",
            "Simmer for 5 minutes and serve hot with roti or rice."
        ]
    },
    "grilled cheese sandwich": {
        ingredients: [
            "2 slices of bread",
            "2 slices of cheese",
            "Butter"
        ],
        instructions: [
            "Butter one side of each bread slice.",
            "Place cheese between the unbuttered sides.",
            "Grill on a pan until both sides are golden brown.",
            "Serve hot."
        ]
    },
    "aloo paratha": {
        ingredients: [
            "1 cup wheat flour",
            "2 boiled potatoes",
            "1 chopped chili",
            "Spices: garam masala, cumin, salt",
            "Butter or ghee for cooking"
        ],
        instructions: [
            "Make dough with flour and water.",
            "Mash potatoes with spices and chili.",
            "Roll dough balls, stuff with potato, seal and roll again.",
            "Cook on a tawa with butter or ghee until golden brown.",
            "Serve with curd or pickle."
        ]
    },
    "upma": {
        ingredients: [
            "1 cup rava (semolina)",
            "1 chopped onion",
            "1 tsp mustard seeds",
            "Curry leaves",
            "Green chili",
            "2.5 cups water",
            "Salt to taste"
        ],
        instructions: [
            "Dry roast rava and keep aside.",
            "Heat oil, add mustard seeds, curry leaves, green chili, and onion.",
            "Add water and salt. Bring to boil.",
            "Slowly add rava while stirring to avoid lumps.",
            "Cook till water is absorbed. Serve hot."
        ]
    }
};

// DOM Elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultDiv = document.getElementById('recipe-result');

// Search functionality
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        resultDiv.innerHTML = "<p>Please enter a recipe name.</p>";
        return;
    }

    const recipe = recipes[query];

    if (!recipe) {
        resultDiv.innerHTML = `<p>Recipe for "<strong>${query}</strong>" not found.</p>`;
        return;
    }

    displayRecipe(query, recipe);
});

// Display recipe details
function displayRecipe(name, recipe) {
    let html = `<div class="recipe-title">${capitalize(name)}</div>`;

    html += `<div class="recipe-section">
                <strong>Ingredients:</strong>
                <ul>${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}</ul>
            </div>`;

    html += `<div class="recipe-section">
                <strong>Instructions:</strong>
                <ol>${recipe.instructions.map(step => `<li>${step}</li>`).join('')}</ol>
            </div>`;

    resultDiv.innerHTML = html;
}

// Capitalize first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
