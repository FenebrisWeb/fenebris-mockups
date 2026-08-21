import type { Metadata } from "next";

// page.tsx is a client component (uses useState/useEffect for the smooth-scroll
// header offset), and client components can't export `metadata` — so it lives here
// in the route's layout instead.
export const metadata: Metadata = {
  title: "Wigomania V2",
};

export default function WigomaniaV2Layout({ children }: LayoutProps<"/wigomaniav2">) {
  return children;
}
