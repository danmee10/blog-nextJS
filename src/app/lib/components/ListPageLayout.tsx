import { Breadcrumbs } from "./Breadcrumbs";

export const ListPageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className="mb-4">
        <Breadcrumbs />
      </div>
      <main>{children}</main>
    </div>
  );
}