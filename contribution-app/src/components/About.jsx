import React from 'react'

function About() {
    return <section>
        <div className="container px-5 mx-auto flex flex-wrap">
            <br/>
            <h2 className="p-10 rounded-md text-3xl font-extrabold text-gray-900">About <span style={{ color: "#e05a00" }}>H</span>acktober <span style={{ color: "#e05a00" }}>F</span>est 2021</h2>
            <div className="px-10 rounded-md text-lg text-gray-900">
                <p class="pb-3">Hacktoberfest is our month-long celebration of the open-source community. During the month of October, we invite you to join open-source software enthusiasts, beginners, and the developer community by contributing to open-source projects. You can do this in a variety of ways:</p>
                <ul>
                    <li>1. Prepare and share your project for collaboration</li>
                    <li>2. Contribute to the betterment of a project via pull request</li>
                    <li>3. Organize an event</li>
                    <li>4. Mentor others</li>
                    <li>5. Donate directly to open source projects</li>
                </ul>
                <br/>
                <p class="pb-20 mb-20">For more rules and information regarding this event, please take a look at their official website.</p>
            </div>
        </div>
    </section>
}

export default About;
