import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MainPage } from "./components/pages/mainPage/mainPage";

export const App = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <MainPage />
        </QueryClientProvider>
    );
};
