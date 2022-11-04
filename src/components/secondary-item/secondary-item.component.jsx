import {
  BackgroundImage,
  Body,
  SecondaryItemComponent,
} from "./secondary-item.styles.jsx";

import { useNavigate } from "react-router-dom";

const SecondItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigationHandler = () => navigate(route);
  return (
    <SecondaryItemComponent onClick={onNavigationHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h1>{title}</h1>
        <p>Shop Now</p>
      </Body>
    </SecondaryItemComponent>
  );
};

export default SecondItem;
