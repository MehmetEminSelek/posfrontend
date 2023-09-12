import Image from "next/image";
import video from "../../../public/images/video.png";

export default function videobanner() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-100  p-4 rounded shadow-lg">
      <div className="text-center md:text-left space-y-4">
        <p className="text-2xl font-bold">Daha Fazlasını Keşfedin</p>
        <p className="text-xl">
          Kullanmaya başlamanın ne kadar kolay olduğunu görün
        </p>
        <p className="text-gray-700">
          Nam vitae condimentum elit. Proin rhoncus porttitor leo, vitae
          dignissim nunc. Etiam sit amet vulputate massa, in dictum quam.
          Praesent efficitur sit amet magna eget pulvinar. Suspendisse volutpat
          est nec ex eleifend cursus. Nullam vel nisl vitae leo pharetra
          facilisis. Mauris et egestas ex. Sed vestibulum gravida felis, vel
          imperdiet quam consectetur id.Nam vitae condimentum elit. Proin
          rhoncus porttitor leo, vitae dignissim nunc. Etiam sit amet vulputate
          massa, in dictum quam. Praesent efficitur sit amet magna eget
          pulvinar.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Daha Fazlasını Keşfedin
        </button>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={video}
          quality={100}
          width={300} // Adjust as necessary
          height={300} // Adjust as necessary
          objectFit="cover"
          className="rounded"
          alt="Ücretsiz Entegrasyon"
        />
      </div>
    </div>
  );
}
