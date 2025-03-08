import React from "react";
import { Breadcrumbs } from "../lib/components/Breadcrumbs";

const BlogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <Breadcrumbs />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default BlogLayout;
