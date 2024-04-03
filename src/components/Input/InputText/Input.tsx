import React from "react";
import { useId, useState } from "react";
import * as S from "./styles";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  value?: string;
  label?: string;
  InputProps?: InputProps;
}

function InputText({
  label,
  name,
  type,
  startAdornment = false,
  endAdornment = false,
  ...rest
}: InputProps) {
  const labelId = useId();

  return (
    <>
      {label && <S.Label htmlFor={label}>{label}</S.Label>}
      <S.ContainerInput>
        {startAdornment && (
          <S.StartAdornment>{startAdornment}</S.StartAdornment>
        )}
        <S.Input id={labelId} name={name} type={type} {...rest} />
        {endAdornment && <S.StartAdornment>{endAdornment}</S.StartAdornment>}
      </S.ContainerInput>
    </>
  );
}
export default InputText;
