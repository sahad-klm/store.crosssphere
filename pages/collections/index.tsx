import Layout from "components/layout/layout";
import { useSearchParams,  } from "next/navigation";

import React from "react";

const index = () => {

  console.log(useSearchParams());
  
  return <Layout />
};

export default index;
