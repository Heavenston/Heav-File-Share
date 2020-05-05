import { FunctionComponent, useState, useCallback } from "react";
import { useDropzone } from 'react-dropzone';

const FileDropper: FunctionComponent = () => {
  const [ isHovering, setIsHovering ] = useState(false);

  const onDrop = useCallback(acceptedFiles => {
  }, []);
  const onDragEnter = useCallback(() => {
    setIsHovering(true);
  }, []);
  const onDragLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    onDragEnter,
    onDragLeave
  });


  return (
    <div
    {...getRootProps()}
    className={`
    min-w-64 w-full h-40 p-5 rounded border-dashed
    transition-all duration-500
    border-4 ${isHovering ? "bg-dashed border-dark" : "border-transparent"}
    `}
    >
      <input {...getInputProps()} />
      <h2 className="font-bold">Glisser ou cliquer pour envoyer un fichier</h2>
    </div>
  )
}

const Index = () => {
  const [stateImg, setStateImg] = useState("mailbox-empty");
  
  return (
    <div className="bg-black p-10 text-lg sm:w-96">
      <div className="flex -mx-6 -mt-8 mb-5">
        <h1 className="text-2xl text-white">Heav Faxer</h1>
        <span className="flex-grow" />
        <span>
          <img src={`/emojies/${stateImg}.png`} className="ml-2 w-6 inline-block" />
        </span>
      </div>
      <div>
        <FileDropper/>
      </div>
  </div>
  )
};
export default Index;