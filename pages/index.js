import Head from 'next/head'
import Header from '../components/Header'
import Movies from '../components/Movies'
import Nav from '../components/Nav'
import reqs from '../utilites/reqs'
export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Imovies</title>
      </Head>
      <Header/>
      <Nav/>
      <Movies requests = {results}/>
    </div>
  )
}
 export async function getServerSideProps(context){
   const genre = context.query.genre;


   const request = await fetch(`https://api.themoviedb.org/3${reqs[genre]?.url || reqs.fetchTrending.url}`)
   .then((res) => res.json())


  return{
    props:{
      results : request.results,
    }
  }
 }