import Image from "next/image";

export default function Loading() {
  return (
    <div className="loading">
      <Image
        src="/icons/loading.svg"
        alt="loading spinner"
        width={300}
        height={300}
      />
    </div>
  );
}
