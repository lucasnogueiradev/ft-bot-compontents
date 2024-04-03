import React, { useState } from "react";
import * as S from "./styles";
export interface CheckboxProps {
  label?: string;
  type: "checkbox" | "radio";
}

const InputCheckbox = ({ label, type, ...rest }: CheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <S.CheckboxContainer>
      <S.CheckboxInput
        type={type}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <S.CheckboxLabel>{label}</S.CheckboxLabel>
    </S.CheckboxContainer>
  );
};

export default InputCheckbox;
