import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "junowoz | 404",
  description: "४०४ इति",
};

export default function NotFound() {
  return (
    <div>
      <h1 className="text-sm font-bold">404 | Page not found</h1>
    </div>
  );
}
