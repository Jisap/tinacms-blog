import { PageComponent } from "@/components/app/page";
import client from "@/tina/__generated__/client";
import { notFound } from "next/navigation";



export default async function HomePage() {

  const result = await client.queries
    .page({
      relativePath: "/home.mdx"
    })
    .then((result) => {
      return result
    })
    .catch((error) => {
      console.log(error)
      return notFound()
    })
  
  return <PageComponent {...result} />
}