import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-red-50/60 rounded-lg mb-6 border border-red-100">
      <ol className="flex items-center flex-wrap text-xs md:text-sm text-gray-600 gap-1.5">
        <li className="inline-flex items-center">
          <Link href="/" className="text-gray-600 hover:text-[#C71920] inline-flex items-center gap-1 font-medium">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            {item.href ? (
              <Link href={item.href} className="text-gray-600 hover:text-[#C71920] font-medium">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#C71920] font-bold" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
