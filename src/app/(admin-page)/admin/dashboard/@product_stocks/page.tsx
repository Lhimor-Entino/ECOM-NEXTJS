import { Tooltip } from "flowbite-react";
import { FaBox } from "react-icons/fa";
export default function Page() {
  const years: string[] = ["2024", "2023", "2022", "2021"];
  const stocks_colors: any[] = [
    { stock_count_min: 1, stock_count_max: 50, color: "#00bbcc" },
    { stock_count_min: 100, stock_count_max: 199, color: "#0099aa" },
    { stock_count_min: 200, stock_count_max: 299, color: "#006677" },
    { stock_count_min: 300, stock_count_max: 399, color: "#005566" },
    { stock_count_min: 400, stock_count_max: 499, color: "#004455" },
    { stock_count_min: 500, stock_count_max: 500, color: "#003344" },
  ];
  function getRandomStock() {
    // Generate random stock levels in intervals of 50 up to a maximum of 500
    const possibleStocks = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
    // Randomize the order of possible stocks
    return possibleStocks.sort(() => Math.random() - 0.5);
  }
  // Create a mapping of months to randomly shuffled stocks
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  function createRandomStocks() {
    const stockValues = getRandomStock();

    // Assign a random stock level to each month
    return months.map((month, index) => {
      // Randomly choose a stock level from the list of possible stocks
      const stock = stockValues[Math.floor(Math.random() * stockValues.length)];
      return { month, stock };
    });
  }

  const data: any[] = [
    {
      product_name: "Eggs xs",
      stocks: createRandomStocks(),
    },
    {
      product_name: "Milk XL",
      stocks: createRandomStocks(),
    },
    {
      product_name: "Bread L",
      stocks: createRandomStocks(),
    },
    {
      product_name: "Cheese M",
      stocks: createRandomStocks(),
    },
    {
      product_name: "Butter S",
      stocks: createRandomStocks(),
    },
  ];

  const getStockColor = (stock: number): string => {
    const findIndex = stocks_colors.findIndex(
      (sc) => stock >= sc.stock_count_min && stock <= sc.stock_count_max
    );

    if (findIndex >= 0) {
      return stocks_colors[findIndex].color;
    }
    return "";
  };
  return (
    <div className=" w-full bg-teal-50 rounded-sm p-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-teal-800 text-md font-bold">
            Stocks <span>(2024)</span>
          </p>
          <p className="text-teal-800 text-xs mt-1">Average total products</p>
        </div>
        <div className="flex">
          <select className="text-xs text-teal-800 p-1 border border-1 border-gray-200 rounded">
            {years.map((mth, index) => (
              <option key={index} className="text-xs text-teal-900">{mth}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1 mt-2">
        {stocks_colors.map((sc, index) => (
          <div key={index} className={`flex items-center min-w-3 justify-evenly `}>
            <span
              className={`w-2 h-2 rounded-sm`}
              style={{ backgroundColor: sc.color }}
            ></span>
            <p className="text-xs text-teal-900" style={{ fontSize: ".5rem" }}>
              {sc.stock_count_min} - {sc.stock_count_max}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-5">
        {data.map((dt, index) => (
          <div key={index} className="flex justify-between mt-2 items-center">
            <div>
              {" "}
              <p className="text-xs text-teal-800">{dt.product_name}</p>
            </div>

            <div className="flex justify-evenly w-52">
              {dt.stocks.map((st: any, index: any) => (
                <div key={index}>
                  <FaBox
                    className="text-xs "
                    style={{ color: getStockColor(st.stock) }}
                  />
                  {/* <p>{JSON.stringify(dt.)}</p> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-between items-center">
        <p className="text-transparent text-xs ">Months</p>
        <div className=" w-52 flex justify-between">
          {months.map((mt, index) => (
            <Tooltip key={index} title={mt} content={<p className="text-xs">{mt}</p>}>
              <p
                style={{ fontSize: ".4rem" }}
                className="text-teal-800 font-bold hover:cursor-pointer"
              >
                {mt}
              </p>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}
