import "./App.css";
import { AppContent } from "./AppContent";
import { AppProvider } from "./AppProvider";
import { ReactQueryProvider } from "./react-query-provider";
import { AppContextOtherProvider } from "./AppContextOtherProvider";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import { About } from "./About";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BlogProvider from "./BlogProvider";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BlogProvider>
        <AppProvider>
          <AppContextOtherProvider>
            <ReactQueryProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<AppContent />} />
                  <Route path="/about" element={<About />} />

                  {/* More routes */}
                </Routes>
              </BrowserRouter>
            </ReactQueryProvider>
          </AppContextOtherProvider>
        </AppProvider>
      </BlogProvider>
    </QueryClientProvider>
  );
}

type PlayerAction = "move" | "jump" | "attack" | "defend";

const VALID_ACTIONS: PlayerAction[] = ["move", "jump", "attack", "defend"];

// function isValidAction(action: PlayerAction) {
//   return VALID_ACTIONS.includes(action);
// }

export default App;
