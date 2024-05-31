import { QueryClient, QueryClientProvider } from "react-query";
import { Users } from "./Users";
import "./input.css";
const queryClient = new QueryClient();

export default function App() {
  console.log("started app");
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className="text-center mb-6 text-3xl font-bold">
        Ultramed User Dashboard
      </h1>
      <Users />
    </QueryClientProvider>
  );
}
