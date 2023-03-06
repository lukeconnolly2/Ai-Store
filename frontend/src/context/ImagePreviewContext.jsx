import {createContext, useEffect, useState} from "react"

export const ImagePreviewContext = createContext(null)

export const ImagePreviewContextProvider = (props) => {
    const imageType = /image\/(png|jpg|jpeg|gif)/i;
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);
  
    const imagePreviewHandler = (e) => {
      const file = e.target.files[0];
      if (!file.type.match(imageType)) {
        alert("Image type is not valid");
  
        return;
      }
      setFile(file);
    }
    useEffect(() => {
      let fileReader, isCancel = false;
      if (file) {
        fileReader = new FileReader();
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result && !isCancel) {
            setFileDataURL(result)
          }
        }
        fileReader.readAsDataURL(file);
      }
      return () => {
        isCancel = true;
        if (fileReader && fileReader.readyState === 1) {
          fileReader.abort();
        }
      }
  
    }, [file]);

    const contextValue = {fileDataURL, imagePreviewHandler, imageType}
    return(
        <ImagePreviewContext.Provider value={contextValue}>{props.children}</ImagePreviewContext.Provider>
    )

};