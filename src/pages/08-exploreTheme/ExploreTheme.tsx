import { useNavigate } from "react-router-dom";

import { ActionButtons } from "../../components/ActionButtons";

export const ExploreTheme = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-40">
      <ul className="flex flex-col items-center gap-[0.625rem]">
        <li>
          <ActionButtons
            onClick={() => {
              navigate("/circle-me/category/cafe");
            }}
            disabled={false}
          >
            카페
          </ActionButtons>
        </li>
        <li>
          <ActionButtons
            onClick={() => {
              navigate("/circle-me/category/restaurant");
            }}
            disabled={false}
          >
            음식점
          </ActionButtons>
        </li>
        <li>
          <ActionButtons
            onClick={() => {
              navigate("/circle-me/category/culture");
            }}
            disabled={false}
          >
            문화시설
          </ActionButtons>
        </li>
        <li>
          <ActionButtons
            onClick={() => {
              navigate("/circle-me/category/playground");
            }}
            disabled={false}
          >
            관광명소
          </ActionButtons>
        </li>
        <li>
          <ActionButtons
            onClick={() => {
              navigate("/circle-me/category/hotel");
            }}
            disabled={false}
          >
            숙박
          </ActionButtons>
        </li>
      </ul>
    </div>
  );
};
