import { FunctionComponent, useState, useCallback } from "react";
import Icon from '@mdi/react';
import { mdiFax, mdiFile, mdiFileDocument, mdiFileCode, mdiFileCog, mdiFilePdf, mdiFileImage, mdiMovie } from '@mdi/js';
import {useDropzone} from 'react-dropzone'

import Potentiometer from "~/components/potentiometer";

const elsClasses = "bg-gray rounded mb-1 mr-1";

const LinkSend: FunctionComponent = () => {
  return <section className={`${elsClasses} w-64`}>
  </section>;
}

const FileSend: FunctionComponent = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [file, setFile] = useState(null as any);

  const onDrop = useCallback(acceptedFiles => {
    setIsHovering(false);
    setFile(acceptedFiles[0]);
    console.log(acceptedFiles[0]);
  }, []);
  const onDragEnter = useCallback(() => {
    setIsHovering(true);
  }, []);
  const onDragLeave = useCallback(() => {
    setIsHovering(false);
  }, []);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop, onDragEnter, onDragLeave,
    multiple: false,
  });

  const getIconFromExension = (ext: string) => {
    const exts = {
      "mp4": mdiMovie,
      "mov": mdiMovie,

      "txt": mdiFileDocument,
      "doc": mdiFileDocument,
      "docx": mdiFileDocument,

      "pdf": mdiFilePdf,

      "png": mdiFileImage,
      "jpeg": mdiFileImage,
      "jpg": mdiFileImage,
      "webp": mdiFileImage,

      "bat": mdiFileCog,
      "exe": mdiFileCog,
      "dll": mdiFileCog,
      "ini": mdiFileCog,

      "html": mdiFileCode,
      "htm": mdiFileCode,
      "js": mdiFileCode,
      "ts": mdiFileCode,
      "rs": mdiFileCode,
      "json": mdiFileCode,
      "xml": mdiFileCode,
      "yaml": mdiFileCode,
      "yml": mdiFileCode,
      "cpp": mdiFileCode,
      "c": mdiFileCode,
    }
    // @ts-ignore
    return exts[ext] || mdiFile;
  }

  return <section
  className={`
  ${elsClasses} w-64 flex justify-center
  items-center cursor-pointer hover:shadow-inner hover:bg-gray-600
  outline-none ${isHovering ? `bg-dashed` : ``}
  `}
  {...getRootProps()}
  >
    <div className="flex-grow-0 inline-block text-center p-2">
      {file?
      <>
      <h1 className="font-bold text-xl">{file.name}</h1>
      <Icon className="w-10 inline-block" path={getIconFromExension(file.name.split(".")[1])} />
      </>
      : <>
      <h1 className="font-bold text-xl">Ajouter un fichier</h1>
      <Icon className="w-10 inline-block" path={mdiFile} />
      </>
      }
    </div>
    <input {...getInputProps()} />
  </section>;
}

const Index: FunctionComponent = () => {
  const [sendingType, setSendingType] = useState(0);

  const onSendingTypeChange = useCallback((v: number) => {
    setSendingType(v);
  }, []);

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
          <Potentiometer 
          states={["Fichier", "Lien"]} 
          value={sendingType} 
          onChange={onSendingTypeChange} 
          />
          <section className={`${elsClasses} flex-grow`}></section>
        </div>
        
        {
        sendingType ?
        <LinkSend/>
        :
        <FileSend/>
        }

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