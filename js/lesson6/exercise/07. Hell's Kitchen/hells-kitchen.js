function solve() {
   const inputElement = document.querySelector("#inputs > textarea")
   const inputText = inputElement.textContent
   const inputArr = inputText.split("","")
   

    const restaurants = {};

    for (const entry of inputArr) {
        const [restaurantName, workersStr] = entry.split(' - ');
        const workersArr = workersStr.split(', ');

        const workers = workersArr.map(w => {
        const [name, salary] = w.split(' ');
      return { name, salary: Number(salary) };
    });

    if (!restaurants[restaurantName]) {
      restaurants[restaurantName] = [];
    }

    // Добавяне на работниците към ресторанта
    restaurants[restaurantName] = restaurants[restaurantName].concat(workers);
  }

  let bestRestaurantName = '';
  let bestAvgSalary = 0;

  for (const name in restaurants) {
    const workers = restaurants[name];
    const total = workers.reduce((sum, w) => sum + w.salary, 0);
    const avg = total / workers.length;

    if (avg > bestAvgSalary) {
      bestAvgSalary = avg;
      bestRestaurantName = name;
    }
  }

  const bestWorkers = restaurants[bestRestaurantName]
    .sort((a, b) => b.salary - a.salary);

  // Извеждане
  console.log(`Най-добър ресторант: ${bestRestaurantName}`);
  console.log(`Средна заплата: ${bestAvgSalary.toFixed(2)}`);
  console.log(`Работници:`);

  for (const w of bestWorkers) {
    console.log(`- ${w.name}: ${w.salary}`);
  }
}

// 🔹 Примерен вход:


