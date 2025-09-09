"use client";

type PropsCarta = {
  valor: string;
  virado: boolean;
  combinado: boolean;
  aoClicar: () => void;
};

export default function Carta({ valor, virado, combinado, aoClicar }: PropsCarta) {
  return (
    <div
      className="w-24 h-28 cursor-pointer [perspective:1000px]"
      onClick={aoClicar}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          virado || combinado ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 border-2 border-blue-400 rounded-xl shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <img src={valor} alt="ícone" className="w-16 h-16 object-contain" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white text-2xl font-bold border-2 border-blue-700 rounded-xl shadow-md [backface-visibility:hidden]">
          ?
        </div>
      </div>
    </div>
  );
}
