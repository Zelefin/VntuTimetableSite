import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function RootPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get("tgWebAppStartParam")) {
      const tgparams = searchParams.get("tgWebAppStartParam").split("_");
      {
        /* facultyId_groupId */
      }
      const facultyParam = parseInt(tgparams[0]);
      const groupParam = parseInt(tgparams[1]);
      navigate(`/${facultyParam}/${groupParam}`);
    }
  });

  return (
    <div className="bg-gray-900 overflow-auto w-full h-full text-white font-bold">
      <h1 className="m-5">
        Вітаю! Це root сторінка. Взагалі це не повинно бути видно, тому якщо Ви
        очікували побачити розклад, то це точно баг... Щоб переглянути розклад
        можна перейти по посиланню:
      </h1>
      <div className="m-5">
        <a
          href="VntuTimetableSite/210/10840"
          className="text-blue-400 break-words"
        >
          https://zelefin.github.io/VntuTimetableSite/210/10840
        </a>
      </div>
    </div>
  );
}

export default RootPage;
