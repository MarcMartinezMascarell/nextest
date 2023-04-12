import homeData from "@/content/pages/home.json";


export async function getServerSideProps(context) {
    let { id } = context.query
    //fetch de dades segons id --> data
    const data = homeData[id]
    return {
      props: { data, id }, // will be passed to the page component as props
    }
}

export default function Home({ data, id }) {
    return <h1>{data.title}</h1>
}