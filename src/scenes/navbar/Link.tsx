import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage; // this turns the name of the page to lowercase so we can use it as an id later on. the replace part delete spaces. And treats it as the enum SelectedPage.

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
      transition duration-500 hover:text-primary-300
      `}
      //href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)} //when it is clicked it is going to change the stage
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
