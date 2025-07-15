import { Router, Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <Router base="/portfolio">
      <TooltipProvider>
        <Toaster />
        <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </TooltipProvider>
    </Router>
  );
}

export default App;
