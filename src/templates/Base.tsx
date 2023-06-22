import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import TXT from "./strings";

import Image from "next/image";

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description}/>
    <main className="min-h-[100vh] w-full flex-1 flex flex-col items-center justify-center overflow-hidden">
      <Image
        src={"/assets/images/transp-reduced.png"}
        width="251px"
        height="251px"
      />
      <h1 className="text-black text-lg mb-10">{TXT("NOTICE")}</h1>
    </main>
  </div>
);

export { Base };
