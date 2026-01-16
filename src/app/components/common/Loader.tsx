import React from "react";

// const Loader: React.FC = () => {
//   return (
//     <div className="flex items-center justify-center min-h-75">
//       <div className="flex flex-col items-center gap-4">
//         {/* Spinner */}
//         <div className="w-10 h-10 border-4 border-slate-300 border-t-slate-800 rounded-full animate-spin" />

//         {/* Text */}
//         <p className="text-sm text-slate-500">
//           Loading dashboard...
//         </p>
//       </div>
//     </div>
//   );
// };
const Loader: React.FC = () => {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-6 bg-slate-200 rounded w-1/3" />
      <div className="h-20 bg-slate-200 rounded" />
      <div className="h-20 bg-slate-200 rounded" />
      <div className="h-20 bg-slate-200 rounded" />
    </div>
  );
};

export default Loader;
