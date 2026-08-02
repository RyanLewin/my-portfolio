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
        <div className="w-dvw scale-[1.65] md:max-w-fit md:scale-100 md:h-dvh md:max-h-dvh object-cover aspect-video mx-4 rotate-90 md:rotate-0">
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