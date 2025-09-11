type MyComponentProps = {
  otherProp: string;
  children: React.ReactNode;
};

const Child = ({ children, otherProp }: MyComponentProps) => {
  return <div>{children}</div>;
};
