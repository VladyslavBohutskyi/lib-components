import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { IDisplay, IGlobal, IProportions } from '../models/global';

interface IInput extends IGlobal, InputHTMLAttributes<HTMLInputElement>, IDisplay, IProportions {
  border?: string
  br?: string
  fs?: string
  placeholderColor?: string
  ls?: string
  lh?: string
  fw?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
}

interface ITextarea extends IInput {
  minH?: string
}

interface IForm extends IGlobal, IDisplay, IProportions {
  shadow?: string
  shadowColor?: string
  border?: string
  br?: string
}

export const Input = styled.input<IInput>`
  outline: none;
  transition: all 0.3s ease-in-out;
  flex-wrap: ${(p) => p.flexwrap};
  display: ${(p) => p.display ?? 'flex'};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems ?? 'center'};
  flex-direction: ${(p) => p.flexDirection};
  line-height: ${(p) => p.lh}; 
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls}; 
  font-size: ${(p) => p.fs};
  border-radius: ${(p) => p.br ?? '4px'};
  height: ${(p) => p.h};
  width: ${(p) => p.w ?? '100%'};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
  border: ${(p) => p.border ?? '1px solid #ccc'};
  color: ${(p) => p.color};
  background: ${(p) => p.bg};
  padding: ${(p) => p.p ?? '8px 12px'}; 
  margin: ${(p) => p.m};
  padding-top:  ${(p) => p.pt};
  padding-right:  ${(p) => p.pr};
  padding-bottom:  ${(p) => p.pb};
  padding-left:  ${(p) => p.pl};
  margin-top:  ${(p) => p.mt};
  margin-right:  ${(p) => p.mr};
  margin-bottom:  ${(p) => p.mb ?? '10px'};
  margin-left:  ${(p) => p.ml};
  ${(p) => p.sx}
  &::placeholder{
    color: ${(p) => p.placeholderColor ?? '#ccc'};
  }
`;

export const Textarea = styled.textarea<ITextarea>`
  outline: none;
  transition: all 0.3s ease-in-out;
  resize: none;
  flex-wrap: ${(p) => p.flexwrap};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems};
  flex-direction: ${(p) => p.flexDirection};
  min-height: ${(p) => p.minH};
  line-height: ${(p) => p.lh}; 
  font-weight: ${(p) => p.fw};
  letter-spacing: ${(p) => p.ls}; 
  font-size: ${(p) => p.fs};
  border-radius: ${(p) => p.br ?? '4px'};
  height: ${(p) => p.h};
  width: ${(p) => p.w ?? '100%'};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
  border: ${(p) => p.border ?? '1px solid #ccc'};
  color: ${(p) => p.color};
  background: ${(p) => p.bg};
  padding: ${(p) => p.p ?? '12px 14px'}; 
  margin: ${(p) => p.m};
  padding-top:  ${(p) => p.pt};
  padding-right:  ${(p) => p.pr};
  padding-bottom:  ${(p) => p.pb};
  padding-left:  ${(p) => p.pl};
  margin-top:  ${(p) => p.mt};
  margin-right:  ${(p) => p.mr};
  margin-bottom:  ${(p) => p.mb ?? '10px'};
  margin-left:  ${(p) => p.ml};
  ${(p) => p.sx}
  &::placeholder{
    color: ${(p) => p.placeholderColor ?? '#ccc'};
  }
`;

export const Form = styled.form<IForm>`
  flex-wrap: ${(p) => p.flexwrap};
  display: ${(p) => p.display};
  justify-content: ${(p) => p.justifycontent};
  align-items: ${(p) => p.alignitems};
  flex-direction: ${(p) => p.flexDirection};
  height: ${(p) => p.h};
  width: ${(p) => p.w};
  min-height: ${(p) => p.minH};
  min-width: ${(p) => p.minW};
  max-height: ${(p) => p.maxH};
  max-width: ${(p) => p.maxW};
  box-shadow:${(p) => p.shadow ? `0px 0px 09px 1px ${p.shadowColor ?? 'grey'}` : false};
  border: ${(p) => p.border};
  border-radius: ${(p) => p.br};
  color: ${(p) => p.color};
  background: ${(p) => p.bg};
  padding: ${(p) => p.p}; 
  margin: ${(p) => p.m};
  padding-top:  ${(p) => p.pt};
  padding-right:  ${(p) => p.pr};
  padding-bottom:  ${(p) => p.pb};
  padding-left:  ${(p) => p.pl};
  margin-top:  ${(p) => p.mt};
  margin-right:  ${(p) => p.mr};
  margin-bottom:  ${(p) => p.mb};
  margin-left:  ${(p) => p.ml};
  ${(p) => p.sx}
`
