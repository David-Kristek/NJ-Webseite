import React from "react";

function Questions() {
  return (
    <div>
      <h1 className="font-bold font-3xl">O nás</h1>
      <div className="max-w-screen-xl mx-auto p-8">
        <h2 className="text-3xl font-extrabold leading-9 border-b-2 border-gray-100 text-gray-900 mb-12">
          FAQs
        </h2>
        <ul className="flex items-start gap-8 flex-wrap">
          <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
               Warum heißen sie Vorstellung Eidechse? 
            </p>
            <p className="mt-2">
              <p className="text-base leading-6 text-gray-500">
                Weil wir allen gern Imagine Dragons hören. Dieses Name ist eigentlich  Parodie, weil Dragon win bisschen wir Eidechse aussieht. .
              </p>
            </p>
          </li>
          <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
 Wie oft und wo probiert ihr? 
            </p>
            <p className="mt-2">
              <p className="text-base leading-6 text-gray-500">
                Es ist wie normal Beruf, wir probieren fünfmal oder mehr pro Woche in unserem Studio. 
              </p>
            </p>
          </li>
          <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
              Wie ist es berühmt sein? 
            </p>
            <p className="mt-2">
              <p className="text-base leading-6 text-gray-500">
              Wir müssen oft Fotos mit Fans machen, aber sonst es super Gefühl ist. 
              </p>
            </p>
          </li>
          <li className="w-2/5">
            <p className="text-lg font-medium leading-6 text-gray-900">
              Was macht ihr in euer Freizeit? 
            </p>
            <p className="mt-2">
              <p className="text-base leading-6 text-gray-500">
                 Leider haben wir nicht so viel Freizeit, aber manchmal schwimmen wie oder wir gehen ins Restaurant.
              </p>
            </p>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Questions;
