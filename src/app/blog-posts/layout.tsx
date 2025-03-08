import React from "react";
import { ListPageLayout } from "../lib/components/ListPageLayout";

const BlogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <ListPageLayout>{children}</ListPageLayout>;
};

export default BlogLayout;
