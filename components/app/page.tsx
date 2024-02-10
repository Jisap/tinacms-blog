'use client'

import { PageQuery } from "@/tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function PageComponent( props: {
  data:PageQuery
  variables: {
    relativePath:string
  }
  query:string
}){

  const { data } = useTina(props);

  const title = data.page.title
  const content = data.page.body

  return (
    <article>
      <h1>
        {title}
        <section>
          <TinaMarkdown content={content} />
        </section>
      </h1>
    </article>  
  )
}