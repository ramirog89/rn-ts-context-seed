import React from 'react';
import { IDependencies } from './rootState';

export type Provider = React.JSXElementConstructor<React.PropsWithChildren<any>>;

interface IComposeProps {
  providers: Provider[];
  children: React.ReactNode;
  deps: IDependencies;
}

export const ComposeProvider = ({
  providers = [],
  deps,
  children,
  ...rest
}: IComposeProps) => {
  return (
    <>
      {providers.reduceRight((acc, Comp) => {
        return <Comp deps={deps} {...rest}>{acc}</Comp>
      }, children)}
    </>
  )
}