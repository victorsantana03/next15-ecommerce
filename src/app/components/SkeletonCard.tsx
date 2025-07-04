const SkeletonCard = ({ isLoading }: { isLoading?: boolean }) => {
  return (
    <div
      className={
        isLoading
          ? "flex h-96 flex-col bg-slate-800 p-5 text-gray-300 shadow-lg"
          : "relative overflow-hidden before:absolute before:inset-0 before:translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-gray-500/30 before:to-transparent"
      }
    >
      <div className="relative max-h-72 flex-1 bg-zinc-700"></div>
      <div className="my-3 flex justify-between bg-zinc-700 font-bold"></div>
      <div className="h-3 w-8/12 rounded-md bg-zinc-700"></div>
    </div>
  );
};

export default SkeletonCard;
