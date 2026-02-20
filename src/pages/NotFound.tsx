import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, ArrowRight, MapPin } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/20 blur-2xl rounded-full"></div>
            <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full p-4">
              <AlertTriangle className="h-12 w-12 text-white" />
            </div>
          </div>
        </div>

        {/* Error Code */}
        <div className="mb-4">
          <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Area Not Mapped
        </h2>

        {/* Description */}
        <p className="text-lg text-slate-300 mb-8">
          The location you're trying to access doesn't exist in our system. It may have been relocated or the path is incorrect.
        </p>

        {/* Attempted path */}
        <div className="mb-8 inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-2 text-sm text-slate-400">
          <MapPin className="h-4 w-4" />
          <span className="font-mono">{location.pathname}</span>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
          >
            Return Home
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-700/50 text-slate-100 rounded-lg font-semibold border border-slate-600/50 hover:bg-slate-700 transition-all duration-200"
          >
            Go to Dashboard
          </a>
        </div>

        {/* Footer help text */}
        <p className="mt-12 text-sm text-slate-500">
          Need help? Contact support or check our{" "}
          <a href="/" className="text-emerald-400 hover:text-emerald-300 underline">
            documentation
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
