"use client";
import { motion as m } from "framer-motion";
import Input from "@/components/Input";
import TypewriterComponent from "typewriter-effect";
import { useUser } from "@clerk/nextjs";
import Button from "./Button";
import Link from "next/link";

const PreUpload: React.FC<{ setFile: (file: File) => void }> = ({
  setFile,
}) => {
  const { isSignedIn } = useUser();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  var cta = <div></div>;

  if (isSignedIn) {
    cta = (
      <Input
        type="file"
        className="mb-2"
        text="Upload Resume"
        onChange={handleFileChange}
      />
    );
  } else if (!isSignedIn) {
    cta = (
      <Link href={"/signup"}>
        <Button>Lets Start!</Button>
      </Link>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mb-28">
      <m.div
        initial={{ opacity: 0, y: "15%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.25 }}
        exit={{ opacity: 0, y: "15%" }}
        className="flex text-center p-4 mb2"
      >
        <TypewriterComponent
          options={{
            wrapperClassName:
              "text-white text-4xl md:text-5xl lg:text-6xl font-extrabold",
            cursorClassName: "text-white text-4xl lg:text-6xl font-bold",
            cursor: "",
            strings: "Boost your resume with AI.",
            loop: true,
            delay: 95,
            deleteSpeed: Infinity,
            autoStart: true,
          }}
        ></TypewriterComponent>
      </m.div>
      <m.div
        initial={{ opacity: 0, y: "15%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.35 }}
        exit={{ opacity: 0, y: "15%" }}
      >
        <p className="text-gray-200 lg:text-lg mb-8 text-center pr-4 pl-4 ">
          Want to land your dream job faster? Upload your resume and let our AI
          analyze it and give you custom feedback.
        </p>
      </m.div>
      <m.div
        initial={{ opacity: 0, y: "15%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.75, ease: "easeOut", delay: 0.45 }}
        exit={{ opacity: 0, y: "15%" }}
        className="text-center"
      >
        {cta}
        <p className="mt-6 text-neutral-500">PDF format, English Only.</p>
      </m.div>
    </div>
  );
};
export default PreUpload;
