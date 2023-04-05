import homeData from "@/content/pages/home.json";

export async function getServerSideProps(context) {
    const { id } = context.query
    //fetch de dades segons id --> data
    const data = homeData
    return {
      props: { data }, // will be passed to the page component as props
    }
}

export default function Home({ data }) {
    return <h1>{data.title}</h1>
}