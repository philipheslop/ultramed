import { QueryClient, QueryClientProvider } from "react-query";
import { Users } from "./Users";
import "./input.css";
const queryClient = new QueryClient();

export default function App() {
  console.log("started app");
  return (
    <QueryClientProvider client={queryClient}>
      <h1>App</h1>
      <Users />
    </QueryClientProvider>
  );
}
