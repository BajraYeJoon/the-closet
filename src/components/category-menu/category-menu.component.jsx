import "./categories.styles.scss";

import SecondItem from "../secondary-item/secondary-item.component";

const MainCategory = () => {
  const categories = [
    {
      id: 1,
      title: "HATS",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      route: "shop/hats",
    },
    {
      id: 2,
      title: "JACKETS",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      route: "shop/jackets",
    },
    {
      id: 3,
      title: "SNEAKERS",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      route: "shop/sneakers",
    },
    {
      id: 4,
      title: "WOMEN",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      route: "shop/women",
    },
    {
      id: 5,
      title: "MEN",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      route: "shop/men",
    },
  ];

  return (
    <div className="main-container">
      {categories.map((category) => (
        <SecondItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default MainCategory;
