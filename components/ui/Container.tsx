import { cx } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={cx(
        "mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}
