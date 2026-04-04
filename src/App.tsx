import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "@/pages/not-found";
import MapPage from "@/pages/MapPage";
import RegionsPage from "@/pages/RegionsPage";
import HandbookPage from "@/pages/HandbookPage";

const queryClient = new QueryClient();

const navLinks = [
  { href: "/", label: "World Map" },
  { href: "/regions", label: "Regions" },
  { href: "/handbook", label: "Handbook" },
];

function NavBar() {
  const [location] = useLocation();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
      style={{
        background: "linear-gradient(180deg, rgba(15,10,5,0.98) 0%, rgba(15,10,5,0.9) 100%)",
        borderBottom: "1px solid rgba(180,140,60,0.2)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Brand */}
      <Link href="/">
        <div className="flex items-center gap-3 cursor-pointer group">
          <span
            className="text-xl font-bold"
            style={{ fontFamily: "'Cinzel Decorative', serif", color: "hsl(40,70%,52%)" }}
          >
            Aetherra
          </span>
          <span
            className="text-xs tracking-widest opacity-50 group-hover:opacity-70 transition-opacity"
            style={{ fontFamily: "'Cinzel', serif", color: "rgba(180,140,60,0.8)" }}
          >
            VEYL
          </span>
        </div>
      </Link>

      {/* Nav links */}
      <div className="flex items-center gap-1">
        {navLinks.map(({ href, label }) => {
          const isActive = location === href;
          return (
            <Link key={href} href={href}>
              <button
                className="px-4 py-1.5 rounded text-xs transition-all"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: isActive ? "hsl(40,70%,52%)" : "rgba(180,140,60,0.5)",
                  background: isActive ? "rgba(180,140,60,0.1)" : "transparent",
                  border: isActive ? "1px solid rgba(180,140,60,0.25)" : "1px solid transparent",
                }}
                data-testid={`nav-${label.toLowerCase().replace(" ", "-")}`}
              >
                {label}
              </button>
            </Link>
          );
        })}
      </div>

      {/* Right side decor */}
      <div
        className="text-xs tracking-widest"
        style={{ color: "rgba(180,140,60,0.3)", fontFamily: "'Cinzel', serif" }}
      >
        DM REFERENCE
      </div>
    </nav>
  );
}

function Router() {
  return (
    <>
      <NavBar />
      <div className="pt-12">
        <Switch>
          <Route path="/" component={MapPage} />
          <Route path="/regions" component={RegionsPage} />
          <Route path="/handbook" component={HandbookPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
