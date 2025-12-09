// nothing
  const stocks = [
    { name: "TATA Steel", price: 155.25 },
    { name: "Reliance", price: 2540.40 },
    { name: "HDFC Bank", price: 1520.90 },
    { name: "Infosys", price: 1378.65 }
  ];

  const stockList = document.getElementById("stockList");

  function loadStocks() {
    stockList.innerHTML = "";
    stocks.forEach(s => {
      const div = document.createElement("div");
      div.textContent = `${s.name} - ₹${s.price}`;
      stockList.appendChild(div);
    });
  }

  loadStocks();

  // Investment calculator logic
  function calculateReturn() {
    const P = parseFloat(document.getElementById("amount").value);
    const r = parseFloat(document.getElementById("rate").value) / 100;
    const t = parseFloat(document.getElementById("years").value);

    if (!P || !r || !t) {
      document.getElementById("result").textContent = "Please fill all fields correctly!";
      return;
    }

    const A = P * Math.pow((1 + r), t);
    document.getElementById("result").textContent = `Future Value: ₹${A.toFixed(2)}`;
  }