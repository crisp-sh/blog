import { DrawerContent, DrawerTrigger } from "@/components/ui/Drawer";
import Link from "@/components/ui/Link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | S.H. Crisp",
  description:
    "This page does not exist",
};

const Custom404 = (): JSX.Element => (
  <div className="flex flex-col">
    <h1 className="text-8xl">ERROR 404</h1>
    <h2 className="text-xl">Page not found</h2>
    <p className="text-secondary mt-3">
      This page does not exist. Please return home or check the URL.
    </p>
    <div className="h-2" />
    <Link href="/" underline>
      Home
    </Link>
  </div>
);

export default Custom404;
