import { useState } from "react";

const useCopy = () => {
  const [copiedText, setCopiedText] = useState('');

  const copyClipboard = async(text) => {

    try {
      await navigator.clipboard.writeText(text);

    } catch (error) {
      console.log('Catch error copiando', error);
    }
  
    setCopiedText(text);
  }

  const getClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      console.log('TEXT LEIDO', text);
      return text; // ms31
    } catch (error) {
      console.log('Catch error copiando', error);
    }
  }

  return [getClipboard, copyClipboard];
};

export default useCopy;

// const [clipboard, copyClipboard] = useCopy();