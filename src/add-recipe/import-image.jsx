import { useState, useEffect } from "react";

export default function RecipeImage({ recipeDetails, setRecipeDetails }) {
  const [imagePreview, setImagePreview] = useState(null);

  // Helper to convert local File objects to Base64 URL strings
  function convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }

  // Save image string directly to parent state
  function saveImageToRecipe(imageSrc) {
    setRecipeDetails((prevDetails) => ({
      ...prevDetails,
      image: imageSrc,
    }));
  }

  async function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }

      // Local preview URL
      setImagePreview(URL.createObjectURL(file));

      // Save Base64 string into recipeDetails.image
      const base64 = await convertFileToBase64(file);
      saveImageToRecipe(base64);
    }
  }

  // Drag and Drop handlers (Web images & Desktop files)
  function handleDragOver(e) {
    e.preventDefault();
  }

  async function handleDrop(e) {
    e.preventDefault();

    // 1. Desktop file drop
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("image/")) {
        if (imagePreview) URL.revokeObjectURL(imagePreview);
        setImagePreview(URL.createObjectURL(file));

        const base64 = await convertFileToBase64(file);
        saveImageToRecipe(base64);
      }
      return;
    }

    // 2. Web image drop from another website
    const webImageUrl =
      e.dataTransfer.getData("text/html")?.match(/src=["'](.*?)["']/)?.[1] ||
      e.dataTransfer.getData("text/uri-list");

    if (webImageUrl) {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
      setImagePreview(webImageUrl);
      saveImageToRecipe(webImageUrl);
    }
  }

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <section className="">
      <label
        htmlFor="file-upload"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="group relative flex aspect-video h-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-slate-400 bg-white text-center text-slate-500 transition-colors duration-200 hover:bg-slate-200 hover:text-slate-700 md:aspect-auto"
      >
        {imagePreview ? (
          /* Render actual preview when image exists */
          <img
            src={imagePreview}
            alt="Recipe preview"
            className="h-full w-full object-cover"
          />
        ) : (
          /* Render default upload UI when no image selected */
          <>
            <svg
              className="mb-2 h-8 w-8 text-slate-400 transition-transform duration-200 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>

            <span className="text-sm font-semibold">
              Click to upload or drag and drop
            </span>
            <span className="mt-1 text-xs">PNG, JPG</span>
          </>
        )}

        <input
          id="file-upload"
          type="file"
          accept="image/png, image/jpeg"
          className="sr-only"
          onChange={handleImageChange}
        />
      </label>
    </section>
  );
}
