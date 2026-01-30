import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingPage() {
  return (
    <div className="my-8 max-w-sm mx-auto flex flex-col justify-center items-center gap-4 h-[calc(100svh-200px)]">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-3/4" />
    </div>
  );
}
