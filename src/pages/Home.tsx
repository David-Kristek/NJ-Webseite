import React from "react";
// https://tailblocks.cc/
// https://www.tailwind-kit.com/components#pagesection
// https://kutty.netlify.app/components/
// https://dev.to/narottam04/free-tailwind-components-for-your-next-project-2gka
function Home() {
  return (
    <div>
      <section className="bg-blend-darken bg-[url('./concert.jpg')] bg-no-repeat	bg-bottom	bg-cover py-10">
        <div className="container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8  mt-20">
          <div className="flex flex-wrap -mx-8 ">
            <div className="w-full lg:w-1/2 px-8">
              <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading text-white mt-4">
                  Die coolste und tollste Band unter der Sonne, die man
                  unbedingt hören muss
                </h2>
                <p className="mb-8 leading-loose text-white text-lg">
                  Unsere Gruppe wurde in Tschechien gegründet. Wir spielen
                  hauptsächlich Psychedelic und Progressive Rock. Seit der
                  Gründung haben wir 2 Alben veröffentlicht –{" "}
                  <b>Letzter Tag auf der Erde </b> <br />
                  und <b> Wir sind Chaos </b>.
                </p>
                <div className="w-full md:w-1/3">
                  <button
                    type="button"
                    className="py-2 px-3  bg-white hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    <div className="flex items-center justify-center">
                      <span className="pr-5">Alben sehen</span>
                      <img src="./spotify.png" className="h-10 mr-3 max-h-8" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-8"></div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-evenly">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Koncert
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Landsberg am Lech
                </h1>
                <p className="leading-relaxed mb-3">
                  5.3. 2022 spielen wir unsere Hits vom neuen Album vor
                  bayerischem Publikum auf einer Freilichtbühn.
                </p>
                <a className="text-indigo-500 inline-flex items-center" href="#">
                  Lern mehr
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Koncert
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  Prag – O2 Arena
                </h1>
                <p className="leading-relaxed mb-3">
                  24.5. Findet unser bisher größtes Konzert in der O2-Arena
                  statt, es wird euch bestimmt Spaß machen
                </p>
                <a className="text-indigo-500 inline-flex items-center" href="#">
                  Lern mehr
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">
              Wir haben uns auf dem Gymnasium getroffen und wir alle mochten auf
              Musikinstrumente spielen. Ich habe immer gedacht, es war nur ein
              Hobby, aber jetzt verdienen wir Geld. <br />
              Folge deinen Träumen und sie werden wahr.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              David Křístek
            </h2>
            <p className="text-gray-500">Bandgründer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
