import Image from "next/image";
import Link from "@/components/ui/link";
import ConnectLinks from "@/components/ConnectLinks";
import avatar from "public/avatar.png";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function Links() {
  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-8 animate-in">
          <Image
            src={avatar}
            width={100}
            height={100}
            alt="avatar"
            className="rounded-full bg-secondary mx-auto animate-in"
            style={{ "--index": 1 } as React.CSSProperties}
          />
          <div
            className="space-y-1 animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <h1 className="text-2xl font-bold tracking-tight text-center">
              S.H. Crisp
            </h1>
            <p className="max-w-sm text-secondary mx-auto text-center">            
            
            </p>
          </div>
        </div>

        <ul
          className="flex-grow grid grid-cols-1 gap-2 lg:gap-3 animated-list animate-in"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          {ConnectLinks.map((link) => (
            <li className="transition-opacity col-span-1" key={link.label}>
              <Link
                href={link.href}
                className="transition-opacity no-underline w-full border border-primary p-4 bg-tertiary inline-grid"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{link.icon}</span>
                  {link.label}
                  <ArrowTopRightIcon className="w-5 h-5 ml-auto text-secondary" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
        {/* <NowPlaying /> */}
      </div>
    </>
  );
}
