

import { PostListPageComponent } from '@/components/app/posts/post-list-page'
import client from '@/tina/__generated__/client'

export default async function PostListPage() {

  const result = await client.queries.postConnection(); // Petición a components/post sobre todos los post que existan

  return <PostListPageComponent {...result} /> // muestra esos posts
  
}

