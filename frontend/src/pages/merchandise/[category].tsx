import { merchandiseListsAtom } from "@/atom";
import axios from "axios";
import Products from "components/Products/Products";
import { useAtom } from "jotai";

export const getStaticPaths = async () => {
  const res = (await axios.get(
    "http://localhost:1337/api/merchandises?populate=*",
    { headers: { Authorization: "bearer" + process.env.API_TOKEN } }
  )).data.data;

  const paths = res.map((cate:any) => ({
    params: {
      category:cate.attributes.category.data.attributes.title,
    },
  }));
  return { paths, fallback: false };
};
     // `http://localhost:1337/api/merchandises?populate=*&[filters][category][title][$eq]=mouse`,

export async function getStaticProps(paths:any) {

  const merchandiseData =
     (
        await axios.get(
        `http://localhost:1337/api/merchandises?populate=*&[filters][category][title][$eq]=${paths.params.category}`,
        { headers: { Authorization: "bearer" + process.env.API_TOKEN } }
      )
    ).data.data;

  return {
    props: {
      merchandise: merchandiseData,
    },
  };
}

const Merchandise = (props: any) => {
  const { merchandise } = props;
  const [merchandiseList,setMerchandiseLists] = useAtom(merchandiseListsAtom)
  setMerchandiseLists(merchandise)


  return <Products />;
};

export default Merchandise;
