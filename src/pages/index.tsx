import { FunctionComponent } from "react";
import Icon from '@mdi/react';
import { mdiFax } from '@mdi/js';

const elsClasses = "bg-gray rounded mb-1 mr-1";

const Index: FunctionComponent = () => {
  return (
    <article className="flex flex-col bg-gray-900 pt-1 pl-1 text-lg rounded-lg">
      <div className="flex">
        <section className={`${elsClasses} h-64 w-64`}>
          <h1
          className="
          font-bold text-2xl bg-gray-700
          inline-block px-4 py-1
          -ml-10 mt-5 rounded
          "
          >
            Heav Faxer <Icon path={mdiFax} />
          </h1>
        </section>
        <section className={`${elsClasses} h-64 w-64`}>
        </section>
        <section className={`${elsClasses} h-64 w-64`}>
        </section>
      </div>
      <div className="flex">
        <section className={`${elsClasses} flex-grow h-64`}>

        </section>
      </div>
    </article>
  )
};
export default Index;