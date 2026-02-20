import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle, ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-slate-900 px-4">
      {/* Content */}
      <div className="text-center max-w-2xl mx-auto">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="bg-emerald-600 rounded-full p-4">
            <AlertTriangle className="h-12 w-12 text-white" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-6xl md:text-7xl font-bold text-emerald-400 mb-2">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Area Not Mapped
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-300 mb-8">
          The location you're trying to access doesn't exist in our system. It may have been relocated or the path is incorrect.
        </p>

        {/* Attempted path */}
        <div className="mb-8 inline-block bg-slate-800 border border-slate-700 rounded px-4 py-2 text-sm text-slate-400">
          <span className="font-mono">{location.pathname}</span>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded font-semibold hover:bg-emerald-700 transition-colors"
          >
            Return Home
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-slate-700 text-slate-100 rounded font-semibold border border-slate-600 hover:bg-slate-600 transition-colors"
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
