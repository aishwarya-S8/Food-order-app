import React, { useState } from "react";
import { useEffect } from "react";
import "./Body.css";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/CartSlice";
const FoodMenu = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const addToCarts = (item) => {
    dispatch(addToCart(item));
  };
  const RemoveItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const [menu, setMenu] = useState([
    {
      courseType: [0],
      id: 0,
      title: "Grilled Vegetable Bruschetta",
      image:
        "https://www.foodandwine.com/thmb/bl9Npt5dKHQeM-olU-8NJ4r6cic=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/200707-r-xl-grilled-vegetable-bruschetta-72d895986944461f9714ded639e5b21d.jpg",
      description:
        "What could be more summery than grilled peppers and squash heaped on toasted country bread that's slathered with fresh basil pesto?",
      allery: ["milk", "gluten"],
      spiceLevel: 0,
      price: 200,
    },
    {
      courseType: [0],
      id: 1,
      title: "Zucchini-and-Pepper Gratin with Herbs and Cheese",
      image:
        "https://www.foodandwine.com/thmb/u7SvhM3rCOxYhQY7oceRNTM09FA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/HD-200907-r-zucchini-gratin-61432dc4b6df44398295aecabab127cb.jpg",
      description:
        "Pleasantly salty Sbrinz to top a gratin made with a ratatouille-like mix of sautéed zucchini strips, bell peppers and tomato.",
      allery: ["milk"],
      spiceLevel: 0,
      price: 100,
    },
    {
      courseType: [0],
      id: 2,
      price: 290,

      title: "Scallop Ceviche with Aguachile",
      image:
        "https://www.seriouseats.com/thmb/U_wP3BAdRugln8ir2udsEryhHGw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140908-aguachile-vicky-wasik-20-1ea2e4485ee74f4c9439613d92ccd22e.jpg",
      description:
        "Aguachile (chile water) is a vibrant sauce made with fresh chiles, herbs and cucumbers that’s fantastic on any type of fish or shellfish. ",
      allery: ["shellfish"],
      spiceLevel: 0,
    },
    {
      courseType: [0],
      id: 3,
      price: 280,

      title: "Roast Beef Summer Rolls",
      image:
        "https://www.foodandwine.com/thmb/WQ69WyM-JhXTfB4ct61xFLbYn9I=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/200909-xl-roast-beef-summer-rolls_0_0-f1d8e34728294db98c357c293ee93c3c.jpg",
      description:
        "Vietnamese summer rolls are often filled with or shrimp, but Grace Parisi makes hers with roast beef from the deli.",
      allery: [],
      spiceLevel: 0,
    },
    {
      courseType: [0],
      id: 4,
      price: 290,

      title: "Grilled Tomato Crostini",
      image:
        "https://feelgoodfoodie.net/wp-content/uploads/2019/09/Crostini-with-Roasted-Tomatoes-9.jpg",
      description:
        "Lightly golden brown toast with tomato Pleasantly salty Sbrinz to top a gratin made with a ratato.",
      allery: ["gluten"],
      spiceLevel: 0,
    },
    {
      courseType: [0],
      id: 5,
      price: 200,

      title: "Pickled Shrimp with Creamy Spinach Dip",
      image: "https://fooderific.com/thumbnails/300x300/0cdf285ec8df.jpg",
      description:
        "James Holmes grew up in Texas but didn't learn how to make pickled shrimp, a Gulf specialty, until he took a job at a New York City restaurant",
      allery: ["shellfish"],
      spiceLevel: 3,
    },
    {
      courseType: [1],
      id: 6,
      price: 200,

      title: "Tomato Soup with Feta, Olives and Cucumbers",
      image:
        "https://www.foodandwine.com/thmb/aF1At67bi25qiPxZBLRIkmmIISA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/201409-xl-tomato-soup-with-feta-olives-and-cucumber-2b9216bbdf5f47deb98f2d0b7a2b93ca.jpg",
      description:
        "This pretty, fresh-tasting tomato soup is David Chang’s riff on Greek salad: He tops it with tomatoes, olives, honeyed cucumbers and feta.",
      allery: [],
      spiceLevel: 0,
    },
    {
      courseType: [1],
      id: 7,
      price: 260,

      title: "Miso Soup with Turmeric and Tofu",
      image:
        "https://www.veganricha.com/wp-content/uploads/2017/01/vegan-turmeric-miso-soup-veganricha-9117.jpg",
      description:
        "Miso soup gets re-imagined by blogger Heidi Swanson, who adds earthy, brilliant yellow turmeric for additional flavor and color.",
      allery: [],
      spiceLevel: 0,
    },
    {
      courseType: [1],
      id: 8,
      title: "Mint and Pea Soup",
      image:
        "https://www.thespruceeats.com/thmb/9TUwcuYktjr_sBKab0pR3LMI7no=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/super-easy-pea-and-mint-soup-435604-hero_1-2c7e3183b54b449db87efd8e99244507.jpg",
      description:
        "Mint gives this soup a wonderfully fresh taste, and it makes a perfect lunch with some bread and cheese on the side.",
      allery: ["milk"],
      spiceLevel: 0,
      price: 200,
    },
    {
      courseType: [1],
      id: 9,
      price: 200,

      title: "Tomato Water Gazpacho",
      image:
        "https://media-cdn2.greatbritishchefs.com/media/myek5q0p/img59509.whqc_768x512q90fpt627fpl526.webp",
      description:
        "The base of it is built on the tomato seeds and pulp, plus the brine of pickled green tomatoes, from an elegant amuse-bouche of Tomato and Watermelon Bites.",
      allery: [],
      spiceLevel: 1,
    },
    {
      courseType: [1, 2],
      id: 10,
      price: 200,

      title: "Lobster Bisque",
      image:
        "https://cafedelites.com/wp-content/uploads/2020/02/Lobster-Bisque-IMAGE-1jpg.jpg",
      description:
        "Lobster shells from the tail, claws, knuckless, and legs are full of flavors and, when very gently simmered in water, yield a clean-tasting, briny stock.",
      allery: [],
      spiceLevel: 0,
    },
    {
      courseType: [2],
      id: 11,
      price: 200,

      title: "Seared Salmon with Summer Vegetables",
      image:
        "https://www.foodandwine.com/thmb/d28vWCTdTGquDc4TLM455awRkPc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/seared-salmon-with-summer-vegetables-XL-RECIPE0918-255be4a2d0ce44c4b71295a897eda055.jpg",
      description:
        "The myriad vegetables in the recipe—corn, spinach, shiitakes, and tomato—sing of late summer.",
      allery: ["mushrooms", "fish"],
      spiceLevel: 0,
    },
    {
      courseType: [2],
      id: 12,
      price: 200,

      title: "Arctic Char with Soba and Green Beans",
      image:
        "https://www.slurrp.com/web/_next/image?url=https%3A%2F%2Fimages.slurrp.com%2Fprod%2Frecipe_images%2Ffood-wine-set-1%2Farctic-char-soba-and-green-beans-1620725597_WRWLNJEKGGS5P6VL1CSH.webp%3Fimpolicy%3Dslurrp-20210601%26width%3D1200%26height%3D675&w=1920&q=75",
      description:
        "A very refreshing and bright soba noodle salad with green beans, radishes, romaine and fresh basil, and serves it with perfectly crisp pieces of arctic char.",
      allery: ["fish", "gluten"],
      spiceLevel: 0,
    },
    {
      price: 200,

      courseType: [2],
      id: 13,
      title: "Salmon Yakitori",
      image:
        "https://www.foodandwine.com/thmb/sKbWlPuSPWyO7fYuTHlyfDb00Fo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/salmon-yakitori-XL-RECIPE0618_0-7d4f49b75aeb4bf19678bcc009b4cf62.jpg",
      description:
        "A soy sauce, mirin, and brown sugar glaze caramelizes on the fish and baby bok choy as it grills, and also serves as a dipping sauce.",
      allery: ["gluten", "fish"],
      spiceLevel: 0,
    },
    {
      courseType: [2],
      id: 14,
      price: 200,

      title: "Crab and Smoked Salmon Pintxos with Vanilla Oil",
      image:
        "https://i.pinimg.com/originals/db/c9/4e/dbc94ec04934c4ab76ab8035ad16f90b.jpg",
      description:
        "These delightful pintxos combine a lemony fresh crab salad with smoked salmon and salty pops of salmon roe.",
      allery: ["fish", "shellfish"],
      spiceLevel: 0,
    },
    {
      courseType: [3],
      id: 15,
      price: 200,

      title: "Spinach Salad with Ginger-Soy Dressing",
      image:
        "https://www.slurrp.com/web/_next/image?url=https%3A%2F%2Fimages.slurrp.com%2Fprod%2Frecipe_images%2Ffood-wine-set-2%2Fspinach-salad-ginger-soy-dressing-1620796837_62Z8OWI27DXRTXAE72IO.webp%3Fimpolicy%3Dslurrp-20210601%26width%3D1200%26height%3D675&w=1920&q=75",
      description:
        "Fresh ginger warms up the soy-citrus dressing in this hearty spinach salad from New York chef JJ Johnson",
      allery: ["gluten"],
      spiceLevel: 1,
    },
    {
      price: 200,

      courseType: [3],
      id: 16,
      title: "Classic Caesar Salad",
      image:
        "https://www.jessicagavin.com/wp-content/uploads/2019/07/caesar-salad-9-600x900.jpg",
      description:
        "This classic Caesar salad is loadeed with plentiiy of garlics, anchovies and Parmigianos cheese. It's also fast and easy to make.",
      allery: ["egg", "milk"],
      spiceLevel: 0,
    },
    {
      price: 200,

      courseType: [3],
      id: 17,
      title: "Mixed Greens with Poached Eggs, Hazelnuts and Spices",
      image:
        "https://716f24d81edeb11608aa-99aa5ccfecf745e7cf976b37d172ce54.ssl.cf1.rackcdn.com/mixed-greens-with-poached-eggs-1675910l1.jpg",
      description:
        "At L'Arcangelo restaurant in Rome, chef Arcangelo Dandini makes this simple salad with whichever wild greens happen to be in season at the moment.",
      allery: ["egg", "nuts"],
      spiceLevel: 1,
    },
    {
      price: 200,

      courseType: [3],
      id: 18,
      title: "Butter Lettuce Salad with Tomato Vinaigrette",
      image:
        "https://s.aolcdn.com/images/dims?thumbnail=1044%2C503&quality=85&image_uri=https%3A%2F%2Fs3.amazonaws.com%2Fimages.comet.aol.com%2Ffood%2Frecipe%2Fmedia%2Fbutter-lettuce-salad-with-tomato-vinaigrette.jpg&client=76f99bdb8f78cd44cc0b&signature=66e3a737b0cf8bccd9927ea626edc9460114de13",
      description:
        "This delicious roasted-tomato vinaigrette is enhanced with blue cheese, which makes the dressing extra-thick and rich.",
      allery: ["egg", "milk"],
      spiceLevel: 0,
    },
    {
      courseType: [3],
      id: 19,
      price: 200,

      title: "Shrimp Salad with Green Curry Dressing",
      image:
        "https://www.foodandwine.com/thmb/PbrQT2N4VXTGNjpWrjBkG_XMDuc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/201504-xl-curried-shrimp-salad-6dd0dcb87dea40e28f68091376cf92b7.jpg",
      description:
        "Green curry paste is the secret ingredient in this supersimple, bright and crunchy shrimp salads t recipe from F&W’s Justin Chapple made wit.",
      allery: ["shellfish"],
      spiceLevel: 2,
    },

    {
      courseType: [4],
      id: 20,
      price: 200,

      title: "Piri Piri Chicken",
      image:
        "https://diethood.com/wp-content/uploads/2020/03/Piri-Piri-Chicken-7.jpg",
      description:
        "This riff on the piri piri marinade balances the heat of fresh chiles with sweet bell pepper, garlic, and a splash of tangy red wine vinegar.",
      allery: [],
      spiceLevel: 4,
    },
    {
      courseType: [4],
      id: 21,
      price: 200,

      title: "Mojo Pork Steak with Seared Avocados and Oranges",
      image:
        "https://www.slurrp.com/web/_next/image?url=https%3A%2F%2Fimages.slurrp.com%2Fprod%2Frecipe_images%2Ffood-wine-set-2%2Fmojo-pork-steak-seared-avocados-and-oranges-1620796474_HEE7BARPUZQBQLRASAZ3.webp%3Fimpolicy%3Dslurrp-20210601%26width%3D1200%26height%3D675&w=1920&q=75",
      description:
        "Chiles, citrus, and garlic make up the classic mojos rubs for this family-size blade steak, cut from the pork shoulder.",
      allery: [],
      spiceLevel: 0,
    },
    {
      courseType: [4],
      id: 22,
      price: 200,

      title: "Steak and Brassicas with Red Wine Sauce",
      image:
        "https://www.foodandwine.com/thmb/WCO80v8FnGoX9HFGBWxAIkhLO9Y=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/steak-and-brassicas-with-red-wine-sauce-XL-RECIPE1017-58efd17047924deda92a154504dcec5a.jpg",
      description:
        "The brassicas here include baby cauliflower, cute 2- to 4-inch heads that come in vibrant colors like green, orange and purple as well as the usual ivory.",
      allery: [],
      spiceLevel: 0,
    },
    {
      courseType: [4],
      id: 23,
      title: "Brisket with Sweet-and-Sour Onions",
      image:
        "https://www.foodandwine.com/thmb/pWRgiov2SGL4PGHWaUPqkdFmTec=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/brisket-with-sweet-and-sour-onions-XL-RECIPE1017_0-3250009d97a5412d9b545ebe8d4363dd.jpg",
      description:
        "This brisket recipe is from Jessamyn Rodriguez, the founder and CEO of Hot Bread Kitchen, the New York–based social enterprise that helps immigrant women and others launch careers and food businesses.",
      allery: ["gluten"],
      spiceLevel: 0,
      price: 200,
    },
    {
      courseType: [4],
      id: 24,
      title: "Veal Roast with Green Mashed Potatoes",
      image:
        "https://i.pinimg.com/originals/84/0e/68/840e6833ef117b8a428ee5e22d23a263.jpg",
      description:
        "Chef Eli Dahlin of Dame in Portland, Oregon, uses this “backwards” mashed potato technique for entertaining.",
      allery: ["milk"],
      spiceLevel: 0,
      price: 200,
    },
    {
      id: 25,
      price: 200,
      courseType: [5],
      title: "Strawberry Almond Cheesecake with Matzoh Crust",
      image:
        "https://www.foodandwine.com/thmb/4zYqAUUJbQyGQwxJl_B6DURl-pU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/strawberry-almond-cheesecake-with-matzo-crust-FT-RECIPE2018-658ff441ee744510a1c9b6c20c9c8d43.jpg",
      description:
        "This silky cheesecake gets sweetness and tang from a blend of cream cheese and sour cream.",
      allery: ["milk", "egg"],
      spiceLevel: 0,
    },
    {
      courseType: [5],
      id: 26,
      price: 200,
      title: "Apple Tart with Apricot Glaze",
      image:
        "https://www.foodandwine.com/thmb/FMBIHf9gipjPwxmkABdOTBynbsU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/apple-tart-with-apricot-glaze-XL-RECIPE1018-62b5d0d798f14b1cb9ed159a47734177.jpg",
      description:
        "This tart is the final dish in a dinner party menu designed by Stitt and inspired by Olney’s love of seasonal produce and great wine.",
      allery: ["gluten", "milk"],
      spiceLevel: 0,
    },
    {
      price: 200,
      courseType: [5],
      id: 27,
      title: "Classic French Macarons",
      image:
        "https://www.aheadofthyme.com/wp-content/uploads/2017/02/french-macarons-with-vanilla-buttercream-icing-1024x1536.jpg",
      description:
        "French macarons (made with almond flour, and distinct from their coconut cousins, macaroons) require some practice and patience.",
      allery: ["gluten", "egg"],
      spiceLevel: 0,
    },
    {
      price: 200,
      courseType: [5],
      id: 28,
      title: "Ultimate Chocolate Mousse",
      image:
        "https://www.recipetineats.com/wp-content/uploads/2018/09/Chocolate-Mousse_9.jpg",
      description:
        "This is the ultimate, the definitive, the ne plus ultra, the finest chocolate mousse creation ever whipped up.",
      allery: ["egg", "milk"],
      spiceLevel: 0,
    },
    {
      courseType: [5],
      id: 29,
      price: 200,
      title: "Brown Sugar Cake with Ricotta and Blueberries",
      image:
        "https://www.foodandwine.com/thmb/lsLLO18DI61sY1ZnM1JCpQUubU4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/brown-sugar-cake-with-ricotta-and-blueberries-ft-RECIPE0718-bbcbb34185ec41579187dbfd070f88a1.jpg",
      description:
        "The chewy, dense confection is like a cross between a cake and a blondie. It’s delicious both by itself and dressed up with Ricotta Mousse and Blueberry Sauce.",
      allery: ["egg", "gluten"],
      spiceLevel: 0,
    },
  ]);

  return (
    <>
      <Header />
      <div className="body">
        <div className="menuItems">
          {menu.map((item) => (
            <div className="menuDeatil">
              <h6>{item.title}</h6>
              <img src={item.image} width={300} height={300}></img>
              <p style={{ marginTop: 10 }}>
                {item.description.length > 60
                  ? item.description.substr(0, 60)
                  : item.descriptionv}
              </p>
              <p style={{ color: "green", fontWeight: "bold" }}>
                Great offer price
              </p>
              <h6> {item.price}</h6>
              {cart.some((x) => x.id === item.id) ? (
                <button
                  className="cartBtn"
                  onClick={() => RemoveItemFromCart(item)}
                >
                  Remove from cart{" "}
                </button>
              ) : (
                <button className="cartBtn" onClick={() => addToCarts(item)}>
                  Add to cart{" "}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodMenu;
