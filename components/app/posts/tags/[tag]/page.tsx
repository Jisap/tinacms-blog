import client from "@/tina/__generated__/client"
import { PostListPageComponent } from "../../post-list-page";


export default async function PostPageByTag({ params }: { params: {tag:string} }) {

  const posts = await client.queries.postConnection(); // peticion a content/post
    
    const result = {
      query: posts.query,
      data: posts.data,
      variables: posts.variables,
      tag: params.tag
    }

    return <PostListPageComponent { ...result } />
}