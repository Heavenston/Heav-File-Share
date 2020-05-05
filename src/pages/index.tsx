import { FunctionComponent } from "react";
import Icon from '@mdi/react';
import { mdiFax } from '@mdi/js';

import Potentiometer from "~/components/potentiometer";

const elsClasses = "bg-gray rounded mb-1 mr-1";

const Index: FunctionComponent = () => {
  return (
    <article
    className="flex shadow-lg flex-col text-gray-200
    bg-gray-900 pt-1 pl-1 text-lg rounded-lg"
    >
      <div className="flex">

        <section className={`${elsClasses} h-64 w-64`}>
          <h1
          className="
          font-bold text-2xl bg-gray-700
          inline-block px-4 py-1 align-middle leading-10
          -ml-10 mt-5 rounded text-white shadow
          "
          >
            Faxer <Icon className="inline-block h-10" path={mdiFax} />
          </h1>
        </section>

        <div className="flex flex-col">
          <Potentiometer states={["Fichier", "Lien"]} />
          <section className={`${elsClasses} flex-grow`}></section>
        </div>

        <section className={`${elsClasses} flex-grow w-96`}>
        </section>
      </div>

      <div className="flex">
        <section className={`${elsClasses}
        flex-grow h-64 p-10
        flex justify-center items-center
        `}>
          <div className="bg-gray-800 h-5 rounded-full w-full relative">
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute top-0 right-0 left-0 h-2 bg-gray-900" />
            </div>
          </div>
        </section>
        <section className={`${elsClasses} w-32`}>
        </section>
      </div>
    </article>
  )
};
export default Index;