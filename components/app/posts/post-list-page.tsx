'use client'

import { PostConnectionQuery } from "@/tina/__generated__/types";
import moment from "moment";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";


export function PostListPageComponent(props: {
  data: PostConnectionQuery // Trabaja con "content/post"
  variables: {
    
  }
    query: string
}) {

  const { data } = useTina(props);            // Data es el objeto devuelto por la consulta GraphQL que se utiliza para obtener datos de Tina CMS.
  const postList = data.postConnection.edges; // postConnection contiene información sobre la paginación de las publicaciones
                                              // edge es un array cuyos items representan una publicación individual con información específica sobre ella.

  postList?.sort((a:any, b:any) => {
    const dateA: any=new Date(a.node.date)    // Se crea una nueva instancia de Date apartir de las fecha de los posts adayacentes en el array
    const dateB: any=new Date(b.node.date)
    return dateB - dateA  // Si la resta es - B es anterior a A, B debe estar antes en la ordenación. Proceso contrario si la resta es +
  })

  console.log(postList)
  return (
    <>
      <h1>Blog</h1>
      <div>
        <ul className="m-0 pl-0">
          {postList?.map((post:any) => ( 
            <li key={post.node.id} className="mt-0 pb-2">
              <div className="flex">
                <span className="text-sm text-gray-400">{moment(post.node.date).format("MMM DD, YYYY")}</span>
              </div>
              <Link href={`/posts/${post.node._sys.filename}`}>
                {post.node.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

