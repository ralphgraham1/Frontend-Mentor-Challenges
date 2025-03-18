import React, { useState } from "react";
// import imageUpload from "../assets/images/icon-upload.svg";

export const useFileUploadComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.value = "";
    }
  };
  const triggerInput = () => {
    const fileInput = document.getElementById("file-input");
    if (fileInput) {
      fileInput.click();
    }
  };

  return {
    selectedImage,
    previewUrl,
    handleFileChange,
    handleRemove,
    triggerInput,
    
  };
};
