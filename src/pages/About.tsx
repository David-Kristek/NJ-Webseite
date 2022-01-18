import React from "react";

function About() {
  return (
    <div>
      <div className="bg-lightblue py-20 px-4">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row">
          <h2 className="mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9">
            Unsere Musikante:
          </h2>
          <dl className="w-full md:w-2/3">
            <dt className="mb-4">
              <h3 className="text-2xl font-semibold">David Křístek</h3>
            </dt>
            <dd className="mb-16">
              <p className="text-lg">
                Ich bin 24 Jahre alt und ich spiele Saxofon. Ich mag dieses
                Musikinstrument, weil es viele Tonen und Lieder spielen kann.
                Ich spiele seit zehn Jahren Saxofon und man muss dafür wirklich
                starke Lunge und Geduld haben. Wenn ich spiele, kann ich alles
                vergessen und mich auf die Klänge konzentrieren. Professioneller
                Musiker zu sein war immer mein Traum und ich bin sehr glücklich,
                dass ich ihn mir erfüllen konnte.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-2xl font-semibold">Tobiáš Junek</h3>
            </dt>
            <dd className="mb-16">
              <p className="text-lg">
                Ich bin 23 Jahre alt und ich spiele die Elektrische Gitarre in
                dieser Band. Ich spiele es seit meiner Kindheit, zuerst habe ich
                akustische Gitarre gespielt, aber später kam ich zur
                elektrischen Gitarre. Ich denke, diese Gruppe hat Potenzial. Ich
                möchte ein Rock oder Metalstar in der Zukunft werden.
              </p>
            </dd>
            <dt className="mb-4">
              <h3 className="text-2xl font-semibold">Vojta Křístek</h3>
            </dt>
            <dd className="mb-16">
              <p className="text-lg">
                Ich bin 24 Jahre alt und ich spiele Schlagzeug, weil ich gerne
                den Rhythmus gebe. Ich mag Musik, weil ich mit meiner Kapelle
                reisen kann. Das beste Konzert war in Prag, weil uns die
                Tschechen am meisten mögen. Leider muss ich viel trainieren. Ich
                probiere jeden Tag vier Uhren aus. Aber ich mag es, so es ist
                für mich wie eine Minute. In der Zukunft möchte ich mit der Band
                weiterführen.
              </p>
            </dd>
          </dl>
        </div>
      </div>{" "}
    </div>
  );
}

export default About;
