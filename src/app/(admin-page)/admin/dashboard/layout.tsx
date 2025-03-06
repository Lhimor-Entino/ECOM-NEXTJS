export default function DashboardLayout({
  children,
  summary_panel,
  revenue_analytics,
  recent_orders,
  orders_mode,
  top_selling_products,
  product_stocks,
}: {
  children: React.ReactNode;
  summary_panel: React.ReactNode;
  revenue_analytics: React.ReactNode;
  recent_orders: React.ReactNode;
  orders_mode: React.ReactNode;
  top_selling_products: React.ReactNode;
  product_stocks: React.ReactNode;
}) {
  return (
    <div className="flex flex-col pr-4 pl-2">
      {/* <div className="flex justify-between">
        <p className="font-bold text-teal-800 text-xl">Dashboard</p>
        <div className="flex items-center w-1/6 justify-end">
          <TbSettings2 className="text-teal-800 text-4xl mr-2 hover:cursor-pointer hover:bg-teal-100 p-2 rounded-full" />
          <TiMessages className="text-teal-800 text-4xl mr-2 hover:cursor-pointer hover:bg-teal-100 p-2 rounded-full" />
          <RiNotification2Line className="text-teal-800 text-4xl hover:cursor-pointer hover:bg-teal-100 p-2 rounded-full" />
        </div>
      </div> */}

      <div className=" grid grid-cols-[1fr,300px] gap-4 mt-3">
        <div className="flex flex-col">
          <div>{summary_panel}</div>
          <div>{revenue_analytics}</div>
          <div>{recent_orders}</div>
        </div>

        <div className="flex flex-col">
          <div>{orders_mode}</div>
          <div className="mt-3">{top_selling_products}</div>
          <div className="mt-3">{product_stocks}</div>
        </div>
        {/* <div>{children}</div> */}
      </div>
    </div>
  );
}
