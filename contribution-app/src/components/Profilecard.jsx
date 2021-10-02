/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
  {
    name: "Buddhadeb Chhetri",
    description:
      "Front-end Developer 💻 | |📱Android Developer|🎮 Game Developer |Blogger ✍️| Poster Designer📜| Coding👨‍💻",
    imageSrc: "https://avatars.githubusercontent.com/u/71445997?v=4",
    imageAlt: "Buddhadeb Chhetri",
    href: "#",
  },
  {
    name: "Viren Shewaramani",
    description:
      "Frontend Developer || Competitive Programmer || DSA Enthusiast || Java Fullstack",
    imageSrc:
      "https://avatars.githubusercontent.com/u/84906860?s=400&u=21561b09e00ae5dc55e86129c9f72adbae2df3bd&v=4",
    imageAlt: "Viren",
    href: "#",
  },
  {
    name: "Stillwater",
    description: "Noob Coder",
    imageSrc:
      "https://cdn.discordapp.com/attachments/887721411781754930/893875151299559494/IMG_20210914_141959.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Divash",
    description: "Daily commute essentials",
    imageSrc:
      "https://cdn.discordapp.com/attachments/860566136806703154/893875712308703302/Screenshot_1277.png",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Cypher",
    description: "No Backlogs ;)",
    imageSrc: "https://avatars.githubusercontent.com/u/71265266?v=4",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Dhruv",
    description: "Sharing tools, Tips and Self taught Knowledge",
    imageSrc: "https://avatars.githubusercontent.com/u/49398471?v=4",
    imageAlt: "acedesyne",
    href: "#",
  },
  {
    name: "Piyush",
    description: "Passionate about web development.",
    imageSrc: "https://avatars.githubusercontent.com/u/69067256?v=4",
    imageAlt: "Piyush",
    href: "#",
  },
  {
    name: "Deepak_070",
    description: "contributing from github no need of git",
    imageSrc: "https://avatars.githubusercontent.com/u/56753916?v=4",
    imageAlt: "Deepak",
    href: "#",
  },
];

export default function Example() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Contributors
          </h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 ">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative py-6">
                <div className="relative w-48 h-48 bg-white rounded-full overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 ">
                  <img
                    style={{ objectFit: "contain" }}
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    <div className="contributor">{callout.name}</div>
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900 ">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
