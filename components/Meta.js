import Head from "next/head";

export default function Meta({ title, description, keywords }) {
  return (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <link ref="stylesheet" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    </div>
  )
};

Meta.defaultProps = {
    title: "WatchMe",
    keywords: "WatchMe, Movie, TV, Game, movie app, free movies",
    description: "WatchMe is a free movie app that provides you with the latest movies and TV shows."
}
