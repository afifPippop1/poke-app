import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <div className="inline-block px-3 py-1 bg-white/15 rounded-full text-white text-xs">
      {children}
    </div>
  );
}
