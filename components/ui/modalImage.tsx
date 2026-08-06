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
      <button onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 cursor-zoom-out no-doc-scroll">
        <div className="relative landscape:w-[95dvw] landscape:h-[95dvh] landscape:rotate-0 portrait:scale-[1.65] portrait:w-[95dvh] portrait:h-[95dvw] portrait:rotate-90 transition-transform duration-300">
          <Image src={selectedImage} alt="Selected Image" fill className="object-contain" sizes="100vw"/>
        </div>
      </button>
    )
  );
};

export { ModalImage };