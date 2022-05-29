import { useRouter } from "next/router";
import SilentHill1 from "./SilentHill1";
import SilentHill2 from "./SilentHill2";
import react, { useState, useEffect } from "react";

const PageNo = () => {
  const router = useRouter();
  const pageNumber = router.query.PageNo;

  const [monsterData, setMonsterData] = useState([]);
  useEffect(() => {
    const monsterFetchUrl =
      "https://pacific-journey-89141.herokuapp.com/api/silent-hill-monsters";

    const fetchData = async () => {
      const response = await fetch(monsterFetchUrl);
      const data = await response.json();
      console.log(data.data);
      console.log(data.data[0].attributes?.silenthill1monsters);
      setMonsterData(data.data[0].attributes?.silenthill1monsters);
    };
    fetchData();
  }, []);
  return (
    <>
      {pageNumber == "silentHill1" ? (
        <SilentHill1 monsterData={monsterData} />
      ) : pageNumber == "silentHill2" ? (
        <SilentHill2 monsterData={monsterData} />
      ) : (
        `This is page ${pageNumber}`
      )}
      {/* <h1>my {pageNumber} content</h1> */}
    </>
  );
};

export default PageNo;
