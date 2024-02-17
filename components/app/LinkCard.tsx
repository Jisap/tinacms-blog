import Link from "next/link";

interface LinkCardProps {
  link: string;
  title: string;
  description: string;
}

export const LinkCard = ({link, title, description}: LinkCardProps) => {


  return (
    <Link
      href={link}
      target="_blank"
      className="group relative overflow-hidden rounded-xl border border-zinc-200
      hover:border-zinc-800/50 hover:bg-zinc-400/10 dark:border-zinc-600 dark:hover:border-zinc-400/50
      dark:hover:bg-zinc-800/10 md:gap-8"
    >
      <article className="p-4 md:p-8">
        <h2 className="<-20 text-xl font-medium text-zinc-800 group-hover:text-black 
        dark:text-zinc-200 dark:group-hover:text-white lg:text-3xl">
          {title}
        </h2>
        <p className="z-20 mt-4 text-sm text-zinc-600 group-hover:text-zinc-800
        dark:text-zinc-400 dark:group-hover:text-zinc-200"
        >
          {description}

        </p>
      </article>
    </Link>  
  )
}