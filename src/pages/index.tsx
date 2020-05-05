import { useState, useCallback } from "react";
import { useDropzone } from 'react-dropzone';

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
  </div>
};
export default Index;