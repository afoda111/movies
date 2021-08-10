import Thumbnail from './Thumbnail'
function Movies({requests}) {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex felx-wrap justify-center ">
            {requests.map(result => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </div>
    )
}

export default Movies
