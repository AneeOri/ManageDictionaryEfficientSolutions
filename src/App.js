import "./styles.css";

export default function App() {
  function cakes(recipe, available) {
    return Object.keys(recipe).reduce(function (val, ingredient) {
      return Math.min(
        Math.floor(available[ingredient] / recipe[ingredient] || 0),
        val
      );
    }, Infinity);
  }

  const cakes2 = (needs, has) =>
    Math.min(
      ...Object.keys(needs).map((key) => Math.floor(has[key] / needs[key] || 0))
    );

  function cakes3(recipe, available) {
    var numCakes = [];

    for (var key in recipe) {
      if (recipe.hasOwnProperty(key)) {
        if (key in available) {
          numCakes.push(Math.floor(available[key] / recipe[key]));
        } else {
          return 0;
        }
      }
    }
    return Math.min.apply(null, numCakes);
  }

  function cakes4(recipe, available) {
    return Math.min(
      ...Object.keys(recipe).map((e) => (available[e] / recipe[e]) >> 0)
    );
  }

  function cakes5(recipe, available) {
    let result = Infinity;

    for (let x in recipe) {
      result = Math.min(Math.floor(available[x] / recipe[x]), result);
    }

    return result || 0;
  }

  function cakes6(recipe, supplies) {
    var n = [];
    for (var key in recipe)
      if (key in supplies) n.push(Math.floor(supplies[key] / recipe[key]));
      else return 0;
    return Math.min.apply(Math, n);
  }

  function cakes77(recipe, available) {
    return Object.keys(recipe).reduce(function (prev, key) {
      var need = recipe[key];
      var avail = available[key];
      return Math.min(prev, avail ? Math.floor(avail / need) : 0);
    }, Infinity);
  }

  return (
    <div className="App">
      <input />
    </div>
  );
}
