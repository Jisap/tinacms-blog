'use client'

import { CaptionImage, PullQuote, TextBox, TweetEmbed, VideoPlayer } from "@/components/RichText";
import { PageQuery, PostQuery } from "@/tina/__generated__/types";
import { tinaField, useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function PostPageComponent(props: {
  data: PostQuery           // Trabaja con /content/post
  variables: {              // y el nombre del archivo que queremos visualizar 
    relativePath: string
  }
  query: string
}) {

  const { data } = useTina(props);

  const title = data.post.title
  const content = data.post.body

  return (
    <article>
      <h1 data-tina-field={tinaField(data.post, "title")}>
        {title}
      </h1>
      <section data-tina-field={tinaField(data.post, "body")}>
        <TinaMarkdown 
          content={content} 
          components={{
            TextBox,
            TweetEmbed,
            PullQuote,
            CaptionImage,
            VideoPlayer
          }}   
        />
      </section>
    </article>
  )
}