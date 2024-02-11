'use client'

import { PostConnectionQuery } from "@/tina/__generated__/types";
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

  console.log(postList)
  return (
    <>
      <h1>Blog</h1>
      <div>
        {postList?.map((post:any) => ( 
          <div key={post.node.id}>
            <Link href={`/posts/${post.node._sys.filename}`}>
              {post.node.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

