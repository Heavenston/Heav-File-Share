import { FunctionComponent, useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Icon from '@mdi/react';
import {
  mdiFax, mdiUpload, mdiUploadLock, mdiFile,
  mdiFileDocument, mdiFileCode, mdiFileCog,
  mdiFilePdf, mdiFileImage, mdiMovie
} from '@mdi/js';
import {useDropzone} from 'react-dropzone'

import Potentiometer from "~/components/potentiometer";

const elsClasses = "bg-gray rounded mb-1 mr-1";

const linkRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
const LinkSend: FunctionComponent<{
  onChange?: (v: boolean) => any,
}> = ({onChange}) => {
  const [showError, setShowError] = useState(true);

  const onInputChange = useCallback((e) => {
    const value = e.target.value;
    setShowError(!linkRegex.test(value));
    onChange && onChange(linkRegex.test(value));
  }, []);

  return <section className={`${elsClasses} w-64 relative overflow-hidden p-3`}>
    <div
    className={`
    absolute top-0 left-0 right-0 text-center
    bg-red-600 text-white overflow-hidden
    transition-all duration-100
    ${showError ? "h-7" : "h-0"}
    `}
    >
      Lien invalide
    </div>
    <input
    autoCorrect="false" spellCheck="false"
    placeholder="Coller le lien ici"
    className="
    h-full w-full bg-transparent
    text-white outline-none text-center
    font-semibold
    "
    onChange={onInputChange}/>
  </section>;
}

const FileSend: FunctionComponent<{
  onChange?: (v: boolean) => any,
}> = ({onChange}) => {
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
  
  useEffect(() => {
    onChange && onChange(!!file);
  }, [onChange, file]);

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
  transition-color duration-100
  items-center cursor-pointer hover:shadow-inner hover:bg-gray-600 hover:text-primary
  outline-none ${isHovering ? `bg-dashed` : ``}
  `}
  {...getRootProps()}
  >
    <div className="flex-grow-0 inline-block text-center overflow-hidden p-2">
      {file?
      <>
      <h1 className="font-bold text-xl truncate">{file.name}</h1>
      <Icon className="w-10 inline-block" path={getIconFromExension(file.name.split(".").pop())} />
      </>
      : <>
      <h1 className="font-bold text-xl truncate">Ajouter un fichier</h1>
      <Icon className="w-10 inline-block" path={mdiFile} />
      </>
      }
    </div>
    <input {...getInputProps()} />
  </section>;
}

const Index: FunctionComponent = () => {
  const [sendingType, setSendingType] = useState(0);
  const [canSend, setCanSend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [outputLink, setOutputlink] = useState(null as null|string);

  const onSendingTypeChange = useCallback((v: number) => {
    setSendingType(v);
    setCanSend(false);
    setOutputlink(null);
    }, []);

  const send = useCallback(() => {
    setIsLoading(true);
    setCanSend(false);
    setOutputlink(null);
    setTimeout(() => {
      setIsLoading(false);
      setOutputlink("https://faxer.heav.fr/kdqldk");
    }, 2000);
  }, []);

  return (
    <article
    className="flex shadow-lg flex-col text-gray-200
    bg-gray-900 pt-1 pl-1 text-lg rounded-lg"
    >
      {createPortal(
      <div className={`
      ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}
      absolute inset-0 z-50 flex justify-center items-center
      transition-all duration-300`}>
        <div className="absolute inset-0 bg-black opacity-75" />
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
      , document.body)}

      <div className="flex">

        <section className={`${elsClasses} h-64 w-64`}>
          <h1
          className="
          font-bold text-2xl bg-gray-700
          inline-block px-4 py-1 align-middle leading-10
          -ml-10 mt-5 rounded text-white shadow
          hover:bg-primary transition-all duration-100
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
        <LinkSend onChange={setCanSend}/>
        :
        <FileSend onChange={setCanSend}/>
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
            <div className="absolute top-0 left-0 right-0 h-64 px-10 overflow-hidden">
              <div
              className="w-full pb-5 pt-1 bg-gray-100 text-black text-center
              transition-transform duration-500 ease-out"
              style={{
                transform: `translateY(${outputLink ? 0 : -90}px)`,
                clipPath: "polygon(0 0, 0 75%, 5% 100%, 10% 75%, 15% 100%, 20% 75%, 25% 100%, 30% 75%, 35% 100%, 40% 75%, 45% 100%, 50% 75%, 55% 100%, 60% 75%, 65% 100%, 70% 75%, 75% 100%, 80% 75%, 85% 100%, 90% 75%, 95% 100%, 100% 75%, 100% 0)"
              }}
              >
                {outputLink}
              </div>
            </div>
          </div>
        </section>
        <section className={`${elsClasses} w-40 flex justify-center items-center`}>
          
          <div className={`
          transition-all duration-1000
          w-32 h-32 ${canSend ? "glow bg-primary text-white hover:bg-primary-600 cursor-pointer" : "bg-gray-600 text-gray-400"} rounded
          flex justify-center items-center
          `}
          onClick={canSend ? send : undefined}>
            <Icon className="w-12" path={canSend ? mdiUpload : mdiUploadLock} />
          </div>

        </section>
      </div>
    </article>
  )
};
export default Index;