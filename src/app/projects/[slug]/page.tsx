import React from "react";
import { type PostData } from "@/app/lib/utils/getItemDataByName";
import { getItemDataByName } from "../../lib/utils/getItemDataByName";
import Image from "next/image";
import { projects } from "@/app/data/projects";
import NotFound from "@/app/lib/components/NotFound";
import { NotFoundObject } from "@/app/lib/types/NotFoundObject";
import { Item } from "@/app/lib/types/Item";
import path from "path";

const projectsDirectory = path.join(process.cwd(), "src/app/project-readmes");

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params: asyncParams }: ProjectPageProps) {
  const params = await asyncParams;
  const { slug } = params;
  const projectData: Item | undefined = projects.find(
    (post) => post.slug === slug
  );

  const project: PostData | null = await getItemDataByName({
    name: slug,
    dir: projectsDirectory,
  });

  if (!project || !projectData) {
    return <NotFound objectType={NotFoundObject.PROJECT} />;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Image
        src={projectData.image}
        alt={projectData.name}
        width={800}
        height={400}
        className="rounded-md mb-4 object-cover"
      />
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: project.contentHtml }}
      />
    </div>
  );
}