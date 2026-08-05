import React from "react";
import Image from "next/image";

interface ModalProps {
  selectedImage: string | null;
  onClose: () => void;
}

function ModalImage({
  selectedImage,
  onClose,
}: ModalProps){
  return (
    selectedImage && (
      <button onClick={onClose} className="fixed inset-0 flex justify-center items-center z-50 bg-black/50 no-doc-scroll">
        <div className="w-dvw scale-[1.65] sm:max-w-fit sm:scale-100 sm:h-dvh sm:max-h-dvh object-cover aspect-video mx-4 rotate-90 sm:rotate-0">
          <div className="bg-white object-scale-down">
            <div className="relative h-full aspect-video ">
              <Image  className="static" src={selectedImage} alt="Selected Image" fill />
            </div>
          </div>
        </div>
      </button>
    )
  );
};

export { ModalImage };