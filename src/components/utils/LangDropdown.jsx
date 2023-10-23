import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Common } from "../../language-data/Common";
import { FaAngleDown } from "react-icons/fa6";
import { changeLang } from "../../redux/reducers/LanguageSlice";

const items = [
  {
    label: <button className="px-4">English</button>,
    key: "english",
  },
  {
    label: <button className="px-4">Hindi</button>,
    key: "hindi",
  },
  {
    label: <button className="px-4">Marathi</button>,
    key: "marathi",
  },
];

const LangDropdown = () => {
  const [selectedLang, setSelectedLang] = useState("");
  const lang = useSelector((state) => state.lang.lang);
  const dispatch = useDispatch();

  const handleButtonClick = (e) => {
    if (lang === "e.key") {
      return;
    }

    dispatch(changeLang(e.key));
  };

  useEffect(() => {
    setSelectedLang(Common[lang].key);
  }, [lang]);
  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: [lang],
        onClick: handleButtonClick,
      }}
      trigger={["click"]}
    >
      <button className="px-4 py-2 border flex items-center gap-x-2">
        {selectedLang} <FaAngleDown />
      </button>
    </Dropdown>
  );
};

export default LangDropdown;
