'use client'

import { ProjectConnectionQuery } from "@/tina/__generated__/types";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";


export function ProjectListPageComponent(props: {
  data: ProjectConnectionQuery // Trabaja con "content/projects"
  variables: {}
  query: string
}) {

  const { data } = useTina(props);                  // Data es el objeto devuelto por la consulta GraphQL que se utiliza para obtener datos de Tina CMS.
  const projectList = data.projectConnection.edges; // postConnection contiene información sobre la paginación de las publicaciones
                                                    // edge es un array cuyos items representan una publicación individual con información específica sobre ella.

  
  return (
    <>
      <h1>My Projects</h1>
      <div>
        {projectList?.map((project: any) => (
          <div key={project.node.id}>
            <Link href={project.node._sys.filename}>
              {project.node.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

