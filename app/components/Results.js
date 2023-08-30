
// "use client"
import Thumbnail from "./Thumbnail";

function Results({request}) {
    // console.log(dt);
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 justify-center">
            {request?.results?.map((dt, i) => (
                <Thumbnail key={i} dt={dt} />
            ))}
        </div>

    )
}

export default Results