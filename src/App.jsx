import backgroundImage from "./assets/images/background-desktop.png";
import logoUrl from "./assets/images/logo-full.svg";
import imageUpload from "./assets/images/icon-upload.svg";
import { useFileUploadComponent } from "./components/fileUpload";
import "./App.css";

function App() {
  const {
    selectedImage,
    previewUrl,
    handleFileChange,
    handleRemove,
    triggerFileInput,
  } = useFileUploadComponent();
  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center px-6 md:px-0"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Logo */}
      <img className="w-48 mb-6" src={logoUrl} alt="Coding Conf" />

      {/* Header */}
      <div className="text-center text-white font-mono font-bold">
        <h1 className="text-2xl md:text-3xl leading-tight">
          Your Journey to Coding Conf
        </h1>
        <span className="text-3xl md:text-4xl ">2025 Starts Here!</span>
      </div>

      {/* Description */}
      <p className="text-white text-md font-mono mt-3 text-center">
        Secure your spot at next year's biggest coding conference
      </p>

      {/* Form Container */}
      <form className="mt-6  backdrop-blur-md p-6 rounded-lg w-full max-w-md flex flex-col gap-4">
        {/* Upload Avatar */}
        <label htmlFor="file-input" className="font-mono text-white text-sm">
          Upload Avatar
        </label>
        <div className="border-2 border-dashed border-gray-300 p-4 rounded-md flex flex-col items-center justify-center">
          <input
            id="file-input"
            type="file"
            accept="image/jpeg,image/png,image/jpg"
            className="hidden"
            onChange={handleFileChange}
          />
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Selected preview"
              className="w-24 h-24 object-cover rounded-md"
            />
          ) : (
            <button
              type="button"
              onClick={triggerFileInput}
              className="cursor-pointer"
            >
              <img className="w-10" src={imageUpload} alt="Upload Icon" />
            </button>
          )}

          <p className="text-white text-xs mt-2">
            {selectedImage
              ? selectedImage.name
              : "Drag and drop or click to upload"}
          </p>
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              className={`px-3 py-1 bg-red-400 text-white rounded-md text-sm ${
                selectedImage ? "" : "hidden"
              }`}
              onClick={handleRemove}
            >
              Remove
            </button>
            <button
              type="button"
              className={`px-3 py-1 bg-blue-500 text-white rounded-md text-sm ${
                selectedImage ? "" : "hidden"
              }`}
              onClick={triggerFileInput}
            >
              Change
            </button>
          </div>
        </div>

        {/* Upload Info */}
        <p className="flex items-center gap-1 text-white text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              stroke="#D1D0D5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
            />
            <path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
            <path
              stroke="#D1D0D5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.004 10.462V7.596M8 5.569v-.042"
            />
          </svg>
          Upload your photo (JPG or PNG, max size: 500KB)
        </p>

        {/* Form Fields */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-white text-sm">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-2 rounded-md bg-transparent border border-white text-white placeholder-gray-400"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-white text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            className="w-full p-2 rounded-md bg-transparent border border-white text-white placeholder-gray-400"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="github" className="text-white text-sm">
            GitHub Username
          </label>
          <input
            id="github"
            type="text"
            placeholder="@yourusername"
            className="w-full p-2 rounded-md bg-transparent border border-white text-white placeholder-gray-400"
            required
          />
        </div>

        {/* Submit Button */}
        <button className="w-full !bg-[#f57261] text-[#0c082b] font-bold rounded-md py-2  transition">
          Generate my ticket
        </button>
      </form>
    </div>
  );
}

export default App;
