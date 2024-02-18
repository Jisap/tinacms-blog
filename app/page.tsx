import { HomePageComponent } from "@/components/app/home-page";
import client from "@/tina/__generated__/client";
import { notFound } from "next/navigation";



export default async function HomePage() {

  const result = await client.queries
    .homePage()
    .then((result) => {
      return result
    })
    .catch((error) => {
      console.log(error)
      return notFound()
    })
  
  return <HomePageComponent {...result} />
}