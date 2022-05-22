import { useRouter } from "next/router";
import SilentHill1 from "./SilentHill1";

const PageNo = () => {
  const router = useRouter();
  const pageNumber = router.query.PageNo;
  return (
    <>
      {pageNumber == "silentHill1" ? (
        <SilentHill1 />
      ) : pageNumber == 2 ? (
        <h1>This is page 2 and hurray</h1>
      ) : (
        `This is page ${pageNumber}`
      )}
      {/* <h1>my {pageNumber} content</h1> */}
    </>
  );
};

export default PageNo;
