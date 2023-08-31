
// "use client"
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

function Thumbnail({ dt }) {
    return (
        <div className="p-2 transition duration-200 ease-in transfrom sm:hover:scale-105 hover:z-50 cursor-pointer group">
            <Image
                layout="responsive"
                alt="Thumbnail Image"
                width={1080}
                height={1920}
                src={`https://image.tmdb.org/t/p/original/${(dt.backdrop_path || dt.poster_path).trim()}`}/>
            <div className="p-2">
                <p className="max-w-md truncate">{dt.overview}</p>

                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{dt.title || dt.original_name}</h2>

                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {dt.media_type && `${dt.media_type} ·`}{" "}{dt.release_date || dt.first_air_date} ·{" "}
                    <ThumbUpIcon className="h-5 mx-2" /> {dt.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumbnail