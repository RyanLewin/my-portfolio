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
      <button onClick={onClose} className="fixed inset-0 flex justify-center items-center z-50 bg-black/50">
        <div className="w-[180vh] object-cover aspect-video mx-4">
          <div className="bg-white">
            <div className="relative h-full aspect-video">
              <Image  className="static " src={selectedImage} alt="Selected Image" fill />
            </div>
          </div>
        </div>
      </button>
    )
  );
};

export { ModalImage };