import type { ReactNode } from 'react';

type IMain = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMain) => (
  <div className="w-full font-inter antialiased">
    {props.meta}

    <div className="mx-auto w-full">
      <main className="text-xl">{props.children}</main>
    </div>
  </div>
);

export { Main };
