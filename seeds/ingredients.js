
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, name: 'butterscotch topping' },
        { id: 2, name: 'soda water' },
        { id: 3, name: 'cream soda' },
        { id: 4, name: 'whipped cream' },
        { id: 5, name: 'caramel sauce' },
        { id: 6, name: 'pinch salt' },
        { id: 7, name: '9 inch pie crust' },
        { id: 8, name: 'golden syrup' },
        { id: 9, name: 'heavy cream' },
        { id: 10, name: 'bread crumbs' },
        { id: 11, name: 'lemon, zested' },
        { id: 12, name: 'lemon juice' },
        { id: 13, name: 'all-purpose flour' },
        { id: 14, name: 'salt' },
        { id: 15, name: 'lard' },
        { id: 16, name: 'cold water' },
        { id: 17, name: 'vegetable oil' },
        { id: 18, name: 'onion, finely diced' },
        { id: 19, name: 'carrots, diced (Optional)' },
        { id: 20, name: 'lean ground beef' },
        { id: 21, name: 'ground pork' },
        { id: 22, name: 'green onions, chopped' },
        { id: 23, name: 'salt and pepper to taste' },
        { id: 24, name: 'butter' },
        { id: 25, name: 'milk' },
        { id: 26, name: 'apple cider, divided' },
        { id: 27, name: 'fresh ginger, sliced' },
        { id: 28, name: 'cinnamon stick' },
        { id: 29, name: 'whole cloves' },
        { id: 30, name: 'brown sugar' },
        { id: 31, name: 'honey' },
        { id: 32, name: 'pumpkin puree' },
        { id: 33, name: 'white chocolate chips' },
        { id: 34, name: 'lemon drop candies' },
        { id: 35, name: 'butter, cubed, at room temperature' },
        { id: 36, name: 'packed brown sugar' },
        { id: 37, name: 'eggs' },
        { id: 38, name: 'maple syrup' },
        { id: 39, name: 'sour cream' },
        { id: 40, name: 'vanilla butter and nut flavoring' },
        { id: 41, name: 'pumpkin pie spice' },
        { id: 42, name: 'baking soda' },
        { id: 43, name: 'white sugar' },
        { id: 44, name: 'water' },
        { id: 45, name: 'active dry yeast' },
        { id: 46, name: 'olive oil' },
        { id: 47, name: 'kosher salt' },
        { id: 48, name: 'ricotta chese' },
        { id: 49, name: 'shredded mozzarella cheese' },
        { id: 50, name: 'sliced pepperoni' },
        { id: 51, name: 'chopped fresh parsley' },
        { id: 52, name: 'Italian seasoning' },
        { id: 53, name: 'black olives' },
        { id: 54, name: 'green bell pepper' },
        { id: 55, name: 'sliced fresh mushrooms' },
        { id: 56, name: 'semi-sweet chocolate chips' },
        { id: 57, name: 'peanut butter chips' },
        { id: 58, name: 'raw Spanish peanuts' },
        { id: 59, name: 'spiced rum' },
        { id: 60, name: 'butterscotch schnapps' },
        { id: 61, name: 'imitation butter flavoring' },
        { id: 62, name: 'can or bottle cream soda' },
        { id: 63, name: 'vanilla ice cream' },
        { id: 64, name: 'strawberry flavored Jell-O®' },
        { id: 65, name: 'white cake mix' },
        { id: 66, name: 'frozen strawberries, thawed' },
        { id: 67, name: 'butter' },
        { id: 68, name: 'confectioners\' sugar'},
        { id: 69, name: 'rutabagas diced'},
        { id: 70, name: 'Parmesan cheese'}
      ]);
    });
};
