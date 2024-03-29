'use client'

import { ProjectConnectionQuery } from "@/tina/__generated__/types";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { LinkCard } from "../LinkCard";


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
      <div className="mx-auto grid grid-cols gap-4 md:grid-cols-3 lg:mx-0">
        <div className="grid grid-cols-1 gap-4">
          {projectList?.filter((_:any, i:number) =>  i % 3===1) // i%3 verifica si el índice es divisible por 3 -> devuelve solo los multiplos de 3
            .map((project: any) => (
              <LinkCard 
                key={project.node.id}
                link={project.node.link}
                title={project.node.title}
                description={project.node.description}
              />
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {projectList?.filter((_: any, i: number) => i % 3 === 0) // i%3 verifica si el índice es divisible por 3 -> devuelve solo los multiplos de 3
            .map((project: any) => (
              <LinkCard
                key={project.node.id}
                link={project.node.link}
                title={project.node.title}
                description={project.node.description}
              />
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {projectList?.filter((_: any, i: number) => i % 3 === 2) // i%3 verifica si el índice es divisible por 3 -> devuelve solo los multiplos de 3
            .map((project: any) => (
              <LinkCard
                key={project.node.id}
                link={project.node.link}
                title={project.node.title}
                description={project.node.description}
              />
            ))}
        </div>
      </div>
    </>
  )
}

