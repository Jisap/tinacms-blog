import { PageComponent } from "@/components/app/page";
import { PostPageComponent } from "@/components/app/posts/post-page";
import client from "@/tina/__generated__/client";
import { notFound } from "next/navigation";



export default async function PostPage({ params }: { params: { slug: string } }) {

  const result = await client.queries
    .post({
      relativePath: `${params.slug}.mdx`
    })
    .then((result) => {
      return result
    })
    .catch((error) => {
      console.log(error)
      return notFound()
    })

  return <PostPageComponent {...result} />
}