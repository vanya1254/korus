import React from "react";
import { CustomRadioBtn } from "../CustomRadioBtn";
import { OptionT } from "../CustomSelect";

type RadioBtnsPropsT = {
  htmlName: string;
  group: OptionT[];
};

export const RadioBtns: React.FC<RadioBtnsPropsT> = ({ htmlName, group }) => {
  return (
    <div>
      {group.map((dificulty, i) => (
        <CustomRadioBtn
          htmlId={`${dificulty}${i}`}
          htmlName={htmlName}
          htmlChecked={i ? false : true}
          value={dificulty.value}
          text={dificulty.name}
        />
      ))}
    </div>
  );
};
