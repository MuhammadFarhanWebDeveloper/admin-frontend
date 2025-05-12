import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-2">
      <div className="bg-primary-foreground p-4 rounded-lg md:col-span-2 xl:col-span-3">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-2 rounded-lg">
        <CardList title="Latest Transactions" />
      </div>

      <div className="bg-primary-foreground p-2 rounded-lg">
        <CardList title="Popular Content" />
      </div>

      <div className="bg-primary-foreground p-4 rounded-lg md:col-span-2 xl:col-span-2">
        <AppBarChart />
      </div>

      <div className="bg-primary-foreground p-2 rounded-lg">
        <AppPieChart />
      </div>
    </div>
  );
}
