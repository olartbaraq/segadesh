import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function BreadcrumbWithCustomSeparator({
  pageName,
  showSecond = false,
}: {
  pageName: string;
  showSecond?: boolean;
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-white" href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash color="#ffffff" />
        </BreadcrumbSeparator>
        {/* Second Link */}
        {showSecond && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-white" href="/portfolio">
                Projects
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash color="#ffffff" />
            </BreadcrumbSeparator>
          </>
        )}

        {/* Third Link */}
        <BreadcrumbItem>
          <BreadcrumbPage className="text-white">{pageName}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
