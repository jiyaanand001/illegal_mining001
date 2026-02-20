import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, ArrowRight, Home, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden flex items-center justify-center">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan/5 blur-3xl opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Icon with pulse */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
            <div className="relative bg-primary/10 border border-primary/30 rounded-full p-6">
              <AlertTriangle className="h-16 w-16 text-primary animate-pulse-glow" />
            </div>
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter mb-2 bg-gradient-to-b from-primary to-primary/60 bg-clip-text text-transparent">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Area Not Mapped
        </h2>

        {/* Subheading */}
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          The location you're trying to access doesn't exist in our system. This area may be outside monitored zones or the path has been updated.
        </p>

        {/* Attempted path display */}
        <div className="mb-10 inline-block glass-card px-6 py-3">
          <p className="text-xs text-muted-foreground mb-1">Attempted Path</p>
          <p className="font-mono text-sm text-foreground truncate max-w-xs">{location.pathname}</p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            className="gap-2"
            onClick={() => window.location.href = '/'}
          >
            <Home className="h-4 w-4" />
            Return Home
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.location.href = '/dashboard'}
          >
            <ArrowRight className="h-4 w-4" />
            Go to Dashboard
          </Button>
        </div>

        {/* Help section */}
        <div className="border-t border-border/50 pt-8 mt-8">
          <div className="inline-flex items-center gap-2 text-muted-foreground mb-4">
            <HelpCircle className="h-4 w-4" />
            <span className="text-sm">Still need help?</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Contact our support team at{" "}
            <a href="mailto:support@satguard.ai" className="text-primary hover:text-primary/80 underline transition-colors">
              support@satguard.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
