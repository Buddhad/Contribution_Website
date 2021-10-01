import React from 'react'
import { data } from "../data/data"

function Card() {
    const Data = data;

    return (
        <div class="container mx-auto py-12 px-8">
            <div class="issue-grid">


                {Data.map((data) => {
                    return (

                        <div class="border border-gray-200 p-4 shadow-sm">
                            <a target="_blank" href=" "><h2 class="text-lg font-semibold mb-2">{data.title}</h2>
                            </a>
                            <a target="_blank" href=" "><h3 class="text-sm text-teal-600 hover:text-hacktoberfest-red font-medium mb-4">{data.link}}</h3></a>
                            <p class="text-sm text-gray-700">{data.comments} comments</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}


export default Card
