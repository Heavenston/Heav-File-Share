import { useState, useCallback } from "react";

const Index = () => {
  const [stateImg, setStateImg] = useState("mailbox-empty");

  return <div className="bg-black p-10 text-xl sm:min-w-96">
    <div className="flex -mx-6 -mt-8 mb-5">
      <h1 className="text-2xl text-white">Heav Faxer</h1>
      <span className="flex-grow" />
      <span>
        <img src={`/emojies/${stateImg}.png`} className="ml-2 w-6 inline-block" />
      </span>
    </div>
    <div className="flex flex-row justify-center flex-wrap -mr-10 -mb-10">
      <div className="mr-10 mb-10 flex flex-col justify-center items-center">
        <div>Envoyer un fichier</div>
        <span><img src="/emojies/file_folders.png" alt="file folder" /></span>
      </div>
      <div className="mr-10 mb-10 flex flex-col justify-center items-center">
        <div>Racourcir un lien</div>
        <span><img src="/emojies/ticket.png" alt="ticket" /></span>
      </div>
    </div>
  </div>
};
export default Index;