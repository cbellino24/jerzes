const MENU = [
  {
    id: "specials",
    title: "Daily Specials",
    note: "Specials are served as published on jerzes.com. Monday night wings are dine-in only, with purchase of a beverage.",
    items: [
      { name: "Monday — Patty Melt", desc: "An 8oz burger grilled to perfection, topped with caramelized onions, melted Swiss cheese and 1000 island dressing. Served on toasted marble rye bread.", price: "11.95", tag: "All day" },
      { name: "Monday — Reuben", desc: "An Omaha original — slow-roasted corned beef, served up on marble rye bread and topped with sauerkraut and Swiss cheese.", price: "11.95", tag: "All day" },
      { name: "Monday Night Wings", desc: "50¢ jumbo or boneless wings smothered in your choice of signature sauces, with the purchase of a drink.", price: "0.50", tag: "After 5pm — Dine-in" },
      { name: "Monday Night Pitchers", desc: "$6 pitchers with Monday night wings.", price: "6.00", tag: "After 5pm — Dine-in" },
      { name: "Tuesday — 8oz Aged Prime Rib", desc: "Certified Angus prime rib aged to perfection, served with fries.", price: "17.95", tag: "All day" },
      { name: "Tuesday — 10oz Aged Prime Rib", desc: "Served with baked potato, veggies, hot au jus and creamy horseradish.", price: "19.95", tag: "All day" },
      { name: "Tuesday — 16oz Aged Prime Rib", desc: "A larger cut of our famous prime rib, served with baked potato and veggies.", price: "28.95", tag: "All day" },
      { name: "Tuesday — Country Fried Steak", desc: "Our homemade favorite served with mashed potatoes & corn. Your choice of white or brown gravy.", price: "10.50", tag: "All day" },
      { name: "Wednesday — Hot Roast Beef Sandwich", desc: "Hot roast beef on top of mashed potatoes and Rotella's bread, smothered in beef gravy.", price: "8.95", tag: "All day" },
      { name: "Wednesday — Beef Taco Basket", desc: "Three tacos with your choice of soft, hard, or fried flour, filled with meat, cheese, lettuce and tomato.", price: "6.95", tag: "All day" },
      { name: "Wednesday — Chicken Taco Basket", desc: "Three tacos with your choice of soft, hard, or fried flour.", price: "7.50", tag: "All day" },
      { name: "Wednesday — Chips & Guacamole", desc: "", price: "5.99", tag: "All day" },
      { name: "Wednesday Night Tacos", desc: "Your choice of soft, hard, or fried flour filled with meat, cheese, lettuce and tomato.", price: "1.50", tag: "After 5pm — Dine-in" },
      { name: "Wednesday Night Margaritas", desc: "$1.99 jumbo well margaritas. $4.95 margarita pitchers. $2 domestic pints.", price: "1.99", tag: "After 5pm — Dine-in" },
      { name: "Fiesta Wednesday — Beef Burrito", desc: "", price: "7.95", tag: "After 5pm — Dine-in" },
      { name: "Fiesta Wednesday — El Pollo Loco Burrito", desc: "", price: "8.95", tag: "After 5pm — Dine-in" },
      { name: "Fiesta Wednesday — Beef Enchiladas", desc: "", price: "8.95", tag: "After 5pm — Dine-in" },
      { name: "Fiesta Wednesday — Chicken Enchiladas", desc: "", price: "8.95", tag: "After 5pm — Dine-in" },
      { name: "Fiesta Wednesday — Carne Asada Tacos", desc: "", price: "10.95", tag: "After 5pm — Dine-in" },
      { name: "Fiesta Wednesday — Shrimp Tacos", desc: "", price: "8.95", tag: "After 5pm — Dine-in" },
      { name: "Thursday — Hot Turkey Sandwich", desc: "Hot turkey on top of mashed potatoes and Rotella's bread, smothered in turkey gravy.", price: "9.95", tag: "All day" },
      { name: "Thursday — 8oz Aged Prime Rib & Fries", desc: "Certified Angus prime rib aged to perfection.", price: "17.95", tag: "All day" },
      { name: "Thursday — 10oz Aged Prime Rib", desc: "Served with baked potato and veggies.", price: "19.95", tag: "All day" },
      { name: "Thursday — 16oz Aged Prime Rib", desc: "A larger cut, served with baked potato and veggies.", price: "28.95", tag: "All day" },
      { name: "Friday — Grilled Cheese & Tomato Soup", desc: "", price: "6.95", tag: "All day" },
      { name: "Fri & Sat — 10oz N.Y. Strip & Fries", desc: "Grilled New York Strip aged to perfection.", price: "12.95", tag: "All day" },
      { name: "Fri & Sat — 10oz N.Y. Strip Dinner", desc: "Served with baked potato and veggies.", price: "14.95", tag: "All day" },
      { name: "Sunday Burger Bash — Stellar", desc: "", price: "9.95", tag: "All day" },
      { name: "Sunday Burger Bash — Big Ass Burger", desc: "", price: "12.95", tag: "All day" },
      { name: "Sunday Burger Bash — Trump Burger", desc: "", price: "12.75", tag: "All day" },
      { name: "Sunday Burger Bash — Ables Burger", desc: "", price: "3.99", tag: "All day" }
    ]
  },
  {
    id: "appetizers",
    title: "Appetizers",
    note: "Come back Monday nights after 5pm for wings at just 50¢ each with the purchase of a beverage.",
    items: [
      { name: "Appetizer Sampler Platter", desc: "Serves 4. Cheesy garlic bites, boneless and traditional wings, crispy onion rings, golden fried mushrooms, celery and carrots. Choose 3 sauces from ranch, bleu cheese, teriyaki, BBQ, Buffaque, mild, medium, hot, habanero, sweet chili, garlic parm, queso or marinara. No substitutions.", price: "23.95" },
      { name: "Traditional Wings", desc: "Fresh, never frozen. Naked, teriyaki, BBQ, sweet chili, garlic parm, mild, medium, hot, habanero, Buffaque, Asian sesame, spicy garlic, mango habanero or lemon pepper.", price: "14.95" },
      { name: "Boneless Wings", desc: "Meaty boneless wings with the same sauce list as traditional.", price: "13.95" },
      { name: "Fried Pickles", desc: "Crunchy dill pickles sliced, breaded, fried and served with our homemade ranch dressing.", price: "11.95" },
      { name: "Cheese Curds", desc: "Lightly breaded white cheddar cheese curds. Served with marinara or choice of sauce.", price: "10.95" },
      { name: "Cheese Sticks", desc: "Lightly battered, deep-fried mozzarella with marinara sauce.", price: "11.95" },
      { name: "Onion Rings", desc: "Jumbo breaded onion rings fried to a crispy golden brown.", price: "8.95" },
      { name: "Golden Fried Mushrooms", desc: "Lightly breaded fried mushrooms served with ranch or yellow cheese sauce.", price: "10.95" },
      { name: "Garlic Bread Bites", desc: "Garlic-buttered ciabatta bread, toasted and served with marinara sauce.", price: "6.75", extra: "With cheese 8.75" },
      { name: "Chips & Salsa", desc: "Crispy deep-fried corn tortilla chips with homemade medium salsa — or hot, if you think you're tough enough.", price: "5.95" },
      { name: "Chips & Cheese", desc: "Hand-cut chips with melted cheese.", price: "5.50", extra: "Queso 8.75 — Beefy salsa grande queso, aka The Sullivan Special 10.95" },
      { name: "Nachos Grande", desc: "Homemade corn chips with melted cheddar and jack, beefy chili, jalapeños, tomatoes, black olives, shredded lettuce and sour cream. Homemade salsa on the side.", price: "13.95" },
      { name: "Nachos Queso Grande", desc: "Beefy salsa queso poured over crunchy corn chips, topped with tomatoes, jalapeños and sour cream. Homemade salsa on the side.", price: "13.95" },
      { name: "Shrimp Havarti", desc: "Six succulent shrimp smothered in Havarti with garlic and butter. Served with a roll.", price: "11.95" },
      { name: "Shrimp Cocktail", desc: "Three ounces of freshly cooked and chilled shrimp with homemade cocktail sauce. Have it grilled.", price: "7.99", extra: "With $20 keno play 3.99" },
      { name: "Basket of Homemade French Fries", desc: "Hand-cut daily with no added preservatives.", price: "5.95", extra: "Chili cheese fries 8.95" },
      { name: "Basket of Tots, Waffle Fries or Sweet Potato Fries", desc: "Choose from golden tots, crunchy waffle fries or thin sweet potato fries.", price: "7.95" },
      { name: "Sliders", desc: "Beef, pork tenderloin, or crispy chicken. Three to a basket. Add cheese +1: American, cheddar, Swiss, pepper jack, Monterey jack, Velveeta, mozzarella, provolone or Havarti.", price: "9.95" },
      { name: "Quesadilla", desc: "A 12-inch flour tortilla with cheddar & jack, tomatoes, onions and jalapeños. Cheese, seasoned ground beef, or diced grilled chicken. Salsa and sour cream on the side.", price: "9.95", extra: "Beef or chicken 11.95" },
      { name: "Breaded Chicken Strips", desc: "12 oz of meaty chicken strips served with your choice of sauce for dipping.", price: "11.95" }
    ]
  },
  {
    id: "salads",
    title: "Soups & Salads",
    note: "Salad add-ons: 1.5 oz cold shrimp 3.95 — 3 oz fried shrimp 3.95 — 1.5 oz grilled shrimp 3.95 — 6 oz grilled chicken 3.95 — 6 oz breaded chicken 3.95 — 4 oz baked salmon 6.99 — 2 oz sliced avocado 2.50. Dressings: ranch, honey French, 1000 island, bleu cheese, Allison House sweet & spicy Italian, lite Italian, oil & vinegar, honey mustard, Dorothy Lynch.",
    items: [
      { name: "Soup of the Day", desc: "Ask your server for today's freshly made soup.", price: "5.95", extra: "Bowl 8.95" },
      { name: "Chili", desc: "Homemade spicy chili with tons of beef and beans.", price: "5.95", extra: "Bowl 8.95" },
      { name: "Jerzes Salad", desc: "Fresh romaine and iceberg lettuce, tomatoes, red onions, carrots, seasoned croutons and shredded cheddar jack cheese.", price: "8.95" },
      { name: "Caesar Salad", desc: "Chopped romaine, creamy Caesar dressing, seasoned croutons and shredded Parmesan.", price: "7.95" },
      { name: "Sirloin Caesar Salad", desc: "Chopped romaine, 6 oz of sirloin, creamy Caesar dressing, seasoned croutons and shredded Parmesan.", price: "14.95" },
      { name: "Amazing House Salad", desc: "Rows of baby arugula, diced marinated tomatoes, couscous, sweet corn, a raisin pepitas mixture, and shaved smoked salmon or diced grilled chicken. Creamy basil buttermilk dressing on the side.", price: "10.95" },
      { name: "Taco Salad", desc: "Seasoned ground beef on crisp lettuce with shredded cheese and diced tomatoes. Homemade salsa (regular or hot), sour cream, and dressing of your choice.", price: "10.95", extra: "Diced grilled chicken 11.95" },
      { name: "Side Salad", desc: "Crisp lettuce topped with shredded cheese and diced tomato.", price: "3.95" }
    ]
  },
  {
    id: "handhelds",
    title: "Dogs, Flats & Wraps",
    note: "All dogs and wraps come with your choice of one side. Upgrade to a signature side for $1 more.",
    items: [
      { name: "Gigantic Chili Dog", desc: "A 10-inch half-pound all-beef dog on a Rotella bun with two slices of American cheese, beefy chili, sauerkraut, pepperoncini, red onions and mustard.", price: "16.95" },
      { name: "Big Red Fairbury Dog", desc: "The famous red dog served with relish and onion. The perfect fuel for Husker Nation.", price: "8.75", extra: "With chili 9.75" },
      { name: "Margherita Flatbread", desc: "Fresh ripe tomatoes, vine-picked basil, cilantro, a drizzle of balsamic vinegar and mozzarella.", price: "11.95" },
      { name: "California Chicken Flatbread", desc: "Chicken, crispy bacon, red peppers and avocado drizzled with chipotle aioli.", price: "15.95" },
      { name: "Philly Wrap", desc: "Everything you'd expect from our Philly, on shredded lettuce in a soft tortilla. Sub diced grilled chicken at the same price.", price: "13.95" },
      { name: "BLTA Wrap", desc: "Crispy bacon, green leaf lettuce, red tomato and diced avocado with mayo. Ask for it on toast if you'd rather.", price: "12.95" },
      { name: "Shrimp Wrap", desc: "Shrimp cocktail mixed with onions, tomatoes, shredded iceberg and Parmesan in a tortilla with seafood mayo.", price: "13.95" },
      { name: "Chipotle Chicken Wrap", desc: "Grilled or breaded chicken with chipotle peppers, green leaf lettuce, onion, tomato and shredded cheddar jack.", price: "13.95" },
      { name: "Ranch Chicken Wrap", desc: "Breaded or grilled chicken with shredded cheddar jack, iceberg lettuce, diced tomatoes and ranch.", price: "12.95" }
    ]
  },
  {
    id: "burgers",
    title: "Steak Burgers",
    note: "8 oz of fresh, never frozen, ground New York & ribeye steak grilled to order. Substitute a turkey burger, grilled chicken breast or breaded chicken at the same price. All burgers and chicken come with one side. Upgrade to a signature side for $1 more.",
    items: [
      { name: "The Original", desc: "Plain and simple for the burger purist.", price: "11.95" },
      { name: "Big Cheese", desc: "Two melted slices of American, cheddar, Swiss, pepper jack, Monterey jack, Velveeta, mozzarella, provolone or Havarti.", price: "12.95" },
      { name: "Balla", desc: "Two-fisted burger with mayo, ketchup, lettuce, tomato, pickle, onion and American cheese. Special orders don't upset us.", price: "12.95" },
      { name: "Swiss Mushroom", desc: "A generous topping of sautéed mushrooms and melted Swiss cheese. A Jerzes favorite.", price: "13.95" },
      { name: "Tex-Mex", desc: "Kicked up with beefy chili, cheddar cheese, jalapeños and diced onions.", price: "13.95" },
      { name: "Cowboy Burger", desc: "Honey-cured bacon, onion straws, onion ring, jalapeños, BBQ sauce and cheddar on our original burger.", price: "15.95" },
      { name: "Smokey Mountain", desc: "BBQ sauce, Canadian bacon, smoked bacon and Monterey jack.", price: "15.95" },
      { name: "Breakfast", desc: "Two slices of honey-cured bacon, a fried egg and American cheese on our original burger.", price: "15.95" },
      { name: "Turkey", desc: "Lean ground turkey with just the right spice. Served with sweet potato fries.", price: "12.95" }
    ]
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    note: "All sandwiches come with your choice of one side. Upgrade to a signature side for $1 more.",
    items: [
      { name: "Reuben", desc: "An Omaha original. Slow-roasted corned beef on marble rye with sauerkraut, 1000 island and Swiss.", price: "14.95" },
      { name: "Philly Cheesesteak", desc: "Thinly sliced NY strip, grilled green peppers, red peppers, mushrooms and onions with provolone on a Rotella hoagie. Sub diced grilled chicken at the same price.", price: "14.95" },
      { name: "French Dip", desc: "6 oz of thinly sliced prime rib with grilled onions and provolone on a hoagie.", price: "14.95" },
      { name: "Pork Tenderloin", desc: "A mammoth Fareway pork tenderloin, hand-breaded and fried, overflowing on a Rotella bun.", price: "11.50" },
      { name: "Texas Toast Grilled Cheese", desc: "Velveeta smothered between two pieces of grilled Rotella Texas toast.", price: "7.95" }
    ]
  },
  {
    id: "dinner",
    title: "Dinner",
    note: "1st & 10: upgrade to a signature side for $1 more. We are not responsible for medium-well or well-done steaks or ribeyes. Sirloin is served with one side; most other dinners include two.",
    items: [
      { name: "Sirloin Steak", desc: "8 oz sirloin, aged 28 days, served with one side.", price: "16.95" },
      { name: "New York Strip Steak", desc: "10 oz center hand-cut NY strip, wet aged here for 28 days, with two sides.", price: "19.95" },
      { name: "Whiskey New York Strip", desc: "Our aged NY strip with whiskey marinade. Please allow an additional 15 minutes. Two sides.", price: "20.95" },
      { name: "Ribeye Steak", desc: "10 oz of hand-cut ribeye, aged here for 28 days, with two sides.", price: "23.95" },
      { name: "Whiskey Ribeye", desc: "Whiskey marinade. Please allow an additional 15 minutes. Two sides.", price: "24.95" },
      { name: "Grilled Chicken", desc: "7 oz chicken breast, seasoned and grilled, with two sides. Whiskey marinade +1.", price: "12.95" },
      { name: "Chicken Strips", desc: "A half pound of meaty chicken strips with dipping sauce and two sides.", price: "14.95" },
      { name: "Battered Gulf Shrimp", desc: "6 oz jumbo shrimp, deep-fried, with homemade cocktail sauce and two sides.", price: "15.95" },
      { name: "Grilled Salmon", desc: "8 oz salmon fillets cooked to flaky perfection, with two sides.", price: "19.95" },
      { name: "Spaghetti & Meatballs", desc: "House-made pasta served with garlic bread.", price: "13.95" }
    ]
  },
  {
    id: "pizza",
    title: "Pizza & Lavosh",
    note: "Thick, thin, or lavosh crust. Ticket times may be longer on weekends and game days. Build-your-own starts with tomato basil red sauce and mozzarella. Veggie toppings: small & lavosh 99¢, jumbo 1.99. Meat toppings: small & lavosh 1.99, jumbo 2.99.",
    items: [
      { name: "Build Your Own", desc: "One topping. Traditional or thin crust on 12\" and 16\"; lavosh is cracker-thin.", price: "11.25", extra: "Jumbo 16.95 — Lavosh 12.95" },
      { name: "Ultimate Meat Lovers", desc: "Tomato basil red sauce with Italian sausage, applewood smoked bacon, ground beef, Canadian bacon, mozzarella and pepperoni.", price: "16.95", extra: "Jumbo 24.95 — Lavosh 16.95" },
      { name: "The Combo", desc: "Tomato basil red sauce, sausage, mushrooms, black olives, yellow onions, green peppers, pepperoni and mozzarella.", price: "16.95", extra: "Jumbo 23.95 — Lavosh 16.95" },
      { name: "BBQ Chicken", desc: "BBQ pizza sauce, all-white-meat chicken, red onions, diced tomatoes and mozzarella.", price: "16.95", extra: "Jumbo 24.95 — Lavosh 16.95" },
      { name: "Veggie", desc: "Tomato basil red sauce, seasonal vegetable mix, yellow onions, diced tomatoes and mozzarella.", price: "16.95", extra: "Jumbo 22.95 — Lavosh 16.95" }
    ]
  },
  {
    id: "desserts",
    title: "Desserts",
    note: "Post game.",
    items: [
      { name: "Brownie Sundae", desc: "A warm chocolate brownie with two scoops of vanilla ice cream, chocolate sauce and whipped cream.", price: "6.95" },
      { name: "Apple Cobbler", desc: "Sliced apples with a biscuit topping, served with warm vanilla ice cream.", price: "8.95" },
      { name: "Churro Fries", desc: "Crispy churro fries rolled in cinnamon sugar, served with chocolate sauce.", price: "7.95" },
      { name: "Chocolate Chip Cookie à la Mode", desc: "A bakery-style cookie with vanilla ice cream.", price: "4.95", extra: "Without ice cream 3.75" },
      { name: "Root Beer Float", desc: "Two scoops of vanilla ice cream in a mug of ice-cold root beer.", price: "3.75", extra: "With $20 in keno play 99¢" }
    ]
  },
  {
    id: "sides",
    title: "Sides",
    note: "Prices shown are à la carte.",
    items: [
      { name: "Mama's Homemade Mashed Potatoes & Gravy", desc: "", price: "2.95" },
      { name: "French Fries", desc: "", price: "2.95" },
      { name: "Mexican Rice", desc: "", price: "2.95" },
      { name: "White Rice", desc: "", price: "2.95" },
      { name: "Grilled Vegetables", desc: "", price: "2.95" },
      { name: "Baked Potato", desc: "", price: "2.95" },
      { name: "Tater Tots", desc: "", price: "3.95" },
      { name: "Mac & Cheese", desc: "", price: "3.95" },
      { name: "Coleslaw", desc: "", price: "3.95" },
      { name: "Cottage Cheese", desc: "", price: "3.95" },
      { name: "Waffle Fries", desc: "Signature side.", price: "3.95" },
      { name: "Sweet Potato Fries", desc: "Signature side.", price: "3.95" },
      { name: "Onion Rings", desc: "Signature side.", price: "4.95" },
      { name: "Mama's Loaded Mashed Potatoes", desc: "Signature side.", price: "4.99" },
      { name: "Loaded Baked Potato", desc: "Signature side.", price: "4.95" },
      { name: "Cup of Soup", desc: "", price: "5.95" },
      { name: "Cup of Chili", desc: "", price: "5.95" },
      { name: "Side Salad", desc: "", price: "3.95" },
      { name: "Caesar Side Salad", desc: "Signature side.", price: "5.95" }
    ]
  },
  {
    id: "drinks",
    title: "Drinks",
    note: "Time Out fountain drinks include free refills. Over twenty local and international beers on tap and dozens more by the bottle, plus a full liquor and wine selection.",
    items: [
      { name: "Time Out Fountain", desc: "Coke, Diet Coke, Coke Zero Sugar, Sprite, Pibb Xtra, Barq's Root Beer, Mello Yello, Fanta Orange, Minute Maid Lemonade.", price: "2.99" }
    ]
  }
];
