import { InstagramVideoForm } from "@/features/instagram/components/form";

export default function HomePage() {
  return (
    <div className="flex flex-col py-8">
      <h1 className="text-balance mb-2 text-center text-4xl font-extrabold">
      Native IG
      </h1>
      <p className="text-balance mb-4 text-center text-xl font-extrabold">Instagram Video Downloader</p>
      <section className="flex flex-col items-center justify-center gap-4">
        <InstagramVideoForm />
      </section>
    </div>
  );
}
