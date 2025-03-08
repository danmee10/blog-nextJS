import React from "react";
import { ListPageLayout } from "../lib/components/ListPageLayout";

const ProjectsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <ListPageLayout>{children}</ListPageLayout>;
};

export default ProjectsLayout;
